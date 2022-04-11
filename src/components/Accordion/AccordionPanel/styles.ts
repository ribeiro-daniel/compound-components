import styled from "styled-components";

type PanelProps = {
  activePanel: string;
  id: string;
};

export const Container = styled.div<PanelProps>`
  max-height: ${({ activePanel, id }) => (activePanel === id ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-out;

  padding: 0 10px;
  border-radius: 10px;
  background-color: #ffff;
`;
