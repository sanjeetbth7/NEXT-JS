import Link from "next/link";

export default function Services() {
  return (
    <>
      <div>All Services</div>
      <div>
        <Link href="/services/web-development">Web Development</Link> <br/>
        <Link href="/services/seo">SEO</Link>
      </div>
    </>
  );
}
