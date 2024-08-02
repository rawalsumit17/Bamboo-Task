import IconsNavigation from "../components/IconsNavigation";
import Desktop8 from "../components/Desktop8";
import Desktop4 from "../components/Desktop4";
import Desktop5 from "../components/Desktop5";
import Footer1 from "../components/Footer1";

const Desktop3 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border leading-[normal] tracking-[normal] text-center text-9xl text-black font-circe">
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[87px] box-border gap-[13px] max-w-full mq1300:pb-[57px] mq1300:box-border mq800:pb-[37px] mq800:box-border">
        <IconsNavigation />
        <Desktop8 />
      </section>
      <div className="flex flex-row items-start justify-start pt-0 px-[68px] pb-6 box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <h1 className="m-0 relative text-inherit leading-[27px] font-normal font-inherit mq450:text-3xl mq450:leading-[22px]">
          NEW ARRIVALS
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-[23px] box-border max-w-full text-sm mq800:pl-[35px] mq800:pr-[35px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center">
          <div className="flex flex-row items-start justify-start gap-[43px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
              <div className="h-[25.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                <div className="mb-[-1.5px] w-7 relative leading-[27px] font-light inline-block min-w-[28px]">
                  Men
                </div>
              </div>
              <img
                className="w-[31.5px] h-px relative z-[1]"
                loading="lazy"
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
      <section className="h-[582px] bg-white overflow-hidden shrink-0 flex flex-col items-end justify-start pt-0 px-0 pb-[39.3px] box-border gap-[47px] max-w-full text-left text-sm text-black font-circe mq800:gap-[23px]">
        <div className="mr-[-70px] w-[1440px] flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[4px] max-w-full">
          <div className="self-stretch w-[342px] shrink-0 flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-216@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px]">
            <img
              className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
              alt=""
              src="/rectangle-216@2x.png"
            />
            <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
              Lorem ipsum
            </div>
            <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
              $1500
            </div>
          </div>
          <div className="self-stretch w-[342px] shrink-0 flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-216@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px]">
            <img
              className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
              alt=""
              src="/rectangle-215@2x.png"
            />
            <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
              Lorem ipsum
            </div>
            <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
              $1500
            </div>
          </div>
          <div className="self-stretch w-[342px] shrink-0 flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-216@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px]">
            <img
              className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
              alt=""
              src="/rectangle-213@2x.png"
            />
            <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
              Lorem ipsum
            </div>
            <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
              $1500
            </div>
          </div>
          <div className="self-stretch w-[342px] shrink-0 flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-216@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px]">
            <img
              className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
              alt=""
              src="/rectangle-212@2x.png"
            />
            <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
              Lorem ipsum
            </div>
            <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
              $1500
            </div>
          </div>
          <div className="self-stretch w-[342px] shrink-0 flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-216@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full gap-[20px]">
            <img
              className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
              alt=""
              src="/rectangle-214@2x.png"
            />
            <div className="relative leading-[27px] z-[1]">Lorem ipsum</div>
            <div className="w-[37px] relative leading-[27px] text-right flex items-center whitespace-nowrap z-[1]">
              $1500
            </div>
          </div>
        </div>
        <img
          className="w-[29px] h-[14.7px] relative"
          loading="lazy"
          alt=""
          src="/arrow-1.svg"
        />
      </section>
      <Desktop4
        second21="/second2-1@2x.png"
        storyContent="/rectangle-28@2x.png"
        propTextDecoration="none"
      />
      <Desktop5 />
      <Footer1 />
    </div>
  );
};

export default Desktop3;
