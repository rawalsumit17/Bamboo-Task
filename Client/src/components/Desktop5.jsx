import PropTypes from "prop-types";

const Desktop5 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-white overflow-hidden flex flex-row items-start justify-start max-w-full text-center text-7xl text-darkslategray-100 font-satoshi ${className}`}
    >
      <div className="ml-[-20px] w-[1480px] bg-whitesmoke-300 flex flex-col items-center justify-start pt-[110px] px-5 pb-[81.4px] box-border gap-[48px] shrink-0 max-w-[103%] mq450:pt-[71px] mq450:pb-[53px] mq450:box-border mq800:gap-[24px]">
        <div className="w-[898px] flex flex-col items-end justify-start gap-[29px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full">
            <h2 className="m-0 w-[675px] relative text-inherit leading-[26px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-2xl mq450:leading-[21px]">
              Join our newsletter and get 10% off your first order
            </h2>
          </div>
          <div className="self-stretch relative text-lg leading-[31px] text-dimgray z-[1]">
            Plus, receive exclusive offers, product news, tips and guides to
            help you grow in dressing confidence
          </div>
        </div>
        <div className="w-[898px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[435.6px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
            <div className="flex-1 rounded-10xs bg-white box-border flex flex-row items-start justify-start py-[17px] px-4 min-w-[88px] shrink-0 z-[1] border-[1px] border-solid border-lightgray">
              <input
                className="w-[88.2px] [border:none] [outline:none] font-satoshi text-[16.6px] bg-[transparent] h-[23px] relative text-dimgray text-left flex items-center p-0"
                placeholder="Enter email"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] pt-[20.9px] pb-[21.9px] pr-[25px] pl-[26px] bg-black w-[125.6px] flex flex-row items-start justify-start box-border shrink-0 whitespace-nowrap z-[1] hover:bg-darkslategray-300">
              <div className="flex-1 relative text-[16.1px] leading-[17px] uppercase font-satoshi text-white text-center">
                Sign up
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

Desktop5.propTypes = {
  className: PropTypes.string,
};

export default Desktop5;
