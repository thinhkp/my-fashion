import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { prisma } from "@/services/prisma";
import { hasManageAccess } from "@/utils/verify-token";
import { COOKIE_NAME } from "@/config/cookie";

// GET - Fetch all categories for admin
export async function GET(request: NextRequest) {
  try {
    // Verify access permission
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// POST - Create new category
export async function POST(request: NextRequest) {
  try {
    // Verify access permission
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const formData = await request.formData();
    const categoryDataStr = formData.get("categoryData");

    if (!categoryDataStr || typeof categoryDataStr !== "string") {
      return NextResponse.json(
        { message: "Missing category data" },
        { status: 400 }
      );
    }

    const categoryData = JSON.parse(categoryDataStr);
    const imageFile = formData.get("image") as File | null;

    // Handle image upload
    let imageName = null;
    if (imageFile) {
      // Create directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), "public/image/categories");
      await mkdir(uploadDir, { recursive: true });

      // Generate filename using slug and timestamp for better uniqueness
      const timestamp = Date.now();
      const fileExt = imageFile.name.split(".").pop() || "jpg";
      imageName = `${categoryData.slug}-${timestamp}.${fileExt}`;
      const filePath = path.join(uploadDir, imageName);

      try {
        // Save file to server
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        await writeFile(filePath, buffer);
        console.log(`Successfully saved new category image: ${filePath}`);
      } catch (error) {
        console.error(`Error saving category image file: ${filePath}`, error);
        imageName = null; // Don't set image name if saving failed
      }
    }

    // Create category in database
    const category = await prisma.category.create({
      data: {
        name: categoryData.name,
        slug: categoryData.slug,
        description: categoryData.description || null,
        categorystatus: categoryData.categorystatus,
        image: imageName,
        parentcategoryid: categoryData.parentcategoryid || null,
        isshow: categoryData.isshow,
      },
    });

    return NextResponse.json({
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { message: "Failed to create category", error: (error as Error).message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
