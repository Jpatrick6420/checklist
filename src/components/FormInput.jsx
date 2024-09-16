import PropTypes from "prop-types";
function FormInput({ label, type, value, field, onChange }) {
  if (type === "text") {
    return (
      <div className="grid grid-cols-2 my-1 ">
        <label className="text-left">{label}</label>
        <input
          className="px-1 py-0.5 text-center"
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value, field);
          }}
        />
      </div>
    );
  }
  if (type === "checkbox") {
    return (
      <div className="grid grid-cols-2 my-1 ">
        <label className="text-left">{label}</label>
        <input
          type="checkbox"
          value={value}
          onChange={(e) => {
            onChange(e.target.checked, field);
            console.log(e.target.checked);
          }}
        />
      </div>
    );
  }
}

// FormInput.propTypes = {
//   label: PropTypes.string,
//   type: PropTypes.string,
//   value: PropTypes.string,
//   field: PropTypes.string,
// };
export default FormInput;
