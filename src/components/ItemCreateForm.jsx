import { useState } from "react";
import FormInput from "./FormInput";
import { items } from "../data/itemData";

function ItemCreateForm() {
  const [newEntry, setNewEntry] = useState({
    id: 1,
    name: "",
    cold: false,
    hot: false,
    shoulderSeason: false,
    packed: false,
    quantity: 0,
    biking: false,
    kayaking: false,
  });

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
    if (!newEntry.quantity) {
      return alert("Put in quantity");
    }
    setNewEntry((prev) => {
      return { ...prev, id: items.length + 1 };
    });
    alert(JSON.stringify(newEntry));
  };
  return (
    <form className="bg-stone-200 rounded-lg px-6 py-4">
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
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={handleSubmit}
          className="w-1/3 bg-blue-500 hover:bg-blue-400 hover:scale-105 active:scale-100 text-sm text-stone-50"
        >
          Submit
        </button>
        <button
          className="w-1/3 bg-red-500 hover:bg-red-400 hover:scale-105 active:scale-100 text-sm text-stone-50"
          onClick={() => document.querySelector("form").reset()}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default ItemCreateForm;
