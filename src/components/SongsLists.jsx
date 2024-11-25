import SearchBar from "./SearchBar";
import Spacer from "./Spacer";
import Songs from "./Songs";
import "../style/songsLists.css";
import { getSongs } from "../Api/Utility";
import { Strings } from "../Strings";
import Loader from "../commonComponents/Loader";
import { usePagination } from "../hooks/usePagination";
import MusicPlayer from "./MusicPlayer";
import { useRef, useState } from "react";

const SongsLists = (props) => {
  const [songs, loader, onSerchQuery] = usePagination(props.songs, getSongs);
  const [track, setTrack] = useState(null);
  const debounceRef = useRef(null);

  const saveTrack = (song) => {
    setTrack(song);
  };

  const onClickPrev = () => {
    if (debounceRef.current) return;
    const index = track.index;
    if (index === 0) return;
    const newIndex = index - 1;
    const newTrack = songs.results[newIndex];
    setTrack({ ...newTrack, index: newIndex });

    debounceRef.current = setTimeout(() => {
      debounceRef.current = null;
    }, 300);
  };

  const onNextClick = () => {
    if (debounceRef.current) return;
    const index = track.index;
    const totalSongs = songs.results.length;
    if (index === totalSongs - 1) return;
    const newIndex = index + 1;
    const newTrack = songs.results[newIndex];
    setTrack({ ...newTrack, index: newIndex });

    debounceRef.current = setTimeout(() => {
      debounceRef.current = null;
    }, 300);
  };

  return (
    <>
      <div className="container set-position">
        <h1 className="heading-style aligned-container">
          {Strings.primaryHeading}
        </h1>
        <Spacer marginSize={"50px"} />
        <SearchBar onSerchQuery={onSerchQuery} />
        <Spacer marginSize={"50px"} />
        <Songs songs={songs.results} saveTrack={saveTrack} track={track} />
        <Loader isLoader={loader} />
        {songs.results.length > 0 && <Spacer height={"150px"} id="observer" />}
      </div>
      <MusicPlayer
        track={track}
        onClickPrev={onClickPrev}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default SongsLists;