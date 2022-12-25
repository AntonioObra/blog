import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="h-screen">
      <Navbar />
      <section className="container  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32 px-5 lg:px-20">
        <div className=" mx-auto lg:mx-0 w-full">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold  z-20 text-white md:h-46">
            let&#39;s <br></br>get in touch
            {/* <Typewriter
              options={{
                strings: ["web <br> developer", "book <br> worm"],
                autoStart: true,
                loop: true,
              }}
              style={{ color: "white" }}
            /> */}
          </h1>
          <div className="border-b-2 border-sky-200 my-10"></div>

          <div className="flex flex-col space-y-5 items-start md:flex-row md:space-y-0 md:space-x-6">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:antonio@obradovic.dev"
              className="text-black bg-sky-200 py-5 px-7 font-bold border-2 border-sky-200 text-center hover:bg-[#0f0f0f] hover:text-sky-200 duration-150 w-full md:w-fit "
            >
              antonio@obradovic.dev
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="tel:0953144374"
              className="text-white bg-sky-700 py-5 px-7 font-bold border-2 border-sky-700 text-center hover:bg-[#0f0f0f] hover:text-sky-700 duration-150 w-full md:w-fit"
            >
              drop me a call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
