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
      <ul>
        <li>
          <p>Items Packed: {numPackedItems}</p>
        </li>
        <li>
          <p>Items left: {itemsLeftToPack}</p>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
