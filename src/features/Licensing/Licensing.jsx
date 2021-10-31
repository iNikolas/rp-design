import React, { useContext, useState } from "react";
import css from "./Licensing.module.css";
import { useSelector } from "react-redux";
import { LanguageContext } from "../../common/languageContext";
import KnifeCard from "./KnifeCard/KnifeCard";
import StyleToggler from "./StyleToggler/StyleTogler";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import KnifePage from "./KnifePage/KnifePage";

function Licensing() {
  const [style, setStyle] = useState("one-entry-style");
  const [, language] = useContext(LanguageContext);
  const knivesList = useSelector((state) => state.licensing.knives);
  const match = useRouteMatch();

  const knivesElements = knivesList.map((knife, index) => (
    <KnifeCard
      storePartition="licensing"
      index={index}
      style={style}
      key={knife.id}
      id={knife.id}
      img={knife.image}
      name={knife.name[language]}
      year={knife.mainDescription.year}
      type={knife.mainDescription.type[language]}
      color={knife.mainDescription.color[language]}
      handle={knife.mainDescription.handle[language]}
      weight={knife.verboseDescription.weight[language]}
      bearing={knife.verboseDescription.bearing[language]}
      bladeLength={knife.verboseDescription.bladeLength[language]}
      bladeThickness={knife.verboseDescription.bladeThickness[language]}
      handleThickness={knife.verboseDescription.handleThickness[language]}
      lockType={knife.verboseDescription.lockType[language]}
      overallLength={knife.verboseDescription.overallLength[language]}
    />
  ));

  return (
    <Switch>
      <Route path={`${match.path}/:id`}>
        <KnifePage storePartition="licensing" />
      </Route>
      <Route path={match.path}>
        <StyleToggler style={style} setStyle={setStyle} />
        <div className={`${css["knives-wrapper"]} ${css[style]}`}>
          {knivesElements}
        </div>
      </Route>
    </Switch>
  );
}

export default Licensing;
