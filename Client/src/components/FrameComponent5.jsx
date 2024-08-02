import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[114px] box-border gap-[50px] max-w-full text-center text-23xl text-black font-circe mq1300:pb-[74px] mq1300:box-border mq800:gap-[25px] mq800:pb-12 mq800:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
        <h1 className="m-0 w-[975px] relative text-inherit leading-[26px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full mq800:text-15xl mq800:leading-[40px] mq450:text-6xl mq450:leading-[30px]">
          We are featured in
        </h1>
      </div>
      <div className="self-stretch h-[1207px] relative">
        <img
          className="absolute top-[11.2px] left-[22.9px] w-[190.7px] h-[108.9px] overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/3-280xpng@2x.png"
        />
        <img
          className="absolute top-[11.2px] left-[263.6px] w-[190.7px] h-[108.9px] overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/5-280xpng@2x.png"
        />
        <img
          className="absolute top-[54.5px] left-[504.3px] w-[190.7px] h-[22.4px] overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/timesblackee1e0ce4ed-280xpng@2x.png"
        />
        <img
          className="absolute top-[0px] left-[745px] w-[190.7px] h-[131.4px] overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/wi-life-logo-2-280xpng@2x.png"
        />
        <img
          className="absolute top-[11.2px] left-[985.7px] w-[190.7px] h-[108.9px] overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/2-280xpng@2x.png"
        />
        <img
          className="absolute top-[11.2px] left-[1226.4px] w-[190.7px] h-[108.9px] overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src="/1-280xpng@2x.png"
        />
        <img
          className="absolute top-[183px] left-[0px] w-[1440px] h-[1024px] overflow-hidden"
          loading="lazy"
          alt=""
          src="/desktop--28.svg"
        />
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
