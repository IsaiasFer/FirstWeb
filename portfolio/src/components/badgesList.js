import React from "react";
import { Link } from "react-router-dom";
import Madera from "../images/tablaDeMadera.png";
import Gravatar from "./gravatar";

function useSearchBadges(badge) {
  const [querie, setQuerie] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badge);
  React.useMemo(() => {
    const result = badge.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(querie.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badge, querie]);

  return { querie, setQuerie, filteredBadges };
}

function BadgesList(props) {
  const badge = props.badge;
  const { querie, setQuerie, filteredBadges } = useSearchBadges(badge)
  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <form className="form_email">
          <label>Filter Badges</label>
          <input
            type="text"
            value={querie}
            onChange={(e) => {
              setQuerie(e.target.value);
            }}
          />
        </form>
        <div>
          <h3>No encontramos ningun Badge</h3>
          <Link className="btn" to="/Badges/new">
            Crear nuevo Badge
          </Link>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <form className="form_email">
          <label>Filter Badges</label>
          <input
            type="text"
            value={querie}
            onChange={(e) => {
              setQuerie(e.target.value);
            }}
          />
        </form>
        );
        <ul className="BadgePrevList">
          {filteredBadges.map((Badge) => {
            return (
              <li key={Badge.id} className="BadgePrevContainer">
                <figure className="BadgePrevImageContainer">
                  <Gravatar clase="BadgePrevImage" email={Badge.email} />
                </figure>
                <p className="BadgePrevName">
                  <Link to={`/Badges/${Badge.id}/`} className="listaDeBadges">
                    {Badge.firstName} {Badge.lastName}
                  </Link>
                </p>
                <img className="Madera" src={Madera} alt="" />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
export default BadgesList;
