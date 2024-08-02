import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  propTextDecoration,
  vector4,
  logoLightpng,
  footerCurve,
}) => {
  const navigationSecondaryStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <footer
      className={`self-stretch bg-black flex flex-col items-start justify-start pt-[71px] px-0 pb-5 box-border gap-[16.4px] max-w-full z-[2] text-left text-2xl text-white font-inter mq1125:pt-[46px] mq1125:box-border mq450:pt-[30px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[70px] pb-[57.4px] box-border max-w-full font-satoshi mq450:pb-[37px] mq450:box-border mq800:pl-[35px] mq800:pr-[35px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1300:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[153px] min-w-[836.8px] max-w-full mq1125:flex-wrap mq1125:gap-[76px] mq1125:min-w-full mq450:gap-[38px] mq1300:flex-1">
            <div className="w-[131px] flex flex-col items-start justify-start gap-[19.6px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[25.2px] font-medium font-inherit mq450:text-mid mq450:leading-[20px]">
                About Us
              </h3>
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
                <div
                  className="w-[54.7px] relative text-base-7 leading-[30.4px] flex items-center"
                  style={navigationSecondaryStyle}
                >
                  Privacy
                </div>
              </div>
            </div>
            <div className="w-[173px] flex flex-col items-start justify-start gap-[20px]">
              <h3 className="m-0 self-stretch relative text-inherit leading-[25.2px] font-medium font-inherit mq450:text-mid mq450:leading-[20px]">
                Customer Care
              </h3>
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
              <h3 className="m-0 self-stretch relative text-inherit leading-[25.2px] font-medium font-inherit mq450:text-mid mq450:leading-[20px]">
                Shopping With Us
              </h3>
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
          <div className="w-[310px] flex flex-col items-start justify-start gap-[30.4px] min-w-[310px] mq450:gap-[15px] mq1300:flex-1">
            <div className="w-[286px] flex flex-col items-start justify-start gap-[19.6px]">
              <h3 className="m-0 w-52 relative text-inherit leading-[25.2px] font-medium font-inherit flex items-center shrink-0 mq450:text-mid mq450:leading-[20px]">
                Unlock 10% off
              </h3>
              <div className="self-stretch relative text-base-9 leading-[30.4px] shrink-0">
                <p className="m-0">Your first order when you sign up to</p>
                <p className="m-0">our newsletter</p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[18.9px]">
              <div className="self-stretch bg-white flex flex-row items-start justify-start py-[15px] px-4 border-[1px] border-solid border-lightgray">
                <input
                  className="w-[88.2px] [border:none] [outline:none] font-satoshi text-[16.6px] bg-[transparent] h-[23px] relative text-dimgray text-left flex items-center p-0"
                  placeholder="Enter email"
                  type="text"
                />
              </div>
              <button className="cursor-pointer [border:none] pt-[20.9px] pb-[21.9px] pr-[25px] pl-[26px] bg-gold w-[125.6px] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkgoldenrod">
                <div className="flex-1 relative text-[16.1px] leading-[17px] uppercase font-medium font-satoshi text-black text-center inline-block min-w-[73.8px]">
                  Sign up
                </div>
              </button>
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
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[57.3px] pr-5 pl-[962px] text-base-8 text-dimgray mq450:pl-5 mq450:box-border mq800:pl-60 mq800:box-border mq1300:pl-[481px] mq1300:box-border">
        <div className="rounded-10xs bg-white flex flex-row items-start justify-start pt-[13px] px-[19px] pb-3.5 gap-[9.8px] border-[1px] border-solid border-lightgray">
          <select className="relative leading-[22.8px] custom-select">
            <option value="UK">United Kingdom (GBP £)</option>
            <option value="INR">India (Rupee ₹)</option>
            <option value="US">United States (USD $)</option>
            <option value="EU">European Union (EUR €)</option>
          </select>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0"></div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[7px] box-border max-w-full">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full"
          alt=""
          src={vector4}
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[10.6px] pr-[70px] pl-[69px] box-border max-w-full mq800:pl-[34px] mq800:pr-[35px] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1125:flex-wrap">
          <img
            className="h-[107px] w-[226px] relative overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={logoLightpng}
          />
          <div className="w-[537.1px] flex flex-col items-start justify-start pt-[41px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center gap-[10.2px] mq800:flex-wrap">
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
        src={footerCurve}
      />
      <div className="w-[413.7px] flex flex-row items-start justify-start py-0 px-[71px] box-border max-w-full text-smi-9 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative leading-[21px]">© 2024 Lorem ipsum</div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  vector4: PropTypes.string,
  logoLightpng: PropTypes.string,
  footerCurve: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default Footer;
