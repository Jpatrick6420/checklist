import PropTypes from "prop-types";
function FormInput({ label, type, value, field, onChange }) {
  if (type === "text") {
    return (
      <div className="grid grid-cols-2 my-1 ">
        <label className="text-left text-gray-900 font-semibold">{label}</label>
        <input
          className="px-1 py-0.5 text-center text-stone-900 bg-white rounded-md"
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
        <label className="text-left text-gray-900 font-semibold">{label}</label>
        <input
          className="text-blue-600"
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

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  field: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormInput;
