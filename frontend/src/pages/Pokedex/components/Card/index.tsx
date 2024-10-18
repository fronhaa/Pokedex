import { useState } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  sprite: string;
  name: string;
  type1: string;
  type2: string;
  spriteShiny: string;
}

export function Card({ sprite, name, type1, type2, spriteShiny }: CardProps) {
  const [isShiny, setIsShiny] = useState(false);
  console.log(isShiny);

  return (
    <div>
      <CardContainer color={type1}>
        <img src={isShiny ? spriteShiny : sprite} />
        <button onClick={() => setIsShiny(!isShiny)}>shiny</button>
      </CardContainer>
      <span>{name}</span>
      <p>{type1}</p>
      <p>{type2}</p>
    </div>
  );
}
