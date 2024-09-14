import { useState, useEffect } from "react";

function Footer({ currentList }) {
  const [numPackedItems, setNumPackedItems] = useState(0);
  const [itemsLeftToPack, setItemsLeftToPack] = useState(0);
  const calculatePackedItems = () => {
    const itemsPacked = currentList.reduce((acc, item) => {
      return item.packed ? acc + 1 : acc;
    }, 0);
    setNumPackedItems(itemsPacked);
  };
  const calculateItemsLeft = () => {
    const itemsLeft = currentList.reduce((acc, item) => {
      return !item.packed ? acc + 1 : acc;
    }, 0);
    setItemsLeftToPack(itemsLeft);
  };

  useEffect(
    function () {
      calculatePackedItems();
      calculateItemsLeft();
    },
    [currentList]
  );

  return (
    <footer>
      <ul className="flex justify-around border-t-2 border-gray-900 mt-4 pt-4">
        <li>
          <p className="text-yellow-500">Items Packed: {numPackedItems}</p>
        </li>
        <li>
          <p>Items left: {itemsLeftToPack}</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
