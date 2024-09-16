import Select from "./Select";
/*eslint react/prop-types: 0 */

function Header({
  handleWeatherChange,
  handleActivityChange,
  handleNumOfPeopleChange,
  currentListOptions,
  handleDurationChange,
  dispatch,
}) {
  let activity =
    currentListOptions.currentActivityValue === "none"
      ? ""
      : currentListOptions.currentActivityValue;
  return (
    <header>
      <h1>
        {currentListOptions.currentWeatherValue.split("-").join(" ")}{" "}
        {activity === "" ? "" : "&"} {activity} list{activity === "" ? "" : "s"}
      </h1>

      <div className="input-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <Select
          onChange={handleWeatherChange}
          options={["hot-months", "cold-months", "shoulder-season"]}
          id="weather-change-input"
          label="Weather"
          value={currentListOptions.currentWeatherValue}
          dispatch={dispatch}
        />
        <Select
          onChange={handleActivityChange}
          options={["none", "biking", "kayaking"]}
          id="activity-change-input"
          label="activity"
          value={currentListOptions.currentActivityValue}
          dispatch={dispatch}
        />
        <Select
          onChange={handleNumOfPeopleChange}
          options={["1", "2", "3", "4", "5", "6"]}
          id="number-of-people-input"
          label="Number of People"
          value={currentListOptions.current}
          dispatch={dispatch}
        />
        <Select
          onChange={handleDurationChange}
          options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
          id="number-of-nights-input"
          label="Number of Nights"
          value={currentListOptions.duration}
          dispatch={dispatch}
        />
      </div>
    </header>
  );
}

export default Header;
