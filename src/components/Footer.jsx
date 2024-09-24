import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ItemsContext } from "../context/reducerContext";

function Footer() {
  const { state } = useContext(ItemsContext);
  const [numPackedItems, setNumPackedItems] = useState(0);
  const [itemsLeftToPack, setItemsLeftToPack] = useState(0);
  const calculatePackedItems = () => {
    const itemsPacked = state.currentList.reduce((acc, item) => {
      return item.packed ? acc + 1 : acc;
    }, 0);
    setNumPackedItems(itemsPacked);
  };
  const calculateItemsLeft = () => {
    const itemsLeft = state.currentList.reduce((acc, item) => {
      return !item.packed ? acc + 1 : acc;
    }, 0);
    setItemsLeftToPack(itemsLeft);
  };

  useEffect(
    function () {
      calculatePackedItems();
      calculateItemsLeft();
    },
    [state.currentList]
  );

  return (
    <footer className="bg-gray-900">
      <ul className="flex justify-around border-t-2 border-stone-50  py-4">
        <li>
          <p className="text-yellow-500">Items Packed: {numPackedItems}</p>
        </li>
        <li>
          <p className="text-stone-50">Items left: {itemsLeftToPack}</p>
        </li>
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  currentList: PropTypes.array,
};
export default Footer;
