import { items } from "./itemData";

export const hotMonthsList = items.filter((item) => item.hotMonths === true);
export const coldMonthsList = items.filter((item) => item.coldMonths === true);
export const shoulderSeasonList = items.filter(
  (item) => item.shoulderSeason === true
);

export const bikingList = items.filter((item) => item.biking === true);
export const kayakingList = items.filter((item) => item.kayaking === true);

export const handleActiveListChange = (state) => {
  if (
    state.coldList === true &&
    state.biking === false &&
    state.kayaking === false
  ) {
    // return { ...state, currentList: coldMonthsList };
    return coldMonthsList;
  }

  if (
    state.hotList === true &&
    state.biking === false &&
    state.kayaking === false
  ) {
    // return { ...state, currentList: hotMonthsList };
    return hotMonthsList;
  }
  if (
    state.shoulderSeasonList === true &&
    state.biking === false &&
    state.kayaking === false
  ) {
    // return { ...state, currentList: shoulderSeasonList };
    return shoulderSeasonList;
  }
  if (state.hotList === true && state.biking === true) {
    console.log(state);
    const combinedList = [...hotMonthsList, ...bikingList];
    return combinedList;
    // return { ...state, currentList: combinedList };
  }
  if (state.hotList === true && state.kayaking === true) {
    const combinedList = [...hotMonthsList, ...kayakingList];
    console.log("hotlist and kayaking");
    return combinedList;
    // return { ...state, currentList: combinedList };
  }
  if (state.coldList === true && state.biking === true) {
    const combinedList = [...hotMonthsList, ...bikingList];
    // return { ...state, currentList: combinedList };
    return combinedList;
  }
  if (state.coldList === true && state.kayaking === true) {
    const combinedList = [...hotMonthsList, ...kayakingList];
    return combinedList;
    // return { ...state, currentList: combinedList };
  }
  if (state.shoulderSeasonList === true && state.biking === true) {
    console.log("done");
    const combinedList = [...shoulderSeasonList, ...bikingList];
    return combinedList;
    // return { ...state, currentList: combinedList };
  }
  if (state.shoulderSeasonList === true && state.kayaking === true) {
    const combinedList = [...shoulderSeasonList, ...kayakingList];
    return combinedList;
    // return { ...state, currentList: combinedList };
  }
};
