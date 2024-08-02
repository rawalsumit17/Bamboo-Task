import PropTypes from "prop-types";

const FooterContent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start gap-[73.8px] max-w-full text-left text-2xl text-white font-satoshi mq800:gap-[37px] mq450:gap-[18px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[69px] pl-[71px] box-border max-w-full mq800:pl-[35px] mq800:pr-[34px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[153px] min-w-[836.8px] max-w-full mq1300:flex-1 mq1125:flex-wrap mq1125:gap-[76px] mq1125:min-w-full mq450:gap-[38px]">
            <div className="w-[131px] flex flex-col items-start justify-start gap-[19.6px]">
              <div className="self-stretch relative leading-[25.2px] font-medium mq450:text-mid mq450:leading-[20px]">
                About Us
              </div>
              <div className="w-[111.4px] flex flex-col items-start justify-start gap-[9.5px] text-mid-1">
                <div className="relative leading-[30.4px] inline-block min-w-[75.4px]">
                  About Us
                </div>
                <div className="w-[104.1px] relative text-mid-4 leading-[30.4px] flex items-center">
                  Get In Touch
                </div>
                <div className="relative text-base leading-[30.4px] inline-block min-w-[63.2px]">
                  Reviews
                </div>
                <div className="w-[93.8px] relative text-[16.6px] leading-[30.4px] flex items-center">
                  Press Room
                </div>
                <div className="self-stretch relative text-mid-2 leading-[30.4px]">
                  Terms Of Use
                </div>
                <a className="[text-decoration:none] w-[54.7px] relative text-base-7 leading-[30.4px] text-[inherit] flex items-center">
                  Privacy
                </a>
              </div>
            </div>
            <div className="w-[173px] flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative leading-[25.2px] font-medium mq450:text-mid mq450:leading-[20px]">
                Customer Care
              </div>
              <div className="w-[156.6px] flex flex-col items-start justify-start gap-[9.2px] text-mid-1">
                <div className="w-[127.5px] relative leading-[30.4px] flex items-center">
                  Contact Us
                </div>
                <div className="relative text-mid-4 leading-[30.4px] inline-block min-w-[94.7px]">
                  Testimonials
                </div>
                <div className="w-[153px] relative text-base leading-[31px] flex items-center">
                  Delivery and Returns
                </div>
                <div className="self-stretch relative text-[16.6px] leading-[31px]">
                  Alteration Services
                </div>
              </div>
            </div>
            <div className="w-[226.8px] flex flex-col items-start justify-start gap-[19.6px]">
              <div className="self-stretch relative leading-[25.2px] font-medium mq450:text-mid mq450:leading-[20px]">
                Shopping With Us
              </div>
              <div className="w-[195.2px] flex flex-col items-start justify-start gap-[9.5px] text-base-8">
                <div className="w-[85.1px] relative text-base-3 leading-[30.4px] flex items-center">
                  Size Guide
                </div>
                <div className="w-[112.1px] relative leading-[30.4px] flex items-center">
                  Gift Vouchers
                </div>
                <div className="w-[129.3px] relative text-mid-5 leading-[30.4px] flex items-center">
                  VAT Exemption
                </div>
                <div className="self-stretch relative text-base-5 leading-[30.4px]">
                  Rewards
                </div>
                <div className="w-[175.9px] relative text-mid-2 leading-[30.4px] flex items-center">
                  Order Our Catalogue
                </div>
                <div className="w-[154.8px] relative text-base-2 leading-[30.4px] flex items-center">
                  Become an Affiliate
                </div>
                <div className="w-[84.8px] relative leading-[30.4px] flex items-center">
                  Wholesale
                </div>
              </div>
            </div>
          </div>
          <div className="w-[310px] flex flex-col items-start justify-start gap-[19.6px] min-w-[310px] mq1300:flex-1">
            <div className="w-52 relative leading-[25.2px] font-medium flex items-center mq450:text-mid mq450:leading-[20px]">
              Unlock 10% off
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[10.4px] gap-[30.7px] text-base-9 mq450:gap-[15px]">
              <div className="w-[286px] relative leading-[30.4px] flex items-center">
                <span className="w-full">
                  <p className="m-0">Your first order when you sign up to</p>
                  <p className="m-0">our newsletter</p>
                </span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[18.9px]">
                <div className="self-stretch bg-white flex flex-row items-start justify-start py-[15px] px-4 shrink-0 border-[1px] border-solid border-lightgray">
                  <input
                    className="w-[88.2px] [border:none] [outline:none] font-satoshi text-[16.6px] bg-[transparent] h-[23px] relative text-dimgray text-left flex items-center p-0"
                    placeholder="Enter email"
                    type="text"
                  />
                </div>
                <button className="cursor-pointer [border:none] pt-[20.9px] pb-[21.9px] pr-[25px] pl-[26px] bg-gold w-[125.6px] flex flex-row items-start justify-start box-border shrink-0 whitespace-nowrap hover:bg-darkgoldenrod">
                  <div className="flex-1 relative text-[16.1px] leading-[17px] uppercase font-medium font-satoshi text-black text-center inline-block min-w-[73.8px]">
                    Sign up
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[15.3px]">
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
                alt=""
                src="/list--item--link--twitter--svg.svg"
              />
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
                alt=""
                src="/list--item--link--facebook--svg.svg"
              />
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
                alt=""
                src="/list--item--link--instagram--svg.svg"
              />
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
                alt=""
                src="/list--item--link--youtube--svg.svg"
              />
              <img
                className="h-[15px] w-[15px] relative overflow-hidden shrink-0 min-h-[15px]"
                alt=""
                src="/list--item--link--pinterest--svg.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[497px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-base-8 text-dimgray font-inter">
        <div className="rounded-10xs bg-white flex flex-row items-start justify-start pt-[13px] px-[19px] pb-3.5 gap-[9.8px] border-[1px] border-solid border-lightgray">
          <div className="relative leading-[22.8px]">
            United Kingdom (GBP £)
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <img
              className="w-[18px] h-[22.8px] relative"
              alt=""
              src="/presentationdisclosure--togglearrow.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector-4.svg"
      />
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;
