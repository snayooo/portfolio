"use client";
import Link from "next/link";
import About from "@/components/pages/About";
import Footer from "@/components/Footer";
import { projects } from "@/projectsData";
import { Chip } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-neutral-950">
        <div className="h-full w-full flex items-center justify-center flex-col mt-[-96px]">
          <p className="sm:text-3xl text-xl">Hi stranger👋, I am</p>
          <h1 className="sm:text-9xl text-7xl bg-gradient-to-tr from-fuchsia-700 to-violet-900 bg-clip-text text-transparent font-bold">
            maurice
          </h1>
          <p className="text-base text-center mx-5">
            Welcome to my Website🌐! Do not mind taking a look around and{" "}
            <Link className="underline" href="/#contact">
              saying hello
            </Link>{" "}
            :).
          </p>
        </div>
        <div id="about-me" className="w-full py-20">
          <h1 className="sm:text-8xl text-5xl text-center text-purple-700 font-bold">
            About me
          </h1>
          <About />
        </div>
        <div id="projects" className="w-full py-20">
          <h1 className="sm:text-8xl text-5xl text-center text-purple-700 font-bold">
            My work
          </h1>
          <div className="w-[60vw] sm:mx-[20vw] mx-[10vw] flex justify-evenly sm:flex-row flex-col">
            {projects.map((project) => {
              return (
                <div
                  className="p-4 sm:w-96 w-[80vw] h-auto bg-neutral-800 rounded-xl mt-8 flex items-center flex-col"
                  key={project.id}
                >
                  <Chip variant="bordered" color={project.statusColor}>
                    {project.status}
                  </Chip>
                  <img
                    src={project.imgUrl}
                    alt="Image not availible"
                    className="rounded-xl h-[25vh] w-[25vh] my-2 items-center"
                  />
                  <h1 className="text-2xl text-center font-semibold text-purple-700">
                    {project.title}
                  </h1>
                  <div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="contact" className="w-full py-20">
          <h1 className="sm:text-8xl text-5xl text-center text-purple-700 font-bold">
            Get in touch
          </h1>
          <p className="sm:text-3xl text-xl mt-4 text-center">
            🚧Work in progress.🚧 But you can contact me via Email{" "}
            <Link href="mailto:contact@snayo.net" className="underline">
              here
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}
