import React, { useContext } from "react";
import "./Nowplaying.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { Link } from "react-router-dom";
import { MyContext } from "../../Data";

const Nowplaying = (props) => {
  const index = props.getIndex;
  const dataa = useContext(MyContext);
  const playImage = dataa[index].image
  const linearGradient = 'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.9))'
  return (
    <div
      className="playingnow_container"
      style={{ backgroundImage: `${linearGradient},url(${playImage})` }}
    >
      <div className="home_icon">
        <Link to="/">
          <span>
            <HomeRoundedIcon fontSize="large" />
          </span>
        </Link>
      </div>
      <main className="main_play">
        <img src={dataa[index].image} alt={dataa[index].artist} />
        <h3>{dataa[index].title}</h3>
        <h4>{dataa[index].artist}</h4>
      </main>
    </div>
  );
};

export default Nowplaying;
