import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "./Sections/About";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            duration: 2000,
            style: {
              background: "green",
              color: "white",
            },
          },
        }}
      />
    </main>
  );
}
