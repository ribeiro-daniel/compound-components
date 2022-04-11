import { useState, useMemo, useContext } from "react";
import { Container } from "./styles";
import { AccordionContext, AccordionItemContext, useAccordionItem } from "./AccordionContext";

type Props = {
  children: React.ReactElement | React.ReactElement[];
};

const Accordion = ({ children }: Props) => {
  const [activePanel, setActivePanel] = useState<string>("");
  
  const value = useMemo(
    () => ({ activePanel, handlePanelClick: setActivePanel }),
    [activePanel]
  );

  return (
    <AccordionContext.Provider value={value}>
      <Container>{children}</Container>
    </AccordionContext.Provider>
  );
};

export default Accordion;
