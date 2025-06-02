import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, unlink } from "fs/promises";
import path from "path";
import { existsSync } from "fs";
import { prisma } from "@/services/prisma";
import { hasManageAccess } from "@/utils/verify-token";
import { COOKIE_NAME } from "@/config/cookie";

interface Props {
  params: Promise<{ id: string }>;
}

// GET - Fetch a specific category
export async function GET(request: NextRequest, context: Props) {
  try {
    // Verify access permission
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid category ID" },
        { status: 400 }
      );
    }

    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      data: category,
      message: "Category fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Update a category
export async function PUT(request: NextRequest, context: Props) {
  try {
    // Verify access permission
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid category ID" },
        { status: 400 }
      );
    }

    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { id },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    const formData = await request.formData();
    const categoryDataStr = formData.get("categoryData");

    if (!categoryDataStr || typeof categoryDataStr !== "string") {
      return NextResponse.json(
        { error: "Missing category data" },
        { status: 400 }
      );
    }

    const categoryData = JSON.parse(categoryDataStr);
    const updateImage = formData.get("updateImage") === "true";
    const removeImage = formData.get("removeImage") === "true";
    const imageFile = formData.get("image") as File | null;

    // Directory for category images
    const uploadDir = path.join(process.cwd(), "public/image/categories");
    await mkdir(uploadDir, { recursive: true });

    // Handle image operations
    let imageName = existingCategory.image;

    // If removeImage is true, delete the existing image
    if (removeImage && existingCategory.image) {
      const oldImagePath = path.join(uploadDir, existingCategory.image);
      try {
        if (existsSync(oldImagePath)) {
          await unlink(oldImagePath);
          console.log(`Successfully deleted old image: ${oldImagePath}`);
        } else {
          console.log(`Image file not found: ${oldImagePath}`);
        }
      } catch (error) {
        console.error(`Error deleting image file: ${oldImagePath}`, error);
      }
      imageName = null;
    }

    // If updateImage is true, upload new image
    if (updateImage && imageFile) {
      // Delete old image if exists
      if (existingCategory.image) {
        const oldImagePath = path.join(uploadDir, existingCategory.image);
        try {
          if (existsSync(oldImagePath)) {
            await unlink(oldImagePath);
            console.log(
              `Successfully deleted old image before update: ${oldImagePath}`
            );
          }
        } catch (error) {
          console.error(
            `Error deleting old image file before update: ${oldImagePath}`,
            error
          );
        }
      }

      // Generate new filename with timestamp to prevent caching issues
      const timestamp = Date.now();
      const fileExt = imageFile.name.split(".").pop() || "jpg";
      imageName = `${categoryData.slug}-${timestamp}.${fileExt}`;
      const filePath = path.join(uploadDir, imageName);

      try {
        // Save new file
        const buffer = Buffer.from(await imageFile.arrayBuffer());
        await writeFile(filePath, buffer);
        console.log(`Successfully saved new image: ${filePath}`);
      } catch (error) {
        console.error(`Error saving new image file: ${filePath}`, error);
        // Don't update the image name if saving failed
        imageName = existingCategory.image;
      }
    }

    // Log image status for debugging
    console.log("Image operations complete:");
    console.log("- Original image:", existingCategory.image);
    console.log("- New image name:", imageName);
    console.log("- Upload directory:", uploadDir);

    // Check if the parent category is not the category itself
    if (categoryData.parentcategoryid === id) {
      return NextResponse.json(
        { error: "A category cannot be its own parent" },
        { status: 400 }
      );
    }

    // Update category in database
    const updatedCategory = await prisma.category.update({
      where: { id },
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
      data: updatedCategory,
      message: "Category updated successfully",
    });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// DELETE - Delete a category
export async function DELETE(request: NextRequest, context: Props) {
  try {
    // Verify access permission
    if (!(await hasManageAccess(request, COOKIE_NAME)))
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const params = await context.params;
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid category ID" },
        { status: 400 }
      );
    }

    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
      where: { id },
      include: {
        productcategory: true,
        childcategory: true,
      },
    });

    if (!existingCategory) {
      return NextResponse.json(
        { error: "Category not found" },
        { status: 404 }
      );
    }

    // Check if category has child categories
    if (existingCategory.childcategory.length > 0) {
      return NextResponse.json(
        { error: "Cannot delete a category that has child categories" },
        { status: 400 }
      );
    }

    // Check if products are associated with this category
    if (existingCategory.productcategory.length > 0) {
      return NextResponse.json(
        { error: "Cannot delete a category that has associated products" },
        { status: 400 }
      );
    }

    // Delete image if exists
    if (existingCategory.image) {
      const imagePath = path.join(
        process.cwd(),
        "public/image/categories",
        existingCategory.image
      );
      if (existsSync(imagePath)) {
        await unlink(imagePath);
      }
    }

    // Delete the category
    await prisma.category.delete({
      where: { id },
    });

    return NextResponse.json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
