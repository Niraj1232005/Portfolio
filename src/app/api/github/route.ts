export async function GET() {
  try {
    const res = await fetch(
      "https://api.github.com/users/Niraj1232005/repos",
      {
        next: { revalidate: 3600 }, // cache for 1 hour (performance boost)
      }
    );

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json([]);
  }
}
