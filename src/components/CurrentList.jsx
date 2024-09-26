/*eslint react/prop-types: 0 */
import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { ItemsContext } from "../context/reducerContext";
import { handleActiveListChange } from "../data/listData";
import { capitalizeName } from "../utilities/utilities";

function CurrentList() {
  const { state, toggleChecked, dispatch } = useContext(ItemsContext);
  useEffect(
    function () {
      const newList = handleActiveListChange(state);
      dispatch({ type: "handle active change list", payload: newList });
    },
    [
      state.hotList,
      state.coldList,
      state.shoulderList,
      state.biking,
      state.kayaking,
    ]
  );
  return (
    <ul className="checklist grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-2 sm:pt-4">
      {Array.isArray(state.currentList) ? (
        state.currentList.map((item, idx) => {
          let amount;

          if (
            item.quantity !== 1 &&
            item.name !== "water" &&
            item.name !== "bike water bottles"
          ) {
            amount = Math.ceil(
              item.quantity * state.duration * (state.clothingMultiplier || 1)
            );
          }
          if (
            (item.quantity === 1 && item.name !== "water") ||
            item.quantity === null
          ) {
            amount = "";
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
            ? "line-through text-left text-red-500 font-bold"
            : "text-left mr-2 font-bold";
          return (
            <li
              key={item.id}
              className=" flex items-center justify-between hover:bg-blue-600 hover:text-stone-50 rounded-md py-2 px-4"
            >
              <p className={itemStyles}>
                {amount} {item.name === "water" ? "Gal" : ""}{" "}
                {capitalizeName(item.name)}
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

CurrentList.propTypes = {
  list: PropTypes.array,
};

export default CurrentList;
