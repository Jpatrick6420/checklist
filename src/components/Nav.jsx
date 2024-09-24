import { useContext, useState } from "react";
import Select from "./Select";
import { ItemsContext } from "../context/reducerContext";
import { Link } from "react-router-dom";
import Button from "./Button";

function Nav() {
  const {
    handleWeatherChange,
    dispatch,
    state,
    handleActivityChange,
    handleDurationChange,
    handleNumOfPeopleChange,
  } = useContext(ItemsContext);
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavOpen = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <nav>
      <Button type="primary" label="Menu" onClick={toggleNavOpen} />

      <ul
        className={`transition-transform  duration-500 ease-in-out transform origin-top ${
          navOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } `}
        style={{ transformOrigin: "top", height: navOpen ? "auto" : "0" }}
      >
        <li>
          {" "}
          <Select
            onChange={handleWeatherChange}
            options={["hot-months", "cold-months", "shoulder-season"]}
            id="weather-change-input"
            label="Weather"
            value={state.currentWeatherValue}
            dispatch={dispatch}
          />
        </li>
        <li>
          <Select
            onChange={handleActivityChange}
            options={["none", "biking", "kayaking"]}
            id="activity-change-input"
            label="activity"
            value={state.currentActivityValue}
            dispatch={dispatch}
          />
        </li>
        <li>
          <Select
            onChange={handleNumOfPeopleChange}
            options={["1", "2", "3", "4", "5", "6"]}
            id="number-of-people-input"
            label="Number of People"
            value={state.current}
            dispatch={dispatch}
          />
        </li>
        <li>
          <Select
            onChange={handleDurationChange}
            options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
            id="number-of-nights-input"
            label="Number of Nights"
            value={state.duration}
            dispatch={dispatch}
          />
        </li>
        <li className="items-center flex">
          <Link
            to="/new-entry"
            className="w-6 h-6 ml-2 bg-blue-500 rounded-md text-stone-50 hover:scale-105 active:scale-100 hover:bg-blue-400 hover:text-stone-50"
          >
            +
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
