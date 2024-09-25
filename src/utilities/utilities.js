import {
  hotMonthsList,
  coldMonthsList,
  shoulderSeasonList,
  bikingList,
  kayakingList,
} from "../data/listData.jsx";
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
  currentList: [...hotMonthsList],
  currentWeatherValue: "hot-months",
  currentActivityValue: "none",
  hotMonthsList: hotMonthsList,
  coldMonthsList: coldMonthsList,
  shoulderList: shoulderSeasonList,
  bikingList,
  kayakingList,
};

export const capitalizeName = (name) => {
  const split = name.split(" ");

  if (split.length === 1) {
    const firstLetter = split[0][0].toUpperCase();
    const restOfName = split[0].slice(1);
    return firstLetter + restOfName;
  }

  const capitalizedElements = split.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const restOfName = word.slice(1);

    return firstLetter + restOfName;
  });

  return capitalizedElements.join(" ");
};
