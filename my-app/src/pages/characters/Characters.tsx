import { useState } from "react";
import CharacterList from "../../components/Character/CharacterList";
import IMG from "./characters.svg";
import "./characters.css";

export function Characters() {
  const [item, setItem] = useState();

  return (
    <div>
      <div className="image-container">
        <img src={IMG} alt="" />
      </div>
      <CharacterList />
    </div>
  );
}
