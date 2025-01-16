import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="Doodle3D logo"
          width={180}
          height={38}
          priority
        />

        <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">
          Transform Your Doodles into 3D Creations
        </h1>

        <p className="text-base sm:text-lg text-center sm:text-left text-gray-700 dark:text-gray-300">
          Welcome to Doodle3D, the web app that turns your 2D sketches into stunning 3D models. 
          Unleash your creativity and see your ideas come to life in a whole new dimension!
        </p>

        <ol className="list-inside list-decimal text-sm sm:text-base text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Start by drawing a doodle in the canvas provided.
          </li>
          <li className="mb-2">
            Watch as your sketch is instantly transformed into a 3D model.
          </li>
          <li>
            Customize and download your creation or share it with the world.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/create"
          >
            Start Drawing
          </a>
          <a
            className="rounded-full border border-solid border-gray-300 dark:border-gray-600 transition-colors flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/learn-more"
          >
            Learn More
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/examples"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          See Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
        >
          <Image
            aria-hidden
            src="/info.svg"
            alt="Info icon"
            width={16}
            height={16}
          />
          About Us
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
        >
          <Image
            aria-hidden
            src="/contact.svg"
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contact Us
        </a>
      </footer>
    </div>
  );
}
