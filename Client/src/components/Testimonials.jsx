import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[113.5px] box-border max-w-full text-center text-lg text-darkslategray-200 font-cardo mq450:pb-[74px] mq450:box-border ${className}`}
    >
      <div className="w-[1168px] flex flex-row flex-wrap items-start justify-center gap-[23px] max-w-full">
        <FrameComponent1 />
        <FrameComponent1
          propAlignSelf="stretch"
          propPadding="unset"
          propWidth="286px"
        />
        <FrameComponent1
          propAlignSelf="unset"
          propPadding="0px 105px 0px 0px"
          propWidth="unset"
        />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
