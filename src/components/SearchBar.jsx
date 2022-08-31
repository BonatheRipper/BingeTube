import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { BingeTubeProvider } from "./../context/contextProvider";

const SearchBar = () => {
  const [searchTerm, setSearchedTerm] = useState("");
  const { themeBG } = BingeTubeProvider();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm == "" || searchTerm == " ") {
      return;
    }
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchedTerm(" ");
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={(e) => handleSubmit(e)}
      className="rounded-xl border pl-2 md:mr-0"
    >
      <input
        onChange={(e) => setSearchedTerm(e.target.value)}
        className="search-bar"
        placeholder="search"
        value={searchTerm}
      />
      <IconButton type="submit" className={`p-4 !text-${themeBG}`}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
