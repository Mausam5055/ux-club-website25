import { motion, AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import Footer from "./footer";
import UpcomingEvent from "./upcomingEvent";
import AfterEvent from "./AfterEvent";
import Video from "./videoPart"
export default function Home({show}) {

  return (
    <>
      <div className=" min-h-fit pb-4 sm:pb-0 w-full bg-[#0e0e0e] relative text-[#eceae5] pt-3 font-[Neue] ">
        <Nav />
        <div
          // initial={{ opacity: 0, scale: 0.4 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{duration: 1.1, delay:0.7, ease: "easeInOut" }}
          // style={{ transformOrigin: "center" }}
        >
          <h1 className="font-[Socilo] lg:text-[28vw] lg:pl-5 xl:text-[30vw] sm:text-[28vw] md:text-[28vw] text-[28vw] leading-none tracking-wide lg:pt-24 sm:pt-18 md:pt-15 pt-10 text-center ">
            Club
          </h1>
        </div>

      </div>

      {/* Upcoming Event Component */}
      <UpcomingEvent />
      {/* After Event Component */}
      <AfterEvent />
      {/* Video Part Component */}
      <Video />
      {/* footer Page Component */}
      <div className="lg:min-h-[60vh] min-h-[40vh] sm:min-h-[60vh] md:min-h-[60vh] w-full bg-black text-[#eceae5] pt-3 font-[Neue]">
        <Footer />
      </div>
      {/*  removed the leader component (HeadPage.js) from home page */}

    </>
  );
}
