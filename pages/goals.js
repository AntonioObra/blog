import Image from "next/image";
import Navbar from "../components/Navbar";
import { getGoalMoney } from "../services";
import Footer from "../components/Footer";

export default function Goals({ goalMoney }) {
  console.log(goalMoney.goals[0].money);

  return (
    <div className="h-screen">
      <Navbar />
      <section className="container px-5 lg:px-20 pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32 lg:space-x-12 ">
        <div className="w-full lg:w-1/2">
          <Image
            width={1500}
            height={1500}
            alt="Image IMG_1368 taken in the hospital in Zagreb"
            src="/images/ferrari.JPG"
            className="w-full h-[400px]  lg:h-[600px]  object-cover"
            priority={true}
          />
        </div>
        <div className="w-full px-5 lg:px-0 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-right z-20 text-white md:h-46">
            goal <br></br> for 2027
          </h1>
          <div className="border-b-2 border-sky-200 my-5"></div>
          <p className="text-xl text-white text-right ">ferrari 485 v8</p>
          <div className="border-b-2 border-sky-200 my-5 mb-7"></div>
          <p className="text-xl text-white text-right ">
            {goalMoney.goals[0].money} € / 187.500 €
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const goalMoney = await getGoalMoney();

  return {
    props: {
      goalMoney,
    },
  };
};
