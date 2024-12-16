import { useState } from "react";
import { useGetCharacterQuery, Character } from "../../store/characterApi";
import { Container, Pagination, TextField, Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import CharacterItem from "./CharacterItem";
import CircularIndeterminate from "../Ui/Loading/CircularIndeterminate";
import "./characterItem.css";

const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");

  const { data, error, isLoading } = useGetCharacterQuery({
    query: "character",
    page: currentPage,
    name,
    status,
    species,
  });
  console.log(data);

  const totalPages = data?.info?.pages || 0;

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  const handleChangeStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
    setCurrentPage(1);
  };

  const handleChangeSpecies = (event: SelectChangeEvent) => {
    setSpecies(event.target.value as string);
    setCurrentPage(1);
  };

  const handleChangeInputSearch = (event: SelectChangeEvent) => {
    setName(event.target.value as string);
    setCurrentPage(1);
  };

  return (
    <Container>
      <TextField
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
      </div>
      {!error && data && (
        <>
          <ul className="character-list">
            {data.results.map((character: Character) => (
              <CharacterItem key={character.id} {...character} />
            ))}
          </ul>

          <Stack spacing={2} alignItems="center" pb={3}>
            {totalPages > 0 && (
              <Pagination
                count={totalPages}
                page={currentPage}
                showFirstButton
                showLastButton
                onChange={(_, num) => setCurrentPage(num)}
                color="primary"
              />
            )}
          </Stack>
        </>
      )}
    </Container>
  );
};

export default CharacterList;
