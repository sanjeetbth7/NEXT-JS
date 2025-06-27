import Link from "next/link";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
    <h1>Hello!!! I am Sanjeet</h1>
    <Link href="/about">About</Link> <br />
    <Link href="/services">Services</Link> <br />
    <Link href="/blogs">Blogs</Link> <br />
    </>
  );
}
