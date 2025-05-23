export async function fetchApi<T>({
  url,
  options = {},
  params = {},
}: {
  url: string;
  options?: RequestInit;
  params?: Record<string, string | number | boolean>;
}): Promise<T> {
  try {
    // Convert params to query string if provided
    if (Object.keys(params).length > 0) {
      const queryString = new URLSearchParams(
        Object.entries(params).reduce((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {} as Record<string, string>)
      ).toString();
      url += `?${queryString}`;
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

type QueryParams = Record<string, string | number | boolean | string[]>;

export function createUrl(baseUrl: string, params?: QueryParams): string {
  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      // Handle array values (multiple values for same key)
      value.forEach(item => searchParams.append(key, String(item)));
    } else if (value !== undefined && value !== null && value !== '') {
      // Handle single values, skip empty/null/undefined
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}