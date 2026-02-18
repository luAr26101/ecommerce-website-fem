import Container from "@/app/components/layout/Container";
import Navbar from "@/app/components/layout/Navbar";
import Image from "next/image";
import Hero from "./components/layout/Hero";

export default function Home() {
  return (
    <Hero>
      <Container>
        <Navbar />
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="Pattern circles"
          width={1440}
          height={729}
        />
        <h1>Hello, Next.js</h1>
        <p className="random-class text-primary text-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
          eveniet iure a sapiente dolor labore dignissimos quis, earum autem
          atque odio voluptatum debitis, numquam quasi ducimus cumque omnis
          aspernatur maiores.
        </p>
      </Container>
    </Hero>
  );
}
