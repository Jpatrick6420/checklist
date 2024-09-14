/*eslint react/prop-types: 0 */
import { formatName } from "../utilities/utilities";
function Select({ onChange, options, id, label, value }) {
  return (
    <div className="select-container">
      <label style={{ color: "white" }}>{label}</label>

      <select
        id={id}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {options.map((option) => {
          const optionName = formatName(option);

          return (
            <option key={option} value={option}>
              {optionName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
