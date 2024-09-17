import { useState } from "react";
import FormInput from "./FormInput";

function ItemCreateForm() {
  let arr = [];
  const [newEntry, setNewEntry] = useState({
    id: 1,
    name: "",
    coldMonths: false,
    hotMonths: false,
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
            coldMonths: !value,
            biking: !value ? false : prevEntry.biking,
            kayaking: !value ? false : prevEntry.kayaking,
          }));
        }
        break;
      case "hot months":
        {
          setNewEntry((prevEntry) => ({
            ...prevEntry,
            hotMonths: !value,
            biking: !value ? false : prevEntry.biking,
            kayaking: !value ? false : prevEntry.kayaking,
          }));
        }
        break;
      case "shoulder months":
        {
          setNewEntry((prevEntry) => ({
            ...prevEntry,
            hotMonths: !value,
            biking: !value ? false : prevEntry.biking,
            kayaking: !value ? false : prevEntry.kayaking,
          }));
        }
        break;
      case "quantity":
        {
          setNewEntry({
            ...newEntry,
            quantity: value,
          });
        }
        break;
      case "biking":
        {
          setNewEntry({
            ...newEntry,
            biking: true,
            hotMonths: false,
            coldMonths: false,
            shoulderSeason: false,
          });
        }
        break;
      case "kayaking": {
        setNewEntry({
          ...newEntry,
          kayaking: true,
          hotMonths: false,
          coldMonths: false,
          shoulderSeason: false,
        });
      }
    }
    console.log(newEntry);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewEntry((prev) => {
      return { ...prev, id: arr.length };
    });
    console.log(newEntry);
  };
  return (
    <form className="bg-stone-200 rounded-lg px-6 py-4">
      <h2 className="font-bold text-xl mb-6 underline ">New Item</h2>
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
        value={newEntry.coldMonths}
        onChange={handleInputEntry}
        type="checkbox"
      />
      <FormInput
        label="Hot Months"
        field="hot months"
        value={newEntry.hotMonths}
        onChange={handleInputEntry}
        type="checkbox"
      />
      <FormInput
        label="Shouldee Months"
        field="shoulder months"
        value={newEntry.coldMonths}
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
