import { useContext, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import CurrentList from "./CurrentList";
import "../Layout.css";

import { ItemsContext } from "../context/reducerContext";

function Layout() {
  const { state, dispatch } = useContext(ItemsContext);

  useEffect(
    function () {
      dispatch({ type: "handle active change list" });
    },
    [
      state.currentWeatherValue,
      state.currentActivityValue,
      state.biking,
      state.kayaking,
      dispatch,
    ]
  );
  return (
    <section className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
      <Header />
      <main>
        <CurrentList />
      </main>
      <Footer />
    </section>
  );
}

export default Layout;
