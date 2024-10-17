import { CardContainer } from "./styles";

interface CardProps {
  sprite: string;
  name: string;
  type1: string;
  type2: string;
}

export function Card({ sprite, name, type1, type2 }: CardProps) {
  return (
    <div>
      <CardContainer color={type1}>
        <img src={sprite} />
      </CardContainer>
      <span>{name}</span>
      <p>{type1}</p>
      <p>{type2}</p>
    </div>
  );
}
