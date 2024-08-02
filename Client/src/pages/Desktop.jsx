import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";
import MainContent from "../components/MainContent";
import SolutionGrid from "../components/SolutionGrid";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import Testimonials from "../components/Testimonials";
import Desktop6 from "../components/Desktop6";
import FrameComponent6 from "../components/FrameComponent6";
import Desktop7 from "../components/Desktop7";
import FooterContent from "../components/FooterContent";
import FooterBottom from "../components/FooterBottom";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[13px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <FrameComponent logoDark3="/logo-dark-3@2x.png" />
      <FrameComponent3 />
      <MainContent />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[52px] box-border max-w-full text-center text-[92px] text-black font-circe">
        <div className="flex-1 bg-white overflow-hidden flex flex-col items-end justify-start pt-[31px] px-0 pb-[193px] box-border max-w-full">
          <div className="m-0 self-stretch h-[291px] relative text-inherit leading-[140px] font-normal font-inherit flex-1 flex flex-col items-center shrink-0 mq800:text-[46px] mq800:leading-[84px] mq450:text-9xl mq450:leading-[56px]">
            <span>
              <span>{`Bombus `}</span>
              <span className="text-gold">{`Adaptive `}</span>
              <span>Clothing.</span>
            </span>
          </div>
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full mt-[-268px] text-3xl">
            <div className="w-[477px] relative leading-[23px] uppercase flex items-center justify-center shrink-0 max-w-full mq450:text-lg mq450:leading-[18px]">
              Clothing for all
            </div>
          </div>
        </div>
      </section>
      <SolutionGrid />
      <FrameComponent4 />
      <FrameComponent5 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[70px] box-border max-w-full text-center text-mini text-black font-circe">
        <div className="w-[482px] flex flex-col items-end justify-start gap-[14.5px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-7 box-border max-w-full">
            <div className="h-[39.5px] flex-1 relative tracking-[1.52px] leading-[19.76px] uppercase flex items-center justify-center max-w-full">
              TESTIMONIALS
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-23xl leading-[41px] font-normal font-inherit mq800:text-15xl mq800:leading-[33px] mq450:text-6xl mq450:leading-[24px]">
            What our clients say
          </h1>
        </div>
      </section>
      <Testimonials />
      <Desktop6 />
      <FrameComponent6 />
      <Desktop7 />
      <footer className="self-stretch bg-black flex flex-col items-start justify-start pt-[71px] px-0 pb-5 box-border gap-[23.4px] max-w-full z-[2] mq1125:pt-[46px] mq1125:box-border mq450:pt-[30px] mq450:box-border">
        <FooterContent />
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Desktop;
