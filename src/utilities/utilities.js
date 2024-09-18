import {
  hotMonthsList,
  coldMonthsList,
  shoulderSeasonList,
  bikingList,
  kayakingList,
} from "../data/listData";
export const formatName = (name) => {
  const seperatedName = name.split("-");
  const formattedWords = seperatedName.map((name) => {
    const firstLetter = name[0].toUpperCase();
    const restOfName = name.slice(1).toLowerCase();
    return firstLetter + restOfName;
  });
  const newName = formattedWords.join(" ");
  return newName;
};

export const initialState = {
  clothingMultiplier: 1,
  perishableMultiplier: 1,
  cold: false,
  hot: true,
  shoulderSeason: false,
  biking: false,
  kayaking: false,
  numOfPeople: "1",
  duration: "1",
  currentList: [...hotMonthsList, ...bikingList],
  currentWeatherValue: "hot-months",
  currentActivityValue: "none",
  hotMonthsList: hotMonthsList,
  coldMonthsList: coldMonthsList,
  shoulderList: shoulderSeasonList,
  bikingList,
  kayakingList,
};
