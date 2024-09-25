// import { Link } from "react-router-dom";
import { ItemsContext } from "../context/reducerContext";
import { useContext } from "react";
import Nav from "./Nav";
import { capitalizeName } from "../utilities/utilities";
/*eslint react/prop-types: 0 */

function Header() {
  const { state } = useContext(ItemsContext);

  let activity =
    state.currentActivityValue === "none"
      ? ""
      : capitalizeName(state.currentActivityValue);
  return (
    <header className="bg-gradient-to-br from-blue-400 px-2 sm:px-4 py-6">
      <h1 className="mb-4 font-bold text-gray-900 dark:text-stone-200 text-4xl md:text-5xl">
        {capitalizeName(state.currentWeatherValue.split("-").join(" "))}{" "}
        {activity === "" ? "" : "&"} {activity} List
        {activity === "" ? "" : "s"}
      </h1>

      <Nav />
    </header>
  );
}

export default Header;
