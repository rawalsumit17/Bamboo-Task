import PropTypes from "prop-types";

const SolutionGrid = () => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[66px] box-border max-w-full text-center text-19xl text-white font-satoshi mq1300:pb-[43px] mq1300:box-border mq800:pb-7 mq800:box-border`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] mq1300:flex-wrap">
          <div className="flex-1 flex flex-col items-center justify-end py-[74px] px-5 box-border relative gap-[209px] min-w-[468px] min-h-[720px] max-w-full mq1300:flex-1 mq800:min-w-full mq450:gap-[104px] mq450:pt-12 mq450:pb-12 mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/public/rectangle-1@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover hidden"
                alt=""
                src="/rectangle-1@2x.png"
              />
              {/* <div className="absolute h-full w-full top-[720px] right-[-720px] bottom-[-720px] left-[720px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)_70%)] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" /> */}
            </div>
            <h1 className="m-0 w-[308px] h-[51px] relative text-inherit uppercase font-medium font-inherit flex items-center justify-center z-[2] mq800:text-11xl mq450:text-4xl">
              Comfort Wear
            </h1>
            <div className="w-[308px] flex flex-row items-start justify-center text-sm">
              <button className="w-[143.8px] relative leading-[52px] font-medium text-[inherit] flex items-center justify-center shrink-0 z-[2] bg-transparent hover:bg-white hover:text-black text-white border border-white ...">
                SHOP ALL
              </button>
            </div>
          </div>
          <div className="flex-[0.6810] flex flex-col items-center justify-end py-[74px] pr-[204px] pl-[65px] box-border relative gap-[209px] min-w-[468px] min-h-[720px] max-w-full mq1300:flex-1 mq800:gap-[104px] mq800:pl-8 mq800:pr-[102px] mq800:box-border mq800:min-w-full mq450:gap-[52px] mq450:pt-12 mq450:pr-5 mq450:pb-12 mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/public/rectangle-11@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover hidden"
                alt=""
                src="/rectangle-11@2x.png"
              />
              {/* <div className="absolute h-full w-full top-[720px] right-[-720px] bottom-[-720px] left-[720px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)_70%)] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" /> */}
            </div>
            <h1 className="m-0 h-[51px] relative text-inherit uppercase font-medium font-inherit flex items-center justify-center z-[2] mq800:text-11xl mq450:text-4xl">
              Easy Access Clothing
            </h1>
            <div className="w-[225.8px] flex flex-row items-start justify-start py-0 pr-0 pl-[82px] box-border text-sm">
              <button className="flex-1 relative leading-[52px] font-medium text-[inherit]  bg-transparent hover:bg-white hover:text-black text-white border border-white ...">
                SHOP ALL
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
          <div className="flex-1 flex flex-col items-start justify-end py-[74px] pr-[202px] pl-[206px] box-border relative gap-[209px] min-w-[468px] min-h-[720px] max-w-full mq800:gap-[104px] mq800:pl-[103px] mq800:pr-[101px] mq800:box-border mq800:min-w-full mq450:gap-[52px] mq450:py-12 mq450:px-5 mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/public/rectangle-12@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover hidden"
                alt=""
                src="/rectangle-12@2x.png"
              />
              {/* <div className="absolute h-full w-full top-[720px] right-[-720px] bottom-[-720px] left-[720px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)_70%)] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" /> */}
            </div>
            <h1 className="m-0 h-[51px] relative text-inherit uppercase font-medium font-inherit flex items-center justify-center z-[2] mq800:text-11xl mq450:text-4xl">
              SEATED WEAR
            </h1>
            <div className="w-[225.8px] flex flex-row items-start justify-start py-0 pr-0 pl-[82px] box-border text-sm">
              <button className="flex-1 relative leading-[52px] font-medium text-[inherit] z-[2]  bg-transparent hover:bg-white hover:text-black text-white border border-white ...">
                SHOP ALL
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-end py-[74px] pr-[200px] pl-[206px] box-border relative gap-[209px] min-w-[468px] min-h-[720px] max-w-full mq800:gap-[104px] mq800:pl-[103px] mq800:pr-[100px] mq800:box-border mq800:min-w-full mq450:gap-[52px] mq450:py-12 mq450:px-5 mq450:box-border">
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-[url('/public/rectangle-13@2x.png')] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover hidden"
                alt=""
                src="/rectangle-13@2x.png"
              />
              {/* <div className="absolute h-full w-full top-[720px] right-[-720px] bottom-[-720px] left-[720px] [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0)_70%)] [transform:_rotate(180deg)] [transform-origin:0_0] z-[1]" /> */}
            </div>
            <h1 className="m-0 h-[51px] relative text-inherit uppercase font-medium font-inherit flex items-center justify-center z-[2] mq800:text-11xl mq450:text-4xl">
              Easy Closure
            </h1>
            <div className="w-[225.8px] flex flex-row items-start justify-start py-0 pr-0 pl-[82px] box-border text-sm">
              <button className="flex-1 relative leading-[52px] font-medium text-[inherit] z-[2]  bg-transparent hover:bg-white hover:text-black text-white border border-white ...">
                SHOP ALL
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionGrid;
