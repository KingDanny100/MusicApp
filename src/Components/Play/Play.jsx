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

const Play = (props) => {
  const dataa = useContext(MyContext);
  const musics = dataa.map((item) => {
    return item.song;
  });
  const Ads = Adverts;
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [advertSongIndex, setCurrentAdvertSongIndex] = useState(
    musics.length - 1 + Math.ceil(Math.random(0) * 2)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isRepeatAll, setIsRepeatAll] = useState(true);
  const [isRepeatOne, setIsRepeatOne] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isMute, setIsMute] = useState(false);
  const [isAdvert, setIsAdvert] = useState(false);
  const [adIntervalCount, setAdIntervalCount] = useState(0);
  const audioRef = useRef(null);

  const adSongs = Ads.map((item) => {
    return item.song;
  });

  const allSongs = [...musics, ...adSongs];

  const currentSong = isAdvert
    ? allSongs[advertSongIndex]
    : allSongs[currentSongIndex];

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  const shuffleSongs = () => {
    const songsToPlay = musics.filter(
      (song, index) => index !== currentSongIndex
    );
    const randomInd = Math.floor(Math.random() * songsToPlay.length);
    const nextSongInd = musics.indexOf(songsToPlay[randomInd]);

    setCurrentSongIndex(nextSongInd);
  };

  const playNext = () => {
    if (isShuffle) {
      shuffleSongs();
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % musics.length);
    }
    setIsPlaying(true);
  };

  const playPauseToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  const playPrevious = () => {
    if (isShuffle) {
      shuffleSongs();
    }
    else{setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? musics.length - 1 : prevIndex - 1
    )
    }
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
      setIsAdvert(false);
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
    setIsAdvert(false);
    setAdIntervalCount((prev) => prev + 1);

    if (adSongs.includes(currentSong)) {
      continuePlay();
    } else if (adIntervalCount === 5) {
      runAdvert();
      setAdIntervalCount(0);
    }
  }, [currentSongIndex]);

  const continuePlay = () => {
    setCurrentSongIndex((prev) => {
      if (prev === 0) {
        return 5;
      } else {
        return prev - 1;
      }
    });
  };

  useEffect(()=> {
    props.getIndex(currentSongIndex)
  }, [currentSongIndex])

  const runAdvert = () => {
    if (!isAdvert) {
      setIsAdvert(true);
      const randIndex = Math.ceil(Math.random() * 2);
      setCurrentAdvertSongIndex(musics.length - 1 + randIndex);
    } else {
      setIsAdvert(false);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

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
          disabled={isAdvert}
        />
      </div>

      <div className="info_div">
        <section className="info_section">
          <div className="left_div">
            <img
              src={
                isAdvert
                  ? Ads[advertSongIndex === 6 ? 0 : 1].image
                  : dataa[currentSongIndex].image
              }
              alt={
                isAdvert
                  ? Ads[advertSongIndex === 6 ? 0 : 1].name
                  : dataa[currentSongIndex].name
              }
            />
          </div>
          <div className="right_div">
            {!isAdvert && (
              <div>
                <h2>{dataa[currentSongIndex].title}</h2>
                <h4>{dataa[currentSongIndex].artist}</h4>
              </div>
            )}
          </div>
        </section>

        <section className="button_section">
          <button onClick={handleRepeatShuffle} disabled={isAdvert}>
            {isRepeatAll ? (
              <RepeatRoundedIcon fontSize="large" />
            ) : isRepeatOne ? (
              <RepeatOneRoundedIcon fontSize="large" />
            ) : (
              <ShuffleRoundedIcon fontSize="large" />
            )}
          </button>
          <button onClick={playPrevious} disabled={isAdvert}>
            <SkipPreviousRoundedIcon fontSize="large" />
          </button>
          <button onClick={playPauseToggle}>
            {isPlaying ? (
              <PauseRoundedIcon fontSize="large" />
            ) : (
              <PlayArrowRoundedIcon fontSize="large" />
            )}
          </button>
          <button onClick={playNext} disabled={isAdvert}>
            <SkipNextRoundedIcon fontSize="large" />
          </button>
          <button onClick={stopPlay} disabled={isAdvert}>
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
