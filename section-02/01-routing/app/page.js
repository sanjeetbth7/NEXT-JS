import Link from "next/link";
export default function Home() {
  return (
    <>
    <h1>Hello!!! I am Sanjeet</h1>
    <Link href="/about">About</Link> <br />
    <Link href="/services">Services</Link> <br />
    </>
  );
}
