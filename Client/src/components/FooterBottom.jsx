import PropTypes from "prop-types";

const FooterBottom = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[16.4px] max-w-full text-left text-smi-9 text-white font-inter ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[70px] pl-[69px] box-border max-w-full mq800:pl-[34px] mq800:pr-[35px] mq800:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
            <img
              className="h-[107px] w-[226px] relative overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/logo-lightpng@2x.png"
            />
            <div className="w-[537.1px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10.1px] mq800:flex-wrap">
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  loading="lazy"
                  alt=""
                  src="/img.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-1.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-2.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-3.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-4.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-5.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-6.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-7.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-8.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-9.svg"
                />
                <img
                  className="self-stretch w-[39.6px] relative max-h-full overflow-hidden shrink-0 min-h-[25px]"
                  alt=""
                  src="/img-10.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector-4.svg"
        />
      </div>
      <div className="w-[413.7px] flex flex-row items-start justify-start py-0 px-[71px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative leading-[21px]">© 2024 Lorem ipsum</div>
      </div>
    </div>
  );
};

FooterBottom.propTypes = {
  className: PropTypes.string,
};

export default FooterBottom;
