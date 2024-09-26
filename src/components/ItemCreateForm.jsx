import { useContext, useState } from "react";
import FormInput from "./FormInput";
import { useNavigate } from "react-router-dom";
import { ItemsContext } from "../context/reducerContext";
import { v4 as uuidv4 } from "uuid";
import Button from "./Button";
function ItemCreateForm() {
  const { dispatch } = useContext(ItemsContext);

  const [newEntry, setNewEntry] = useState({
    id: uuidv4(),
    name: "",
    cold: false,
    hot: false,
    shoulderSeason: false,
    packed: false,
    quantity: null,
    biking: false,
    kayaking: false,
  });
  const navigate = useNavigate();

  const handleInputEntry = (value, field) => {
    switch (field) {
      case "name":
        {
          setNewEntry({ ...newEntry, name: value });
        }
        break;
      case "cold months":
        {
          setNewEntry((prevEntry) => ({
            ...prevEntry,
            cold: !prevEntry.cold,
            biking: !prevEntry.cold ? false : prevEntry.biking,
            kayaking: !prevEntry.cold ? false : prevEntry.kayaking,
          }));
        }
        break;
      case "hot months":
        {
          setNewEntry((prevEntry) => ({
            ...prevEntry,
            hot: !prevEntry.hot,
            biking: !prevEntry.hot ? false : prevEntry.biking,
            kayaking: !prevEntry.hot ? false : prevEntry.kayaking,
          }));
        }
        break;
      case "shoulder months":
        {
          setNewEntry((prevEntry) => ({
            ...prevEntry,
            shoulderSeason: !prevEntry.shoulderSeason,
            biking: !prevEntry.shoulderSeason ? false : prevEntry.biking,
            kayaking: !prevEntry.shoulderSeason ? false : prevEntry.kayaking,
          }));
        }
        break;
      case "quantity":
        {
          if (!value) return;
          setNewEntry({
            ...newEntry,
            quantity: Number(value),
          });
        }
        break;
      case "biking":
        {
          setNewEntry({
            ...newEntry,
            biking: true,
            hot: false,
            cold: false,
            shoulderSeason: false,
          });
        }
        break;
      case "kayaking": {
        setNewEntry({
          ...newEntry,
          kayaking: true,
          hot: false,
          cold: false,
          shoulderSeason: false,
        });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!newEntry.quantity) {
    //   return alert("Put in qua
    // }
    dispatch({ type: "add new item", payload: newEntry });

    navigate("/");
  };
  const handleReset = () => {
    document.querySelector("form").reset();
  };
  const handleNavigateHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="flex justify-center">
      <form className="relative bg-stone-200 rounded-lg px-6 py-4 max-w-[500px] ">
        <Button type="close-btn" onClick={handleNavigateHome} label="X" />
        <h2 className="font-bold text-xl mb-6 underline text-gray-900">
          New Item
        </h2>
        <FormInput
          label="Name"
          field="name"
          value={newEntry.name}
          onChange={handleInputEntry}
          type="text"
        />
        <FormInput
          label="Cold Months"
          field="cold months"
          value={newEntry.cold}
          onChange={handleInputEntry}
          type="checkbox"
        />
        <FormInput
          label="Hot Months"
          field="hot months"
          value={newEntry.hot}
          onChange={handleInputEntry}
          type="checkbox"
        />
        <FormInput
          label="Shoulder Months"
          field="shoulder months"
          value={newEntry.shoulderSeason}
          onChange={handleInputEntry}
          type="checkbox"
        />
        <FormInput
          label="Biking"
          field="biking"
          value={newEntry.biking}
          onChange={handleInputEntry}
          type="checkbox"
        />
        <FormInput
          label="Kayaking"
          field="kayaking"
          value={newEntry.kayaking}
          onChange={handleInputEntry}
          type="checkbox"
        />
        <FormInput
          label="Quantity"
          field="quantity"
          value={newEntry.quantity.toString()}
          onChange={handleInputEntry}
          type="text"
          className="text-gray-900"
        />
        <div className="flex justify-center items-center gap-2 mt-4 ">
          <Button type="submit" onClick={handleSubmit} label="Submit" />

          <Button type="negative" onClick={handleReset} label="Reset" />
        </div>
      </form>
    </div>
  );
}

export default ItemCreateForm;
