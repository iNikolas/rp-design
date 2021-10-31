import React from "react";
import NavbarComponent from "./features/Navbar/Navbar";
import { Switch, Route, useLocation } from "react-router-dom";
import MainPage from "./features/MainPage/MainPage";
import About from "./features/About/About";
import ToggleLanguage from "./features/ToggleLanguage/ToggleLanguage";
import Footer from "./features/Footer/Footer";
import { animated } from "@react-spring/web";
import { useTransition } from "@react-spring/core";
import Licensing from "./features/Licensing/Licensing";

function App() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: {
      opacity: 0,
      display: "none",
    },
  });
  return (
    <>
      <ToggleLanguage />
      <NavbarComponent />
      {transitions((props, item) => (
        <animated.div style={props}>
          <Switch location={item}>
            <Route path="/licensing">
              <Licensing />
            </Route>
            <Route path="/contacts">
              <About />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </animated.div>
      ))}
      <Footer />
    </>
  );
}

export default App;
