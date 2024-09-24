import PropTypes from "prop-types";
function Button({ type, label, onClick }) {
  let styleList;
  if (type === "primary") {
    styleList =
      "text-[10px] px-2 py-1 bg-green-500 hover:bg-green-400 hover:scale-105 active:scale-100";
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
