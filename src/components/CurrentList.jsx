/*eslint react/prop-types: 0 */
import PropTypes from "prop-types";

function CurrentList({ list, toggleChecked, state }) {
  return (
    <ul className="checklist grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Array.isArray(list) ? (
        list.map((item, idx) => {
          let amount;

          if (
            item.quantity > 1 &&
            item.name !== "water" &&
            item.name !== "bike water bottles"
          ) {
            amount = Math.ceil(
              item.quantity * state.duration * (state.clothingMultiplier || 1)
            );
          }
          if (item.quantity === 1 && item.name !== "water") {
            amount = 1;
          }
          if (
            item.name === "bike water bottles" ||
            item.name === "paddles" ||
            item.name === "life jackets"
          ) {
            amount = item.quantity;
          }
          if (item.name === "water") {
            amount =
              (state.perishableMultiplier || 1) *
              Number(state.numOfPeople) *
              Number(state.duration);
          }
          const itemStyles = item.packed
            ? "line-through text-left text-red-500"
            : "text-left";
          return (
            <li
              key={item.id}
              className="item-checklist grid grid-cols-[2fr_1fr] "
            >
              <p className={itemStyles}>
                {amount} {item.name === "water" ? "Gal" : ""} {item.name}
              </p>
              <input
                type="checkbox"
                checked={item.packed}
                id={item.id}
                onChange={() => toggleChecked(idx)}
              />
            </li>
          );
        })
      ) : (
        <li>no items to display</li>
      )}
    </ul>
  );
}

CurrentList.PropTypes = {
  list: PropTypes.array,
};

export default CurrentList;
