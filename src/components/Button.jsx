import PropTypes from "prop-types";
function Button({ type, label, onClick }) {
  let styleList;
  const baseStyles = "hover:scale-105 active:scale-100 ";
  if (type === "primary") {
    styleList =
      baseStyles + "text-[10px] px-2 py-1 bg-green-500 hover:bg-green-400";
  }
  if (type === "negative") {
    styleList =
      baseStyles + "w-1/3 bg-red-500 hover:bg-red-400  text-sm text-stone-50";
  }
  if (type === "submit") {
    styleList =
      baseStyles + "w-1/3 bg-blue-500 hover:bg-blue-400 text-sm text-stone-50";
  }
  if (type === "close-btn") {
    styleList =
      baseStyles +
      "absolute top-2 right-2 text-xs w-8 h-8 bg-transparent text-black flex justify-center items-center hover:text-red-500";
  }
  return (
    <button className={styleList} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
};
