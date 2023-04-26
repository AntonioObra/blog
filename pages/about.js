import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function About() {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a]">
      {/* web dev */}
      <section className="container pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32 ">
        <div className="w-1/3">
          <Image
            width={1500}
            height={1500}
            alt="Image IMG_1368 taken in the hospital in Zagreb"
            src="/images/IMG_1368.JPG"
            className="hidden lg:block lg:w-[500px] lg:h-[600px]  object-cover"
            priority={true}
          />
        </div>
        <div className="w-full px-5 lg:px-0 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-right z-20 dark:text-white md:h-46">
            web <br></br> developer
          </h1>
          <div className="border-b-4 border-blue-500 my-5"></div>
          <p className="text-xl dark:text-white text-right ">
            my web dev journey started in 2020 when I was reintroduced to the
            wonders of html and css and have gotten hooked immediately, since
            than i&#39;ve gotten familiar with tons of new technologies like git
            and github, javascript and typescript, react and nextjs, nodejs and
            express, mongo and firebase...<br></br> and went to land my first
            job 6 months after graduationg from highschool
          </p>
          <div className="border-b-4 border-blue-500 my-5 mb-7"></div>
          <div className="flex items-end float-right space-x-6">
            <Button
              text="checkout my github"
              link="https://github.com/AntonioObra"
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* books section */}
      <section className="container  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32">
        <div className="w-full px-5 lg:px-0 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-left z-20 dark:text-white md:h-46">
            book <br></br> worm
          </h1>
          <div className="border-b-4 border-blue-500 my-5"></div>
          <p className="text-xl dark:text-white text-left ">
            ever since getting reccomended the books &#39;rich dad, poor
            dad&#39; and &#39;think and grow rich&#39;, i&#39;ve gotten big into
            reading and expending my knowledge. being in the position where you
            can read about the struggles of a roman emperor to getting sucked
            into the world of witcher is something else
          </p>
          <div className="border-b-4 border-blue-500 my-5 mb-7"></div>
          <div className="flex items-start space-x-6">
            <Button
              text="my notion bookshelf"
              link="https://obradovicdev.notion.site/0a0a0ebb22ba4b28896fbade9ec153ba?v=ad2d92afb55a4190934990152c710bb4"
              variant="dark"
            />
          </div>
        </div>

        <div className="w-1/3">
          <Image
            width={1500}
            height={1500}
            src="/images/IMG_1360.JPG"
            className="hidden lg:block lg:w-[500px] lg:h-[600px]  object-cover"
            alt="Image IMG_1360 taken in the hospital in Zagreb"
          />
        </div>
      </section>

      {/* videogames*/}
      <section className="container  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-64 ">
        <div className="w-1/3">
          <Image
            src="/images/IMG_1327.JPG"
            className="hidden lg:block lg:w-[500px] lg:h-[600px]  object-cover"
            width={1500}
            height={1500}
            alt="Image IMG_1327 taken in the hospital in Zagreb"
          />
        </div>
        <div className="w-full px-5 lg:px-0 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-right z-20 dark:text-white md:h-46">
            hardstuck <br></br> silver
          </h1>
          <div className="border-b-4 border-blue-500 my-5"></div>
          <p className="text-xl dark:text-white text-right ">
            suprise, suprise, another league of legends addict... <br></br>
            although my addiction for league of legends and toxicity of botlane
            and adc role is certainly the biggest waste of time any human could,
            something gould came out of it, as i made a mobafire clone as my
            highschool finals project and planning to remake it using t3-stack.
          </p>
          <div className="border-b-4 border-blue-500 my-5 mb-7"></div>
          <div className="flex items-end float-right space-x-6">
            <Button
              text="waste of time"
              link="https://champselect.obradovic.dev/"
              variant="dark"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
