import Card from "../card/card.component";
import { Monster } from "../../App";
import "./card-list.component.css";

type CardListProps = {
  fillterMonsters: Monster[];
};

function CardList({ fillterMonsters }: CardListProps) {
  return (
    <div className="card-list">
      {fillterMonsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
