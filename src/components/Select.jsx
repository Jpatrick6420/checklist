/*eslint react/prop-types: 0 */
import { formatName } from "../utilities/utilities";
function Select({ onChange, options, id, label, value }) {
  return (
    <div className="select-container border-b-2 border-gray-900 grid  grid-cols-2 my-2 items-center">
      <label className="text-gray-900 dark:text-stone-200 font-semibold text-left px-1">
        {label}
      </label>

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
            <option className="text-center" key={option} value={option}>
              {optionName}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
