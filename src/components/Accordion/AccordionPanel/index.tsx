import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "../AccordionContext";
import { Container } from "./styles";

type Props = {
  children: React.ReactNode;
};

const AccordionPanel = ({ children }: Props): JSX.Element => {
  const { activePanel } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);
  return (
    <Container activePanel={activePanel} id={id}>
      {children}
    </Container>
  );
};

export default AccordionPanel;
