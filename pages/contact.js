import Button from "../components/Button";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a]">
      <section className="container  pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32 px-5 lg:px-20">
        <div className=" mx-auto lg:mx-0 w-full">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold  z-20 dark:text-white md:h-46">
            let&#39;s <br></br>get in touch
          </h1>
          <div className="border-b-4 border-blue-500 my-10"></div>

          <div className="flex flex-col space-y-5 items-start md:flex-row md:space-y-0 md:space-x-6">
            <Button
              text="antonio@obradovic.dev"
              link="mailto:antonio@obradovic.dev"
              variant="light"
            />
            <Button
              text="+385 095 314 4374"
              link="tel:0953144374"
              variant="dark"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
