import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Photos() {
  return (
    <div>
      <Navbar />

      <section className="container px-5 lg:px-20 mt-32 mx-auto  ">
        <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-right  text-white md:h-46">
          photos <br></br> galery
        </h1>
        <div className="border-b-2 border-sky-200 my-16"></div>
        <div className="grid grid-cols-3 gap-6">
          <img
            src="https://github.com/AntonioObra/blog/blob/main/public/images/IMG_1492.JPG?raw=true"
            className="  object-cover lg:col-span-2 col-span-3 lg:h-[600px]"
          />
          <img
            src="https://github.com/AntonioObra/blog/blob/main/public/images/IMG_1292.JPG?raw=true"
            className="object-cover lg:h-[600px] w-full col-span-3 lg:col-span-1"
          />
          <img
            src="https://github.com/AntonioObra/blog/blob/main/public/images/IMG_1290.JPG?raw=true"
            className=" object-cover col-span-3 lg:col-span-1"
          />
          <img
            src="https://github.com/AntonioObra/blog/blob/main/public/images/IMG_1283.JPG?raw=true"
            className="  object-cover col-span-3 lg:col-span-1"
          />
          <img
            src="https://github.com/AntonioObra/blog/blob/main/public/images/IMG_1498.JPG?raw=true"
            className="  object-cover col-span-3 lg:col-span-1"
          />

          <img
            src="https://github.com/AntonioObra/blog/blob/main/public/images/IMG_1433.JPG?raw=true"
            className="  object-cover col-span-3"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
