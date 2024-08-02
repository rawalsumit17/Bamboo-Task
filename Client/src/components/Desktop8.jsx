import PropTypes from "prop-types";

const Desktop8 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[969px] bg-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-7 px-[138px] box-border gap-[44px] max-w-full text-left text-mini-5 text-gray-300 font-circe mq450:h-auto mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:pt-5 mq1300:pb-5 mq1300:box-border mq800:gap-[22px] mq800:pl-[69px] mq800:pr-[69px] mq800:box-border ${className}`}
    >
      <div className="h-[800px] flex-1 flex flex-col items-start justify-start gap-[4px] max-w-[calc(100%_-_534px)] mq1125:max-w-full">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src="/rectangle-23@2x.png"
        />
      </div>
      <div className="h-[27.2px] w-[490px] relative hidden max-w-full">
        <img
          className="absolute top-[21.2px] left-[0px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/icon.svg"
        />
        <img
          className="absolute top-[21.2px] left-[17px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/icon.svg"
        />
        <img
          className="absolute top-[21.2px] left-[34px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/icon.svg"
        />
        <img
          className="absolute top-[21.2px] left-[51px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/icon-3.svg"
        />
        <img
          className="absolute top-[21.2px] left-[68px] w-[18px] h-[18px] overflow-hidden"
          alt=""
          src="/icon-4.svg"
        />
        <div className="absolute top-[0px] left-[85px] w-[69.9px] h-6">
          <div className="absolute top-[2px] left-[8px] leading-[24px] flex items-center w-[67.2px] h-6">
            2 Reviews
          </div>
        </div>
      </div>
      <div className="w-[490px] flex flex-col items-start justify-start pt-[33.2px] px-0 pb-0 box-border max-w-[calc(100%_-_674px)] shrink-0 text-7xl-7 mq1125:hidden mq1300:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[34px] max-w-full mq800:gap-[17px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[19.8px] max-w-full">
            <div className="w-[259.4px] flex flex-col items-start justify-start gap-[8.6px]">
              <div className="self-stretch relative leading-[36px] mq450:text-2xl mq450:leading-[29px]">
                Lorem ipsum
              </div>
              <div className="relative text-2xl-2 leading-[36.8px] inline-block min-w-[75.7px] whitespace-nowrap mq450:text-mid mq450:leading-[29px]">
                $115.00
              </div>
            </div>
            <div className="self-stretch h-1.5 flex flex-row items-start justify-start pt-0 px-0 pb-[5px] box-border max-w-full">
              <div className="self-stretch flex-1 relative box-border overflow-hidden max-w-full border-b-[1px] border-solid border-gainsboro-200" />
            </div>
            <div className="w-[377.5px] flex flex-col items-start justify-start gap-[8.2px] max-w-full text-base-1">
              <b className="relative leading-[22.4px] inline-block min-w-[30.3px] shrink-0">
                Size
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] shrink-0 text-mini mq450:flex-wrap">
                <div className="flex-[0.3115] bg-white box-border flex flex-row items-start justify-start py-2.5 pr-[27px] pl-[29px] min-w-[66px] max-w-[67px] border-[1px] border-solid border-silver mq450:flex-1">
                  <div className="relative leading-[24px] inline-block min-w-[9px]">
                    S
                  </div>
                </div>
                <div className="flex-[0.4754] bg-white box-border flex flex-row items-start justify-start py-2.5 pr-[25px] pl-[26px] min-w-[66px] max-w-[67px] border-[1px] border-solid border-silver mq450:flex-1">
                  <div className="relative leading-[24px] inline-block min-w-[14px]">
                    M
                  </div>
                </div>
                <div className="flex-[0.3443] bg-white box-border flex flex-row items-start justify-start py-2.5 pr-[27px] pl-7 min-w-[66px] max-w-[67px] border-[1px] border-solid border-silver mq450:flex-1">
                  <div className="relative leading-[24px] inline-block min-w-[10px]">
                    L
                  </div>
                </div>
                <div className="flex-[0.6721] bg-white box-border flex flex-row items-start justify-start py-2.5 pr-[21px] pl-6 min-w-[66px] max-w-[67px] text-mini-4 border-[1px] border-solid border-silver mq450:flex-1">
                  <div className="relative leading-[24px] inline-block min-w-[20px]">
                    XL
                  </div>
                </div>
                <button className="cursor-pointer py-2.5 pr-4 pl-[19px] bg-white flex-1 box-border flex flex-row items-start justify-start min-w-[66px] max-w-[67px] border-[1px] border-solid border-silver hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                  <div className="relative text-mini-4 leading-[24px] font-circe text-gray-300 text-left inline-block min-w-[30px]">
                    XXL
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8.2px] text-mini">
              <b className="relative leading-[22.4px] inline-block min-w-[48.6px] shrink-0">
                Colour
              </b>
              <div className="bg-white flex flex-row items-start justify-start py-[11px] px-3.5 gap-[12px] shrink-0 text-mini-6 border-[1px] border-solid border-silver">
                <div className="h-[22px] w-[22px] relative shadow-[0px_0px_0px_1px_rgba(33,_33,_33,_0.3)] rounded-2xs bg-black overflow-hidden shrink-0" />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative leading-[18px] inline-block min-w-[36px]">
                    Black
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[316.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[8.2px] text-base-6">
              <b className="relative leading-[22.4px] inline-block min-w-[59.4px] shrink-0">
                Material
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] shrink-0 text-mini-6">
                <div className="flex-1 bg-white flex flex-row items-start justify-start py-2.5 pr-3.5 pl-4 shrink-0 whitespace-nowrap border-[1px] border-solid border-silver">
                  <div className="flex-1 relative leading-[24px]">
                    Sequins / Bamboo
                  </div>
                </div>
                <div className="flex-1 bg-white flex flex-row items-start justify-start py-2.5 pr-3.5 pl-4 shrink-0 whitespace-nowrap border-[1px] border-solid border-silver">
                  <div className="flex-1 relative leading-[24px]">
                    Pleather / Bamboo
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[4.2px] gap-[15.4px] text-base-4">
              <div className="w-[164px] flex flex-col items-start justify-start gap-[8.2px]">
                <b className="relative leading-[22.4px] inline-block min-w-[62.7px] shrink-0">
                  Quantity
                </b>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] shrink-0 text-center text-base">
                  <img
                    className="h-12 w-12 relative min-h-[48px]"
                    alt=""
                    src="/link.svg"
                  />
                  <div className="flex-1 bg-white flex flex-row items-start justify-start py-[13px] px-0 border-[1px] border-solid border-silver">
                    <div className="h-[19px] overflow-auto flex flex-row items-end justify-start py-0 px-[18px] box-border">
                      <div className="mb-[-2px] h-6 w-[9.1px] relative flex items-center justify-center shrink-0 min-w-[9.1px]">
                        1
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-12 w-12 relative min-h-[48px]"
                    alt=""
                    src="/link-1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch bg-black flex flex-row items-start justify-center py-px px-5 whitespace-nowrap text-center text-sm text-white">
                <div className="w-[154px] relative leading-[52px] flex items-center justify-center shrink-0">
                  ADD TO BAG
                </div>
              </div>
            </div>
            <div className="self-stretch relative text-2xs-9 leading-[18px]">
              <p className="m-0">
                Please choose carefully when purchasing a sale item. Due to the
                cost of processing returns we are
              </p>
              <p className="m-0">
                unable to offer refunds or exchanges on any sale items unless
                faulty.
              </p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5 box-border max-w-full text-sm-8">
            <div className="flex-1 flex flex-col items-start justify-start gap-[22px] max-w-full">
              <div className="self-stretch h-9 flex flex-col items-end justify-start pt-0 px-0 pb-[15px] box-border gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <div className="relative leading-[21px] whitespace-nowrap">
                    ACCESSIBILITY FEATURES
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
                    <img
                      className="w-[10.8px] h-[10.8px] relative"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
              <div className="self-stretch h-9 flex flex-col items-end justify-start pt-0 px-0 pb-[15px] box-border gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-between py-0 pr-10 pl-0 gap-[20px]">
                  <div className="relative leading-[21px]">{`MATERIALS & CARE`}</div>
                  <div className="h-[10.800000000000182px] flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0 box-border w-[10.800000000000182px]">
                    <img
                      className="w-[10.8px] h-[10.8px] relative"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
              <div className="self-stretch h-9 flex flex-col items-end justify-start pt-0 px-0 pb-[15px] box-border gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[306px] mq450:gap-[153px]">
                  <div className="relative leading-[21px] inline-block min-w-[94px]">
                    SIZING GUIDE
                  </div>
                  <div className="h-[10.800000000000182px] flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0 box-border w-[10.800000000000182px]">
                    <img
                      className="w-[10.8px] h-[10.8px] relative"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
              <div className="self-stretch h-9 flex flex-col items-end justify-start pt-0 px-0 pb-[15px] box-border gap-[15px]">
                <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[23px] pl-0 gap-[20px]">
                  <div className="relative leading-[21px]">{`SHIPPING & RETURNS`}</div>
                  <div className="h-[10.800000000000182px] flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0 box-border w-[10.800000000000182px]">
                    <img
                      className="w-[10.8px] h-[10.8px] relative"
                      alt=""
                      src="/.svg"
                    />
                  </div>
                </div>
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-8.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Desktop8.propTypes = {
  className: PropTypes.string,
};

export default Desktop8;
