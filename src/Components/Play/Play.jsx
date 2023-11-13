import React, { useContext, useEffect, useRef, useState } from "react";
import "./Play.css";
import { Adverts, MyContext } from "../../Data";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import RepeatOneRoundedIcon from "@mui/icons-material/RepeatOneRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";

const Play = () => {
  const dataa = useContext(MyContext);
  const Ads = Adverts;
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isRepeatAll, setIsRepeatAll] = useState(true);
  const [isRepeatOne, setIsRepeatOne] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isAdvert, setIsAdvert] = useState(false);
  const audioRef = useRef(null);

  const musics = dataa.map((item) => {
    return item.song;
  });

  const adSongs = Ads.map((item) => {
    return item.song;
  });

  const currentSong = musics[currentSongIndex];

  // console.log(musics);
  //   console.log(adSongs);
  // console.log(audioRef.current);
  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const playNext = () => {
    if (isShuffle) {
      const songsToPlay = musics.filter(
        (song, index) => index !== currentSongIndex
      );
      const randomInd = Math.floor(Math.random() * songsToPlay.length);
      const nextSongInd = musics.indexOf(songsToPlay[randomInd]);
      setCurrentSongIndex(nextSongInd - 1);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % musics.length);
    }
    setIsPlaying(true);
  };

  const playPauseToggle = () => {
    setIsPlaying((prev) => !prev);
  };
  

  const playPrevious = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? musics.length - 1 : prevIndex - 1
    );
    setIsPlaying(true);
  };

  const stopPlay = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  const handleRepeatShuffle = () => {
    if (isRepeatAll) {
      setIsRepeatAll((prev) => !prev);
      setIsRepeatOne((prev) => !prev);
      setIsShuffle(false);
    }
    if (isRepeatOne) {
      setIsRepeatAll(false);
      setIsRepeatOne((prev) => !prev);
      setIsShuffle((prev) => !prev);
    }
    if (isShuffle) {
      setIsRepeatOne(false);
      setIsShuffle((prev) => !prev);
      setIsRepeatAll((prev) => !prev);
    }
  };

  

 

  

  

  const handleSongEnd = () => {
    if (isRepeatOne && !isRepeatAll && !isShuffle) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      playNext();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioRef]);

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const handleTimeChange = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleMute = () => {
    if (isMute) {
      audioRef.current.volume = volume;
    } else {
      audioRef.current.volume = 0;
    }
    setIsMute((prev) => !prev);
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleSongEnd);
      audioRef.current.addEventListener("timeupdate", handleTimeChange);
      audioRef.current.addEventListener("durationchange", handleDurationChange);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleSongEnd);
        audioRef.current.removeEventListener("timeupdate", handleTimeChange);
        audioRef.current.removeEventListener(
          "durationchange",
          handleDurationChange
        );
      }
    };
  }, [currentSongIndex, isRepeatOne, isShuffle]);

  return (
    <div className="play_container">
      <audio
        controls
        src={currentSong}
        autoPlay={isPlaying}
        ref={audioRef}
      ></audio>
      <div className="range_div">
        <input
          type="range"
          step="0.01"
          className="range"
          value={currentTime}
          onChange={handleSliderChange}
          max={duration}
        />
      </div>

      <div className="info_div">
        <section className="info_section">
          <div className="left_div">
            <img
              src={isAdvert? Ads.image : dataa[currentSongIndex].image}
              alt={isAdvert? Ads.name : dataa[currentSongIndex].name}
            />
          </div>
          <div className="right_div">
            {!isAdvert && (
              <div>
                <h2>{dataa[currentSongIndex].name}</h2>
                <h4>{dataa[currentSongIndex].Album}</h4>
              </div>
            )}
          </div>
        </section>

        <section className="button_section">
          <button onClick={handleRepeatShuffle}>
            {isRepeatAll ? (
              <RepeatRoundedIcon fontSize="large" />
            ) : isRepeatOne ? (
              <RepeatOneRoundedIcon fontSize="large" />
            ) : (
              <ShuffleRoundedIcon fontSize="large" />
            )}
          </button>
          <button onClick={playPrevious}>
            <SkipPreviousRoundedIcon fontSize="large" />
          </button>
          <button onClick={playPauseToggle}>
            {isPlaying ? (
              <PauseRoundedIcon fontSize="large" />
            ) : (
              <PlayArrowRoundedIcon fontSize="large" />
            )}
          </button>
          <button onClick={playNext}>
            <SkipNextRoundedIcon fontSize="large" />
          </button>
          <button onClick={stopPlay}>
            <StopRoundedIcon fontSize="large" />
          </button>
        </section>

        <aside className="right_aside">
          <span className="format_span">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="volume_div">
            <button onClick={handleMute}>
              {isMute ? (
                <VolumeOffRoundedIcon />
              ) : volume <= 0.5 ? (
                <VolumeDownRoundedIcon />
              ) : (
                <VolumeUpRoundedIcon />
              )}
            </button>
            <input
              type="range"
              step={0.01}
              max={1}
              value={isMute ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Play;
