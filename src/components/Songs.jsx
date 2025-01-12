import React from "react";
import { getText } from "../Utility";
import { useButtonDebounce } from "../hooks/useButtonDebounce";

const Songs = ({ songs, saveTrack, track }) => {
  const { onDebounce } = useButtonDebounce();

  const setStyle = (id, className, defaultStyle = "") => {
    return track && track.id === id ? className : defaultStyle;
  };

  const PlayingTrackStyle = (id) => {
    if (track && track.id === id)
      return <div className="selected-song-playing">Now Playing</div>;
  };

  const renderImg = (song) => {
    let bg = "linear-gradient(30deg,rgba(0,0,0,0.7),rgba(0, 0, 0,0.3))";
    if (song && song.image.length > 0)
      return bg + `, url(${song?.image[2].url})`;

    if (song && song.artist.image.length > 0)
      return bg + `, url(${song?.artist.image[2].url})`;

    return bg;
  };

  const onSongClick = (song) => {
    onDebounce(() => saveTrack(song));
  };

  return (
    <div className="aligned-container songs-container">
      {songs?.map((song, i) => (
        <div
          onClick={() => onSongClick({ ...song, index: i })}
          key={song.id + i}
          className={`song-card ${setStyle(song.id, "selected")}`}
          style={{
            background: renderImg(song),
          }}
        >
          {PlayingTrackStyle(song.id)}
          <h3 className="card-song-name capitalise">{getText(song.name)}</h3>
          <div className="album capitalise">{getText(song.album.name)}</div>
        </div>
      ))}
    </div>
  );
};

export default Songs;
