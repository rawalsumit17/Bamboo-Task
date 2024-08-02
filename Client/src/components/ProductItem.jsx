import PropTypes from "prop-types";

const ProductItem = ({ className = "", linkIMG1992jpg }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start pt-0 px-0 pb-[87.1px] box-border gap-[24.2px] max-w-full text-center text-mid text-gray-200 font-satoshi mq800:pb-[57px] mq800:box-border ${className}`}
    >
      <img
        className="self-stretch h-[353.8px] relative max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={linkIMG1992jpg}
      />
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
        <div className="flex-1 relative leading-[25.5px] inline-block max-w-full">
          <p className="m-0 font-medium">Adaptive clothing</p>
          <p className="m-0 font-medium">&nbsp;</p>
          <p className="m-0 [text-decoration:underline]">Read more</p>
        </div>
      </div>
      <div className="self-stretch h-[68px] relative hidden" />
    </div>
  );
};

ProductItem.propTypes = {
  className: PropTypes.string,
  linkIMG1992jpg: PropTypes.string,
};

export default ProductItem;
