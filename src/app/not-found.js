import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto py-18">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="bg-brand px-8 py-3">
        Return Home
      </Link>
    </div>
  );
}
