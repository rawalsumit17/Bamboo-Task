import PropTypes from "prop-types";

const Desktop6 = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-1px] mb-[60px] self-stretch bg-white overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-mid text-gray-200 font-satoshi ${className}`}
    >
      <div className="ml-[-240px] w-[1920px] bg-whitesmoke-200 overflow-hidden shrink-0 flex flex-col items-end justify-end pt-[454.6px] pb-[39.9px] pr-[864px] pl-[620px] box-border relative gap-[175.5px] max-w-[134%] mq1300:gap-[88px] mq1300:pl-[310px] mq1300:pr-[432px] mq1300:box-border mq800:gap-[44px] mq800:pl-[155px] mq800:pr-[216px] mq800:box-border mq1125:pt-[295px] mq1125:pb-[26px] mq1125:box-border mq450:gap-[22px] mq450:pt-48 mq450:px-5 mq450:pb-5 mq450:box-border">
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/skaermbillede-20230816-kl-100728png@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-px box-border max-w-full">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[28px] max-w-full">
            <div className="flex-1 shadow-[0px_1px_5px_rgba(0,_0,_0,_0.1)] bg-white flex flex-row items-start justify-start p-[15px] box-border gap-[23.6px] max-w-full z-[1] mq800:flex-wrap">
              <img
                className="h-[72px] w-[72px] relative overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src="/lifestyle3png@2x.png"
              />
              <div className="w-[234.2px] flex flex-col items-start justify-start pt-[4.8px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch relative leading-[29.5px]">
                    Men's GC Camo Cargo Shorts
                  </div>
                  <div className="flex flex-row items-start justify-start">
                    <div className="w-[73px] relative leading-[29.47px] flex items-center shrink-0 whitespace-nowrap">
                      $68.00
                    </div>
                    <div className="relative [text-decoration:underline] leading-[29.5px] text-gray-500 inline-block min-w-[87.6px]">
                      Quick view
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[39px] px-0 pb-0">
              <div className="w-6 h-6 shadow-[0px_0px_0px_8px_#282828_inset,_0px_1px_5px_rgba(0,_0,_0,_0.15)] rounded-3xl bg-gray-700 overflow-hidden shrink-0 flex flex-row items-start justify-start relative z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[calc(50%_-_16px)] left-[calc(50%_-_16px)] rounded-13xl box-border border-[2px] border-solid border-gray-600" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[190.4px] h-[115px] relative bg-white box-border overflow-hidden shrink-0 z-[2] text-center text-xs border-[1px] border-solid border-gainsboro-300">
          <div className="absolute w-[calc(100%_-_2px)] top-[1px] right-[1px] left-[1px] box-border flex flex-row items-end justify-start py-0 pr-[33px] pl-[34px] border-b-[1px] border-solid border-gainsboro-300">
            <a className="[text-decoration:none] flex-1 relative leading-[56px] uppercase font-medium text-[inherit]">
              Shop the looks
            </a>
          </div>
          <div className="absolute top-[58px] left-[1px] w-[132.4px] flex flex-row items-start justify-start text-mid font-lora">
            <img
              className="h-14 w-14 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/button.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0">
              <div className="self-stretch h-[23.8px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 pb-[0.9px] pr-[19px] pl-5 box-border gap-[3.7px]">
                <div className="relative inline-block min-w-[7px]">1</div>
                <div className="flex-1 relative leading-[23.8px] inline-block min-w-[26.1px]">
                  / 3
                </div>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[calc(50%_+_0.5px)] left-[calc(50%_+_38.2px)] w-14 h-14 overflow-hidden z-[1]"
            alt=""
            src="/button-1.svg"
          />
        </div>
      </div>
    </section>
  );
};

Desktop6.propTypes = {
  className: PropTypes.string,
};

export default Desktop6;
