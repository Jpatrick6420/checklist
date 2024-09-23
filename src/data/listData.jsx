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
    state.cold === true &&
    state.biking === false &&
    state.kayaking === false
  ) {
    return state.coldMonthsList;
  }

  if (
    state.hot === true &&
    state.biking === false &&
    state.kayaking === false
  ) {
    return state.hotMonthsList;
  }
  if (
    state.shoulderSeason === true &&
    state.biking === false &&
    state.kayaking === false
  ) {
    return state.shoulderSeasonList;
  }
  if (state.hot === true && state.biking === true) {
    const combinedList = [...state.hotMonthsList, ...state.bikingList];
    return combinedList;
  }
  if (state.hot === true && state.kayaking === true) {
    const combinedList = [...state.hotMonthsList, ...state.kayakingList];
    return combinedList;
  }
  if (state.cold === true && state.biking === true) {
    const combinedList = [...state.hotMonthsList, ...state.bikingList];
    return combinedList;
  }
  if (state.cold === true && state.kayaking === true) {
    const combinedList = [...state.hotMonthsList, ...state.kayakingList];
    return combinedList;
  }
  if (state.shoulderSeason === true && state.biking === true) {
    const combinedList = [...state.shoulderSeasonList, ...state.bikingList];
    return combinedList;
  }
  if (state.shoulderSeason === true && state.kayaking === true) {
    const combinedList = [...state.shoulderSeasonList, ...state.kayakingList];
    return combinedList;
  }
};
