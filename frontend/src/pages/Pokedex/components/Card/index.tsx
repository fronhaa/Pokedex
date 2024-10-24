import { useState } from "react";
import {
  CardAction,
  CardBody,
  CardContainer,
  CardInfo,
  CardTypes,
  SparkleStyled,
  ImgPokemon
} from "./styles";
import { BadgeType, getBadgeUrl } from "../../../../enum/badgeEnum";
import { Modal } from "../../../../components/Modal";

interface CardProps {
  sprite: string;
  name: string;
  type1: BadgeType;
  type2: BadgeType;
  spriteShiny: string;
  hp: number;
  atk: number;
  spatk: number;
  def: number;
  spdef: number;
  speed: number;
  abilityHidden: string;
  abilityNormal: string;
}

export function Card({ sprite, name, type1, type2, spriteShiny, hp, atk, spatk, def, spdef, speed, abilityHidden, abilityNormal }: CardProps) {
  const [isShiny, setIsShiny] = useState(false);

  const dataModal = {
    color: type1,
    sprite: sprite,
    spriteShiny: spriteShiny,
    hp: hp,
    atk: atk,
    spatk: spatk,
    def: def,
    spdef: spdef,
    speed: speed,
    type2: type2,
    name: name,
    abilityHidden: abilityHidden,
    abilityNormal: abilityNormal
  };

  return (
    <div>
      <CardContainer color={type1} $isShiny={isShiny}>
        <CardAction>
          <Modal dataModal={dataModal} />
          <SparkleStyled size={24} onClick={() => setIsShiny(!isShiny)} />
        </CardAction>
        <CardBody>
          <ImgPokemon src={isShiny ? spriteShiny : sprite} $isShiny={isShiny} />
          <CardInfo>
            <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            <CardTypes>
              <img src={getBadgeUrl(type1)} />
              {type2 && <img src={getBadgeUrl(type2)} />}
            </CardTypes>
          </CardInfo>
        </CardBody>
      </CardContainer>
    </div>
  );
}
