import { useMemo } from "react";
import PropTypes from "prop-types";

const Desktop4 = ({
  className = "",
  second21,
  storyContent,
  propTextDecoration,
}) => {
  const rEADMOREStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-start py-[355px] pr-[357px] pl-[358px] box-border relative gap-[21px] max-w-full z-[2] text-center text-23xl text-white font-circe mq1125:pt-[231px] mq1125:pb-[231px] mq1125:box-border mq450:py-[150px] mq450:px-5 mq450:box-border mq800:pl-[179px] mq800:pr-[178px] mq800:box-border mq1300:flex-wrap ${className}`}
    >
      <img
        className="h-full w-[1876px] absolute !m-[0] top-[0px] bottom-[0px] left-[calc(50%_-_938px)] max-h-full object-cover"
        alt=""
        src={second21}
      />
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        loading="lazy"
        alt=""
        src={storyContent}
      />
      <h1 className="m-0 flex-1 relative text-inherit leading-[190px] inline-block min-w-[331px] max-w-full z-[2] font-inherit mq450:text-6xl mq450:leading-[114px] mq800:text-15xl mq800:leading-[152px]">
        <span className="font-light">{`Bombus `}</span>
        <span className="text-gold">Adaptive</span>
        <span className="font-light"> Clothing</span>
      </h1>
      <div className="w-[193.5px] flex flex-col items-start justify-start pt-[68px] px-0 pb-0 box-border min-w-[193.5px] text-sm text-gray-400 mq1300:flex-1">
        <div className="self-stretch bg-white flex flex-row items-start justify-start py-0 pr-[17px] pl-5 whitespace-nowrap z-[2] border-[1px] border-solid border-white">
          <div className="flex-1 relative leading-[52px]" style={rEADMOREStyle}>
            READ MORE
          </div>
        </div>
      </div>
    </section>
  );
};

Desktop4.propTypes = {
  className: PropTypes.string,
  second21: PropTypes.string,
  storyContent: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default Desktop4;
