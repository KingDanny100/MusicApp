import React from "react";
import "./Navbar.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import AlbumRoundedIcon from "@mui/icons-material/AlbumRounded";
import MusicVideoRoundedIcon from "@mui/icons-material/MusicVideoRounded";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import { Link } from "react-router-dom";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import logo from "../../Images/musicIcon.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <div className="navhead">
          <img src={logo} alt="musiclogo" />
          <span>LaraBuzz</span>
        </div>
        <h3>LIBRARY</h3>
        <ul>
          <Link to="/">
            <li>
              <span className="icon">
                <HomeRoundedIcon />
              </span>{" "}
              <span>Home</span>
            </li>
          </Link>
          <Link to="/nowplaying">
            <li>
              <span className="icon">
                <MusicNoteRoundedIcon />
              </span>{" "}
              <span>Now Playing</span>
            </li>
          </Link>
          <Link to="/queue">
            <li>
              <span className="icon">
                <QueueMusicRoundedIcon />
              </span>{" "}
              <span>Queue</span>
            </li>
          </Link>
          <Link to="/album">
            <li>
              <span className="icon">
                <AlbumRoundedIcon />
              </span>{" "}
              <span>Albums</span>
            </li>
          </Link>
          <Link to="/playlist">
            <li>
              <span className="icon">
                <LibraryMusicRoundedIcon />
              </span>{" "}
              <span>My Playlist</span>
            </li>
          </Link>
          <Link to="/video">
            <li>
              <span className="icon">
                <MusicVideoRoundedIcon />
              </span>{" "}
              <span>Videos</span>
            </li>
          </Link>
        </ul>
      </div>
      <br />
      <div className="navdiv">
        <h3>SETTINGS</h3>
        <ul>
          <Link to="/">
            <li>
              <span className="icon">
                <EqualizerRoundedIcon />
              </span>{" "}
              <span>Equalizer</span>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
