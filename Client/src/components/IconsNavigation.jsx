import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const IconsNavigation = ({ className = "" }) => {
  return (
    <div
      className={`w-[1410px] h-[81px] flex flex-row items-start justify-start py-0 px-[45px] box-border max-w-full mq1300:pl-[22px] mq1300:pr-[22px] mq1300:box-border ${className}`}
    >
      <header className="self-stretch flex-1 flex flex-row items-end justify-start gap-[24px] max-w-full">
        <div className="self-stretch w-[272px] flex flex-col items-start justify-start">
          <Link
            className="nav-link [text-decoration:none] text-black"
            to="/desktop-43"
          >
            <img
              className="w-[171px] flex-1 relative max-h-full object-cover"
              loading="lazy"
              alt=""
              src="/logo-dark-3@2x.png"
            />
          </Link>
        </div>
        <nav className="m-0 flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-5 box-border max-w-full mq1300:hidden">
          <nav className="m-0 w-[317px] flex flex-row items-start justify-between gap-[20px] text-left text-sm text-black font-circe">
            <div className="relative leading-[27px] font-light inline-block min-w-[28px]">
              Men
            </div>
            <a className="[text-decoration:none] relative leading-[27px] font-light text-[inherit] inline-block min-w-[47px]">
              Women
            </a>
            <a className="[text-decoration:none] relative leading-[27px] font-light text-[inherit] inline-block min-w-[55px] whitespace-nowrap">
              About us
            </a>
            <a className="[text-decoration:none] relative leading-[27px] font-light text-[inherit] inline-block min-w-[61px]">
              Catalogue
            </a>
          </nav>
        </nav>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[23.5px]">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/searchalt.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[23.5px]">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/bagshopping.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[27px]">
          <img
            className="w-[15px] h-[13px] relative"
            loading="lazy"
            alt=""
            src="/frame-133.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[23.5px]">
          <img
            className="w-5 h-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/circleuser.svg"
          />
        </div>
      </header>
    </div>
  );
};

IconsNavigation.propTypes = {
  className: PropTypes.string,
};

export default IconsNavigation;
