import { Character } from "../../store/characterApi";
import "./characterItem.css";
const CharacterItem: React.FC<Character> = ({
  id,
  name,
  status,
  species,
  image,
}) => {
  return (
    <li className="character-card">
      <h3>{name}</h3>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <img src={image} alt={name} />
    </li>
  );
};

export default CharacterItem;
