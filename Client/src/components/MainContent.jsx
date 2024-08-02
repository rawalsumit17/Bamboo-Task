import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[93.6px] pr-5 pl-[21px] box-border max-w-full text-center text-mini text-black font-circe mq1125:pb-[61px] mq1125:box-border mq450:pb-10 mq450:box-border`}
    >
      <div className="w-[1089px] flex flex-col items-start justify-start gap-[58px] max-w-full mq800:gap-[29px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="w-[482px] flex flex-col items-end justify-start gap-[14.5px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[23px] pl-7 box-border max-w-full">
              <div className="h-[39.5px] flex-1 relative tracking-[1.52px] leading-[19.76px] uppercase flex items-center justify-center max-w-full">
                Stay updated on whats new
              </div>
            </div>
            <h1 className="m-0 self-stretch relative text-23xl leading-[41px] font-normal font-inherit mq800:text-15xl mq800:leading-[33px] mq450:text-6xl mq450:leading-[24px]">
              New arrivals
            </h1>
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[18px] max-w-full grid-cols-[repeat(3,_minmax(263px,_1fr))] text-mid text-gray-200 font-satoshi mq800:grid-cols-[minmax(263px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(263px,_456px))]">
          <div className="flex flex-col items-end justify-start pt-0 px-0 pb-[0.8px] box-border gap-[22px] max-w-full">
            <img
              className="self-stretch h-[493px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className="self-stretch h-[68px] relative hidden" />
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[11px] pl-3 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3.2px] max-w-full">
                <div className="self-stretch relative leading-[25.5px] font-circe">
                  LOREM IPSUM
                </div>
                <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[21px] pl-5">
                  <div className="h-[34px] w-[84px] relative leading-[29.47px] flex items-center justify-center shrink-0 whitespace-nowrap">
                    $140.00
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[72px] pl-[71px] text-base text-gray-500 mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15.8px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[11px]">
                      <div className="flex-1 relative leading-[28px]">
                        1 color available
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-[35px] z-[1] text-sm text-black border-[1px] border-solid border-black hover:text-red-500 hover:bg-black ">
                      <Link
                        className="nav-link [text-decoration:none] text-black hover:text-white flex-1 relative leading-[52px] uppercase font-medium"
                        to="/desktop-quickViews"
                      >
                        Quick view
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start pt-0 px-0 pb-[0.8px] box-border gap-[22px] max-w-full">
            <img
              className="self-stretch h-[493px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/rectangle-23-1@2x.png"
            />
            <div className="self-stretch h-[68px] relative hidden" />
            <div className="w-[339.1px] flex flex-row items-start justify-end py-0 pr-[11px] pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3.2px] max-w-full">
                <div className="self-stretch relative leading-[25.5px] font-circe">
                  LOREM IPSUM
                </div>
                <div className="w-[205px] flex flex-row items-start justify-start py-0 pr-0 pl-[121px] box-border">
                  <div className="h-[34px] flex-1 relative leading-[29.47px] flex items-center justify-center whitespace-nowrap">
                    $140.00
                  </div>
                </div>
                <div className="w-[255.4px] flex flex-row items-start justify-start py-0 pr-0 pl-[71px] box-border text-base text-gray-500 mq450:pl-5 mq450:box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15.8px]">
                    <div className="w-[173px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border">
                      <div className="flex-1 relative leading-[28px]">
                        1 color available
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-[35px] z-[1] text-sm text-black border-[1px] border-solid border-black hover:text-red-500 hover:bg-black ">
                      <Link
                        className="nav-link [text-decoration:none] text-black hover:text-white flex-1 relative leading-[52px] uppercase font-medium"
                        to="/desktop-quickViews"
                      >
                        Quick view
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start pt-0 px-0 pb-[0.8px] box-border gap-[22px] max-w-full">
            <img
              className="self-stretch h-[493px] relative max-w-full overflow-hidden shrink-0 object-cover"
              alt=""
              src="/rectangle-23-2@2x.png"
            />
            <div className="self-stretch h-[68px] relative hidden" />
            <div className="w-[339.1px] flex flex-row items-start justify-end py-0 pr-[11px] pl-0 box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[3.2px] max-w-full">
                <div className="self-stretch relative leading-[25.5px] font-circe">
                  LOREM IPSUM
                </div>
                <div className="w-[205px] flex flex-row items-start justify-start py-0 pr-0 pl-[121px] box-border">
                  <div className="h-[34px] flex-1 relative leading-[29.47px] flex items-center justify-center whitespace-nowrap">
                    $140.00
                  </div>
                </div>
                <div className="w-[255.4px] flex flex-row items-start justify-start py-0 pr-0 pl-[71px] box-border text-base text-gray-500 mq450:pl-5 mq450:box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[15.8px]">
                    <div className="w-[173px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border">
                      <div className="flex-1 relative leading-[28px]">
                        1 color available
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[33px] pl-[35px] z-[1] text-sm text-black border-[1px] border-solid border-black hover:text-red-500 hover:bg-black ">
                      <Link
                        className="nav-link [text-decoration:none] text-black hover:text-white flex-1 relative leading-[52px] uppercase font-medium"
                        to="/desktop-quickViews"
                      >
                        Quick view
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
