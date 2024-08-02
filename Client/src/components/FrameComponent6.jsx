import ProductItem from "./ProductItem";
import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[60px] box-border max-w-full text-center text-mini text-black font-circe mq1125:pb-[39px] mq1125:box-border mq450:pb-[25px] mq450:box-border ${className}`}
    >
      <div className="h-[735px] flex-1 bg-white overflow-hidden flex flex-col items-center justify-start pt-8 px-5 pb-[608px] box-border gap-[94px] max-w-full mq1300:gap-[47px] mq1300:pt-[21px] mq1300:pb-[395px] mq1300:box-border mq800:gap-[23px] mq800:pt-5 mq800:pb-[257px] mq800:box-border">
        <div className="w-[1102px] flex flex-row items-start justify-center max-w-full shrink-0">
          <div className="w-[482px] flex flex-col items-end justify-start gap-[14.5px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-7 box-border max-w-full">
              <div className="h-[39.5px] flex-1 relative tracking-[1.52px] leading-[19.76px] uppercase flex items-center justify-center max-w-full">
                beyond clothing
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-23xl leading-[41px] font-normal font-inherit mq800:text-15xl mq800:leading-[33px] mq450:text-6xl mq450:leading-[24px]">
              Blogs
            </h1>
          </div>
        </div>
        <div className="w-[1102px] grid flex-row items-start justify-start gap-[29px] max-w-full grid-cols-[repeat(3,_minmax(261px,_1fr))] shrink-0 text-mid text-gray-200 font-satoshi mq800:grid-cols-[minmax(261px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(261px,_452px))]">
          <ProductItem linkIMG1992jpg="/link--img-1992jpg@2x.png" />
          <ProductItem linkIMG1992jpg="/link--img-1992jpg-1@2x.png" />
          <ProductItem linkIMG1992jpg="/link--img-1992jpg-2@2x.png" />
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
