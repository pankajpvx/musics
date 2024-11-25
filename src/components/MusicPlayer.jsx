import React, { useEffect, useRef, useState } from "react";
import "../style/musicPlayer.css";
import PlayBtnSvg from "../svgs/PlayBtnSvg";
import PauseBtnSvg from "../svgs/PauseBtnSvg";
import VolumeSvg from "../svgs/VolumeSvg";
import PreviousBtnSvg from "../svgs/PreviousSvg";
import NextBtnSvg from "../svgs/NextbtnSvg";
import MuteVolumeSvg from "../svgs/MuteVolumeSvg";
import { FavoriteSvg } from "../svgs/FavouriteSvg";

const MusicPlayer = ({ track = null, onClickPrev, onNextClick }) => {
  const trackDuration = track?.duration;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlay, setIsPlay] = useState(null);
  const [isPause, setIsPause] = useState(true);
  const [volume, setVolume] = useState(50);
  const [songCurrentTime, setSongCurrentTime] = useState(0);
  const timerRef = useRef(null);

  const durationValue = () => {
    const minutes = Math.floor(trackDuration / 60);
    const seconds = trackDuration % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    return formattedTime;
  };

  const runningTrackDuration = () => {
    const time = parseInt(songCurrentTime);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const timerFunction = () => {
    return setInterval(() => {
      setSongCurrentTime(isPlay.currentTime);
      if (isPlay.ended) {
        setIsPause(true);
      }
    }, 1000);
  };

  useEffect(() => {
    if (isPlay && !isPlay.paused) {
      timerRef.current = timerFunction();
    }
    return () => {
      if (timerRef?.current) clearInterval(timerRef.current);
    };
  }, [isPlay]);

  const playTheTrack = () => {
    const audio = new Audio(track.trackUrls[4].url);
    setIsPlay(audio);
    setSongCurrentTime(0);
    setVolume(50);
    audio.volume = 50 / 100;
    audio.play();
    setIsPause(false);
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    setSongCurrentTime(newTime);
    isPlay.currentTime = newTime;
  };

  const onVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    isPlay.volume = newVolume / 100;
  };

  useEffect(() => {
    if (track) {
      if (isPlay) {
        if (isPlay.paused) {
          isPlay.currentTime = 0;
          playTheTrack();
        } else {
          isPlay.currentTime = 0;
          isPlay.pause();
          playTheTrack();
        }
      } else playTheTrack();
    }
  }, [track]);

  const playSong = () => {
    if (isPlay) {
      if (isPlay.paused) {
        if (isPlay.ended) {
          clearInterval(timerRef.current);
          timerRef.current = timerFunction();
        }
        isPlay.play();
        setIsPause(false);
      } else {
        isPlay.pause();
        setIsPause(true);
      }
    }
  };

  const onFavouriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="music-player-container">
      <div className="common-width controls">
        <div className="left-box">
          <button
            className="control-btn"
            disabled={!track}
            onClick={onClickPrev}
          >
            <PreviousBtnSvg />
          </button>
          <button
            className="control-btn play-pause"
            aria-label="Play"
            onClick={() => playSong()}
          >
            {isPause ? <PlayBtnSvg /> : <PauseBtnSvg />}
          </button>

          <button
            className="control-btn"
            disabled={!track}
            onClick={onNextClick}
          >
            <NextBtnSvg />
          </button>
        </div>

        <div className="right-box">
          <button className="control-btn volume-btn">
            {volume != 0 ? <VolumeSvg /> : <MuteVolumeSvg />}
          </button>
          <div className="volume-progress-bar">
            <input
              disabled={!track}
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={onVolumeChange}
              className="progress"
            />
          </div>
        </div>
      </div>
      {track && (
        <div className="common-width timers">
          <div className="running-time">{runningTrackDuration()}</div>
          <div className="song-name-box">
            <div className="song-name">
              {track.name} ({track.artist.name})
            </div>
          </div>
          <div className="fixed-time">{durationValue()}</div>
        </div>
      )}
      <div className="common-width">
        <input
          disabled={!track}
          type="range"
          min="0"
          max={trackDuration}
          value={songCurrentTime}
          onChange={handleSliderChange}
          className="progress"
        />
      </div>
      {track && (
        <FavoriteSvg
          size={27}
          onFavouriteClick={onFavouriteClick}
          color={isFavorite ? "#ffff00" : undefined}
        />
      )}
    </div>
  );
};

export default MusicPlayer;
