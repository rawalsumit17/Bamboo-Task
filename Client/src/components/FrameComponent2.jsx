import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-[23px] box-border max-w-full text-center text-9xl text-black font-circe mq800:pl-[35px] mq800:pr-[35px] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h1 className="m-0 relative text-inherit leading-[27px] font-normal font-inherit mq450:text-3xl mq450:leading-[22px]">
          NEW ARRIVALS
        </h1>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm mq450:flex-wrap mq450:justify-center">
          <div className="flex flex-row items-start justify-start gap-[43px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
              <div className="h-[25.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mb-[-1.5px] w-7 relative leading-[27px] font-light inline-block min-w-[28px]">
                  Men
                </div>
              </div>
              <img
                className="w-[31.5px] h-px relative z-[1]"
                alt=""
                src="/collection-image.svg"
              />
            </div>
            <div className="relative leading-[27px] font-light text-left inline-block min-w-[47px]">
              Women
            </div>
          </div>
          <div className="relative leading-[27px] text-left inline-block min-w-[60px]">{`View all >`}</div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
