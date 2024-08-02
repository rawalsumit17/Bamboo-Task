import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[58px] box-border max-w-full text-center text-23xl text-white font-circe mq800:pb-[25px] mq800:box-border mq1125:pb-[38px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 bg-white overflow-hidden flex flex-row items-start justify-start py-[417px] pr-[357px] pl-[358px] box-border relative gap-[21px] max-w-full mq1300:flex-wrap mq800:py-44 mq800:pr-[178px] mq800:pl-[179px] mq800:box-border mq1125:pt-[271px] mq1125:pb-[271px] mq1125:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
        </div>
        <h1 className="m-0 flex-1 relative text-inherit leading-[190px] inline-block min-w-[331px] max-w-full z-[2] font-inherit mq800:text-15xl mq800:leading-[152px] mq450:text-6xl mq450:leading-[114px]">
          <span className="font-light">{`We are `}</span>
          <span className="text-gold">More</span>
          <span className="font-light"> than clothes.</span>
        </h1>
        <div className="flex flex-col items-start justify-start pt-[68px] px-0 pb-0 box-border min-w-[193.5px] text-sm text-gray-400">
          <div className="bg-white flex flex-row items-start justify-start py-0 pr-[17px] pl-[19px] whitespace-nowrap z-[2] border-[1px] border-solid border-white hover:text-white hover:bg-pink-700 ...">
            <div className="relative leading-[52px]">EXPLORE COLLECTION</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
