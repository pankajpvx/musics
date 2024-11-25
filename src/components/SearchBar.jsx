import React, { useState } from "react";
import { Strings } from "../Strings";

function SearchBar({ onSerchQuery }) {
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    if (query === "") return;
    onSerchQuery(query);
  };

  return (
    <div className="search-container">
      <div className="search-Wrap">
        <form className="search-input-box" onSubmit={onSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            placeholder={Strings.searchPlaceHolder}
          />
        </form>
        <button type="button" className="search-btn" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
