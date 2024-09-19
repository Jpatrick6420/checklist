import { ItemsContext } from "../context/reducerContext";
import Select from "./Select";
import { useContext } from "react";
/*eslint react/prop-types: 0 */

function Header() {
  const {
    handleActivityChange,
    handleNumOfPeopleChange,
    handleDurationChange,
    dispatch,
    handleWeatherChange,
    state,
  } = useContext(ItemsContext);

  let activity =
    state.currentActivityValue === "none" ? "" : state.currentActivityValue;
  return (
    <header className="bg-gray-200 px-2 pt-4">
      <h1 className="mb-4 font-semibold text-gray-900">
        {state.currentWeatherValue.split("-").join(" ")}{" "}
        {activity === "" ? "" : "&"} {activity} list{activity === "" ? "" : "s"}
      </h1>

      <div className="input-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <Select
          onChange={handleWeatherChange}
          options={["hot-months", "cold-months", "shoulder-season"]}
          id="weather-change-input"
          label="Weather"
          value={state.currentWeatherValue}
          dispatch={dispatch}
        />
        <Select
          onChange={handleActivityChange}
          options={["none", "biking", "kayaking"]}
          id="activity-change-input"
          label="activity"
          value={state.currentActivityValue}
          dispatch={dispatch}
        />
        <Select
          onChange={handleNumOfPeopleChange}
          options={["1", "2", "3", "4", "5", "6"]}
          id="number-of-people-input"
          label="Number of People"
          value={state.current}
          dispatch={dispatch}
        />
        <Select
          onChange={handleDurationChange}
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          id="number-of-nights-input"
          label="Number of Nights"
          value={state.duration}
          dispatch={dispatch}
        />
      </div>
    </header>
  );
}

export default Header;
