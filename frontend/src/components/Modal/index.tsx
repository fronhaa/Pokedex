import { useState } from "react";
import { EyeStyled, ModalContainer, ModalContent, XStyled } from "./styles";
import { BadgeType } from "../../enum/badgeEnum";

interface ModalProps {
  color: BadgeType;
}

export function Modal({ color }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <EyeStyled size={24} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <ModalContainer>
          <ModalContent color={color}>
            <XStyled onClick={() => setIsOpen(!isOpen)} />
            <h1>Modal</h1>
            <p>Modal content</p>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}
