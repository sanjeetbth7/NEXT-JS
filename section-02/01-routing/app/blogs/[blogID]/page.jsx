import Link from 'next/link';

export default async function Page({ params }) {
  const { blogID } = await params;

  return (
    <div>
      <h1>Page: {blogID}</h1>

      <Link href={`/blogs/${blogID}/comments`}>
        Go to Comments
      </Link>
    </div>
  );
}
