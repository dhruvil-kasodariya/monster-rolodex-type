import "./card.component.css";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

export default function Card({ monster }: CardProps) {
  const { id, name, email } = monster;
  return (
    <div key={id}>
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
