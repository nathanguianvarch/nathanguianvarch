import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <section className="w-screen h-[calc(100vh-64px)] flex justify-center items-center">
      <div className="flex gap-6 sm:gap-8 md:gap-10 justify-center items-center">
        <div className="flex items-center text-center">
          <Image
            src="https://cgw9vwvsh4bcdqxj.public.blob.vercel-storage.com/profile-cropped.jpg"
            alt="portfolio"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold tracking-tighter text-5xl">
              Hi, I’m Nathan Guianvarc’h
            </h1>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              I&apos;m a passionate web{" "}
              <span className="font-bold">developer</span> who loves{" "}
              <span className="font-bold">creating beautiful</span> and
              <span className="font-bold"> functional websites</span>.
            </p>
            <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
              Currently studying at{" "}
              {/* <Image
                alt="Arkea"
                className="h-full w-4 rounded inline-block"
                src="arkea.png"
              />{" "} */}
              <span className="font-bold">CESI</span> in Guipavas while working
              part-time at{" "}
              <span className="block">
                {/* <Image
                  alt="Arkea"
                  className="h-full w-4 rounded inline-block"
                  src="arkea.png"
                />{" "} */}
                <span className="font-bold">Crédit Mutuel Arkea</span>
              </span>
            </p>
            <div className="flex gap-2">
              <a
                href="mailto:nathan.guianvarc+h@gmail.com"
                className="bg-white/10 hover:bg-white/20 hover:text-blue-500 px-4 py-1.5 rounded-xl flex items-center gap-2"
              >
                <Linkedin />
                LinkedIn
              </a>
              <a
                href="mailto:nathan.guianvarc+h@gmail.com"
                className="bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-xl flex items-center gap-2"
              >
                <Mail />
                Mail
              </a>
              <a
                href="mailto:nathan.guianvarc+h@gmail.com"
                className="bg-white/10 hover:bg-white/20 px-4 py-1.5 rounded-xl flex items-center gap-2"
              >
                <Github />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
