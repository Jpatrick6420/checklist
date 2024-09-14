import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import CurrentList from "./components/CurrentList";
import { handleActiveListChange } from "./data/listData";
import { initialState } from "./utilities/utilities";
import Footer from "./components/Footer";

function App() {
  function itemsReducer(state, action) {
    switch (action.type) {
      case "set weather list": {
        let selectedList;
        let cold;
        let hot;
        let shoulder;
        if (action.payload === "cold-months") {
          selectedList = state.coldMonthsList;
          cold = true;
          hot = false;
          shoulder = false;
        }
        if (action.payload === "shoulder-season") {
          selectedList = state.shoulderList;
          cold = false;
          hot = false;
          shoulder = true;
        }
        if (action.payload === "hot-months") {
          selectedList = state.hotMonthsList;
          cold = false;
          hot = true;
          shoulder = false;
        }

        return {
          ...state,
          currentList: selectedList,
          hotList: hot,
          coldList: cold,
          shoulderSeasonList: shoulder,
          currentWeatherValue: action.payload,
        };
      }
      case "change activity": {
        console.log(action.payload);
        if (action.payload === "none") {
          return {
            ...state,
            kayaking: false,
            biking: false,
            currentActivityValue: action.payload,
          };
        }
        const isKayaking = action.payload === "kayaking";
        const isBiking = action.payload === "biking";

        return {
          ...state,
          currentActivityValue: action.payload,
          kayaking: isKayaking,
          biking: isBiking,
        };
      }
      case "toggle checked": {
        const { idx } = action.payload;

        return {
          ...state,
          currentList: state.currentList.map((item, i) =>
            i === idx ? { ...item, packed: !item.packed } : item
          ),
        };
      }
      case "handle active change list": {
        const updatedList = handleActiveListChange(state);

        return { ...state, currentList: updatedList };
      }
      case "set number of people": {
        return { ...state, numOfPeople: action.payload };
      }
      case "change duration": {
        return { ...state, duration: action.payload };
      }
      default:
        console.log("Houstan we have a problem with the reducer💥");
        return state;
    }
  }

  const [state, dispatch] = useReducer(itemsReducer, initialState);

  const handleWeatherChange = (value) => {
    if (value === "hot-months") {
      dispatch({ type: "set weather list", payload: "hot-months" });
    }
    if (value === "cold-months") {
      dispatch({ type: "set weather list", payload: "cold-months" });
    }
    if (value === "shoulder-season") {
      dispatch({ type: "set weather list", payload: "shoulder-season" });
    }
  };
  const handleDurationChange = (value) => {
    dispatch({ type: "change duration", payload: value });
  };

  const handleActivityChange = (value) => {
    console.log("activity:", value);
    dispatch({ type: "change activity", payload: value });
  };
  const toggleChecked = (idx) => {
    dispatch({ type: "toggle checked", payload: { idx } });
  };
  const handleNumOfPeopleChange = (value) => {
    dispatch({ type: "set number of people", payload: value });
  };

  useEffect(
    function () {
      dispatch({ type: "handle active change list" });
    },
    [
      state.currentWeatherValue,
      state.currentActivityValue,
      state.biking,
      state.kayaking,
    ]
  );
  // console.log(state.currentList);
  return (
    <section className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto">
      <Header
        handleActivityChange={handleActivityChange}
        handleWeatherChange={handleWeatherChange}
        handleNumOfPeopleChange={handleNumOfPeopleChange}
        handleDurationChange={handleDurationChange}
        currentListOptions={state}
        dispatch={dispatch}
      />
      <CurrentList
        list={state.currentList}
        toggleChecked={toggleChecked}
        dispatch={dispatch}
        state={state}
      />
      <Footer currentList={state.currentList} />
    </section>
  );
}

export default App;
