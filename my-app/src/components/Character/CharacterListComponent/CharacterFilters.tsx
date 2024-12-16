import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useState } from "react";

const CharacterFilters = () => {
  //   const [name, setName] = useState("");
  //   const [status, setStatus] = useState("");
  //   const [species, setSpecies] = useState("");

  //   const handleChangeStatus = (event: SelectChangeEvent) => {
  //     setStatus(event.target.value as string);
  //     setCurrentPage(1);
  //   };

  //   const handleChangeSpecies = (event: SelectChangeEvent) => {
  //     setSpecies(event.target.value as string);
  //     setCurrentPage(1);
  //   };
  return (
    <>
      {/* <TextField
        label="Search by name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          setCurrentPage(1);
        }}
        fullWidth
        margin="normal"
      />
      <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
        <FormControl style={{ flex: 1 }}>
          <InputLabel>Status</InputLabel>
          <Select value={status} label="Status" onChange={handleChangeStatus}>
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"Alive"}>Alive</MenuItem>
            <MenuItem value={"Dead"}>Dead</MenuItem>
            <MenuItem value={"unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ flex: 1 }}>
          <InputLabel>Species</InputLabel>
          <Select
            value={species}
            label="Species"
            onChange={handleChangeSpecies}
          >
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"Human"}>Human</MenuItem>
            <MenuItem value={"Alien"}>Alien</MenuItem>
            <MenuItem value={"Robot"}>Robot</MenuItem>
            <MenuItem value={"Mythological Creature"}>
              Mythological Creature
            </MenuItem>
            <MenuItem value={"unknown"}>Unknown</MenuItem>
          </Select>
        </FormControl>
      </div> */}
    </>
  );
};

// export default CharacterFilters;
