import Banner from "@/components/home/Banner";
import Servers from "@/components/home/Servers";
import Title from "@/components/home/Title";
import Oferta from "@/components/oferta";

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">aimus</h1>
      <Banner />
      <Oferta />
      <Title />
      <Servers />
    </main>
  );
}
