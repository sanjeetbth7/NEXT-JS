import Link from "next/link";

export const metadata = {
  title: {
    default: 'My Website',
    template: "%s | My Website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background : 'LawnGreen'}}>Header</header>
        <Link href="/">Home</Link>
        {children}
        <footer style={{background : 'LightGreen'}}>Footer</footer>
      </body>
    </html>
  );
}
