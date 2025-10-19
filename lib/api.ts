// lib/api.ts
export async function fetchData<T>(url: string): Promise<T> {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
    return res.json();
  } catch (err) {
    console.error("API Error:", err);
    throw err;
  }
}
