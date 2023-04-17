import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from "@/components/Landing";
import Services from "@/components/services";
import Testing from "@/components/Testing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Landing />
      <Services limit={6} />
      <Testing />
    </main>
  );
}
