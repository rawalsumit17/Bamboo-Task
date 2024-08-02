import PropTypes from "prop-types";

const Desktop7 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[385px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[110px] px-[271px] pb-[81.2px] box-border gap-[884.2px] max-w-full text-center text-7xl text-darkslategray-100 font-circe mq1300:gap-[442px] mq1300:pl-[135px] mq1300:pr-[135px] mq1300:box-border mq800:h-auto mq800:gap-[221px] mq800:pt-[71px] mq800:px-[67px] mq800:pb-[53px] mq800:box-border mq450:gap-[111px] mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full shrink-0 mq450:gap-[24px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[29px] max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
            <h3 className="m-0 w-[675px] relative text-inherit leading-[26px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-2xl mq450:leading-[21px]">
              Join our newsletter and get 10% off your first order
            </h3>
          </div>
          <div className="self-stretch relative text-lg leading-[31px] text-dimgray z-[1]">
            Plus, receive exclusive offers, product news, tips and guides to
            help you grow in dressing confidence
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[435.6px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
            <div className="flex-1 rounded-10xs bg-white box-border flex flex-row items-start justify-start py-[17px] px-4 min-w-[88px] z-[1] border-[1px] border-solid border-lightgray">
              <input
                className="w-[88.2px] [border:none] [outline:none] font-satoshi text-[16.6px] bg-[transparent] h-[23px] relative text-dimgray text-left flex items-center p-0"
                placeholder="Enter email"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-[20.9px] pb-[21.9px] pr-[25px] pl-[26px] bg-black w-[125.6px] flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-darkslategray-300">
              <div className="flex-1 relative text-[16.1px] leading-[17px] uppercase font-satoshi text-white text-center">
                Sign up
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[-291px] w-[1480px] h-[-802.8px] relative bg-whitesmoke-300 max-w-[165%] shrink-0" />
    </section>
  );
};

Desktop7.propTypes = {
  className: PropTypes.string,
};

export default Desktop7;
