import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Footer />
    </main>
  );
}
