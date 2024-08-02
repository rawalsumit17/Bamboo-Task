import { Link } from "react-router-dom";

const FrameComponent = ({ logoDark3 }) => {
  return (
    <header className="self-stretch flex flex-row items-start justify-end pt-0 px-[60px] pb-[13px] box-border max-w-full mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px]">
        <div className="w-[613px] flex flex-row items-end justify-start gap-[125px] max-w-full mq800:w-[296px] mq800:gap-[62px] mq450:gap-[31px]">
          <img
            className="h-[81px] w-[171px] relative object-cover"
            loading="lazy"
            alt=""
            src={logoDark3}
          />
          <nav className="m-0 flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-5 mq800:hidden">
            <nav className="m-0 self-stretch h-[27px] relative text-left text-sm text-black font-circe">
              <div className="absolute top-[0px] left-[0px] leading-[27px] font-light flex items-center min-w-[28px] ">
                <li className="nav-item [list-style:none] ">
                  <Link
                    className="nav-link [text-decoration:none] text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    to="/desktop-men"
                  >
                    Men
                  </Link>
                </li>
              </div>
              <div className="[text-decoration:none] absolute top-[0px] left-[70px] leading-[27px] font-light text-[inherit] flex items-center min-w-[47px]">
                <li className="nav-item [list-style:none]">
                  <Link
                    className="nav-link [text-decoration:none] text-black relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                    to="/desktop-women"
                  >
                    Women
                  </Link>
                </li>
              </div>

              <a className="[text-decoration:none] absolute top-[0px] left-[159px] leading-[27px] font-light text-[inherit] flex items-center min-w-[55px] whitespace-nowrap">
                <li className="nav-item [list-style:none] relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                  About Us
                </li>
              </a>
              <a className="[text-decoration:none] absolute top-[0px] left-[256px] leading-[27px] font-light text-[inherit] flex items-center min-w-[61px]">
                <li className="nav-item [list-style:none] relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                  Catalogue
                </li>
              </a>
            </nav>
          </nav>
        </div>
        <div className="w-[147px] flex flex-col items-start justify-end pt-0 px-0 pb-[23.5px] box-border">
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white  hover:text-purple-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white  hover:text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
              />
            </svg>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white  hover:text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
            <svg
              className="w-[28px] h-[28px] text-gray-800 dark:text-white hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
