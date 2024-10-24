import { useState } from "react";
import { EyeStyled, ModalContainer, ModalContent, XStyled, GridContent } from "./styles";
import { BadgeType, getBadgeUrl } from "../../enum/badgeEnum";
import { BarChart } from "../../pages/Pokedex/components/Graphic";

interface ModalProps {
  dataModal: {
    color: BadgeType;
    sprite: string;
    spriteShiny: string;
    hp: number;
    atk: number;
    spatk: number;
    def: number;
    spdef: number;
    speed: number;
    type2: BadgeType;
    name: string;
    abilityNormal: string;
    abilityHidden: string;
  }
}

export function Modal({dataModal}: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const stats = {
    HP:dataModal.hp,
    Attack: dataModal.atk,
    'Special Attack': dataModal.spatk,
    Defense: dataModal.def,
    'Special Defense': dataModal.spdef,
    Speed: dataModal.speed
  };

  const categories = Object.keys(stats); 

  const data = Object.values(stats);

  console.log("data: ", data);

  return (
    <>
      <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ModalContainer>
          <ModalContent color={dataModal.color}>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
              <h2>{dataModal.name}</h2>
            <GridContent>
              <div><img src={dataModal.sprite} alt="" /></div>
              <div><img src={dataModal.spriteShiny} alt="" /></div>
              <div><BarChart categories={categories} data={data} /></div>
              <div><h2>Normal: {dataModal.abilityNormal}</h2><h2>Hidden: {dataModal.abilityHidden}</h2></div>
            </GridContent>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
