import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-black text-center">
      <div className="h-fit w-screen p-5">
        <img src="/images/logo.svg" />
      </div>
      <div className="grid mobile:grid-cols-2 grid-cols-1 px-10">
        <div className="grid grid-cols-1 justify-items-center">
          <div className="flex flex-col order-2 mobile:order-first p-5 justify-center text-start">
            <h1 className="font-bold mobile:text-6xl text-3xl">
              Make remote work
            </h1>
            <h2 className="py-5">
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </h2>
            <button className="bg-black text-white px-5 py-2 rounded-lg w-fit">
              Learn more
            </button>
          </div>
          <div className="w-fit mobile:hidden">
            <img src="/images/image-hero-mobile.png" className="" />
          </div>
          <div className="flex order-last py-2 place-content-around w-screen mobile:w-full items-center">
            <img src="/images/client-databiz.svg" className="w-20 h-fit" />
            <img src="/images/client-audiophile.svg" className="w-12 h-fit" />
            <img src="/images/client-meet.svg" className="w-20 h-fit" />
            <img src="/images/client-maker.svg" className="w-20 h-fit" />
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/images/image-hero-desktop.png" width={500} className="hidden mobile:flex" />

        </div>
      </div>

    </main>
  );
}
