/*eslint react/prop-types: 0 */
function CurrentList({ list, toggleChecked, state }) {
  return (
    <ul className="checklist">
      {Array.isArray(list) ? (
        list.map((item, idx) => {
          let amount;

          if (
            item.quantity > 1 &&
            item.name !== "water" &&
            item.name !== "bike water bottles"
          ) {
            amount = Math.ceil(
              item.quantity *
                state.numOfPeople *
                state.duration *
                (state.clothingMultiplier || 1)
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

          return (
            <li key={item.id} className="item-checklist">
              <p>
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

export default CurrentList;
