import Image from "next/image";
import Navbar from "../components/Navbar";
import { getGoalMoney } from "../services";
import Footer from "../components/Footer";

export default function Goals({ goalMoney }) {
  return (
    <div className="min-h-screen dark:bg-[#0a0a0a]">
      <section className="container px-5 lg:px-20 pt-20 mx-auto flex flex-col space-y-12 justify-evenly items-top lg:flex-row md:space-y-0 lg:mb-32 lg:space-x-12 ">
        <div className="w-full lg:w-1/2">
          <Image
            width={1500}
            height={1500}
            alt="Image of a ferrari 488"
            src="/images/ferrari.jpg"
            className="w-full h-[400px]  lg:h-[600px]  object-cover"
            priority={true}
          />
        </div>
        <div className="w-full px-5 lg:px-0 mx-auto lg:w-1/2 lg:mx-0">
          <h1 className="text-6xl md:text-8xl xl:text-9xl font-semibold text-right z-20 dark:text-white md:h-46">
            goal <br></br> for 2027
          </h1>
          <div className="border-b-4 border-indigo-400 my-5"></div>
          <p className="text-xl dark:text-white text-right ">ferrari 485 v8</p>
          <div className="border-b-4 border-indigo-400 my-5 mb-7"></div>
          <p className="text-xl dark:text-white text-right ">
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
