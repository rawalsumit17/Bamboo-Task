import FrameComponent from "../components/FrameComponent";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent2 from "../components/FrameComponent2";
import Desktop4 from "../components/Desktop4";
import Desktop5 from "../components/Desktop5";
import Footer from "../components/Footer";

const Desktop1 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <FrameComponent
        frameDivAlignSelf="unset"
        frameDivWidth="1410px"
        logoDark3="/logo-dark-3@2x.png"
        aboutUsTextDecoration="unset"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-[30px] pb-[108px] box-border max-w-full text-left text-sm text-black font-circe mq800:pb-[45px] mq800:box-border mq1300:pb-[70px] mq1300:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="flex flex-row items-start justify-start py-0 px-10 box-border max-w-full text-9xl">
            <h1 className="m-0 relative text-inherit leading-[27px] font-normal font-inherit mq450:text-3xl mq450:leading-[22px]">
              SHOP FOR WOMEN
            </h1>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[13px] pb-5 box-border max-w-full">
            <div className="w-[1326.5px] flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
              <div className="flex flex-row items-start justify-start gap-[42px] max-w-full mq450:gap-[21px] mq800:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
                  <div className="h-[25.5px] flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
                    <div className="mb-[-1.5px] relative leading-[27px] font-light inline-block min-w-[80px]">
                      Collection 01
                    </div>
                  </div>
                  <img
                    className="w-[31.5px] h-px relative"
                    alt=""
                    src="/collection-image.svg"
                  />
                </div>
                <div className="relative leading-[27px] font-light inline-block min-w-[82px]">
                  Collection 02
                </div>
                <div className="relative leading-[27px] font-light inline-block min-w-[82px]">
                  Collection 03
                </div>
                <div className="relative leading-[27px] font-light inline-block min-w-[82px]">
                  Collection 04
                </div>
              </div>
              <div className="w-[148.5px] flex flex-row items-start justify-start gap-[32.5px]">
                <div className="flex flex-row items-start justify-start gap-[13.5px]">
                  <div className="relative leading-[27px] font-light inline-block min-w-[43px]">
                    Sort by
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <img
                      className="w-[9px] h-[4.5px] relative"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.5px]">
                  <div className="relative leading-[27px] font-light inline-block min-w-[32px]">
                    Filter
                  </div>
                  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                    <img
                      className="w-[9px] h-[4.5px] relative"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[4px_3.3px] min-h-[966px] max-w-full">
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-21@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
              <img
                className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
                alt=""
                src="/rectangle-21@2x.png"
              />
              <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
                Lorem ipsum
              </div>
              <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
                $1500
              </div>
            </div>
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-211@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
              <img
                className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
                alt=""
                src="/rectangle-211@2x.png"
              />
              <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
                Lorem ipsum
              </div>
              <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
                $1500
              </div>
            </div>
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-212@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
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
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-213@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
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
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-214@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
              <img
                className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
                alt=""
                src="/rectangle-214@2x.png"
              />
              <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
                Lorem ipsum
              </div>
              <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
                $1500
              </div>
            </div>
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-215@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
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
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-216@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
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
            <div className="w-[342px] flex flex-row items-end justify-between py-[23px] pr-[21px] pl-[22px] box-border bg-[url('/public/rectangle-217@2x.png')] bg-cover bg-no-repeat bg-[top] min-h-[481px] max-w-full gap-[20px] mq450:flex-wrap">
              <img
                className="h-[481px] w-[342px] relative object-cover hidden max-w-full"
                alt=""
                src="/rectangle-217@2x.png"
              />
              <div className="relative leading-[27px] inline-block min-w-[79px] z-[1]">
                Lorem ipsum
              </div>
              <div className="w-[37px] relative leading-[27px] text-right flex items-center min-w-[37px] whitespace-nowrap z-[1]">
                $1500
              </div>
            </div>
            {/* <GroupComponent2 rectangle21="/rectangle-214@2x.png" />
            <GroupComponent2
              propBackgroundImage="url('/group-1000001822@3x.png')"
              rectangle21="/rectangle-215@2x.png"
            />
            <GroupComponent2
              propBackgroundImage="url('/group-1000001822@3x.png')"
              rectangle21="/rectangle-216@2x.png"
            />
            <GroupComponent2
              propBackgroundImage="url('/group-1000001822@3x.png')"
              rectangle21="/rectangle-217@2x.png"
            /> */}
          </div>
        </div>
      </section>
      <FrameComponent2 />
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
      />
      <Desktop5 />
      <Footer
        vector4="/vector-4.svg"
        logoLightpng="/logo-lightpng@2x.png"
        footerCurve="/vector-4.svg"
      />
    </div>
  );
};

export default Desktop1;
