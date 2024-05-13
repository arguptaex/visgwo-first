// import Image from "next/image";

import Link from "next/link";
import AllProducts from "./products/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello

      {/* <AllProducts/> */}
      <Link href="/about">About Us</Link>
    </main>
  );
}
