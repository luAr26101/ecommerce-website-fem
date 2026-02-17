import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <Image
          className="dark:invert"
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
      </main>
    </div>
  );
}
