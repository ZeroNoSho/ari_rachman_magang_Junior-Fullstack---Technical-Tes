import Contact from "@/components/home/contact";
import First from "@/components/home/first";
import Servis from "@/components/home/services";
import Viewproduct from "@/components/home/viewproduct";

export default function Home() {
  return (
    <main>
      <First></First>
      <Viewproduct></Viewproduct>
      <Servis></Servis>
      <Contact></Contact>
    </main>
  );
}
