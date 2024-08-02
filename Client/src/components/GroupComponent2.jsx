import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent2 = ({
  className = "",
  propBackgroundImage,
  rectangle21,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={`h-[481px] w-[342px] relative bg-[url('/public/group-1000001822@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-sm text-black font-circe ${className}`}
      style={groupDivStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] w-full h-full object-cover hidden"
        alt=""
        src={rectangle21}
      />
      <div className="absolute top-[431px] left-[22px] leading-[27px] inline-block min-w-[79px]">
        Lorem ipsum
      </div>
      <div className="absolute top-[431px] left-[284px] leading-[27px] text-right inline-block min-w-[37px] whitespace-nowrap">
        $1500
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
  rectangle21: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default GroupComponent2;
