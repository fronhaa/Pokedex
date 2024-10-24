import { Eye, X } from "@phosphor-icons/react";
import styled from "styled-components";

interface ModalContentProps {
  color: string;
}

export const EyeStyled = styled(Eye)`
  color: ${(props) => props.theme["gray-900"]};
`;

export const XStyled = styled(X)`
  color: ${(props) => props.theme["gray-900"]};
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["red-700"]};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(3px);
  z-index: 999;

  & button {
    background-color: ${(props) => props.theme["gray-900"]};
  }
`;

export const ModalContent = styled.div<ModalContentProps>`
  background-color: ${(props) => props.theme[props.color]};
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  min-width: 300px;
  max-width: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
  color: ${(props) => props.theme["gray-900"]};

  & h2 {
    text-align: center;
    font-size: 2rem;
  }
`;

export const GridContent = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 20px;

  & div {
    text-align: center;
    width: 100%;

    & img {
      width: 11rem;
    }
  }

  & div:nth-child(4) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
  }
`;