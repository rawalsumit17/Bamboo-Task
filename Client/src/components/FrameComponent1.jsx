import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent1 = ({
  className = "",
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const testimonialQuotesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const testimonialAuthorsStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div
      className={`flex-1 bg-whitesmoke-100 overflow-hidden flex flex-col items-end justify-start pt-[26px] px-[37px] pb-[25.5px] box-border gap-[53px] min-w-[280px] max-w-full text-center text-lg text-darkslategray-200 font-cardo mq450:gap-[26px] ${className}`}
    >
      <div className="self-stretch flex flex-col items-end justify-start">
        <div
          className="flex flex-row items-start justify-end py-0 pr-[99px] pl-0"
          style={testimonialQuotesStyle}
        >
          <div className="flex flex-row items-start justify-start gap-[5.1px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/svg.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/svg-1.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/svg-2.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/svg-3.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/svg-4.svg"
            />
          </div>
        </div>
        <blockquote className="m-0 self-stretch relative leading-[26px] mt-[-2px]">
          "Congratulations to Bombus for this range of easy to get into clothes
          which are stylish and attractive and which I hope will become the
          mainstay of many wardrobes."
        </blockquote>
      </div>
      <div
        className="flex flex-row items-start justify-end py-0 pr-[105px] pl-0 text-mid text-gray-200 font-lora"
        style={testimonialAuthorsStyle}
      >
        <b className="relative leading-[30px] inline-block min-w-[76px]">
          PETER D.
        </b>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent1;
