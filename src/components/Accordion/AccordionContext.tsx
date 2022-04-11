import { useContext } from "react";
import { createContext } from "react";

type AccordionContextProps = {
  activePanel: string;
  handlePanelClick: (panel: string) => void;
};

type AccordionItemContextProps = {
  id: string;
};

export const AccordionContext = createContext({} as AccordionContextProps);
export const AccordionItemContext = createContext({} as AccordionItemContextProps);

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if(context === undefined) {
    throw new Error('O useAccordion deve ser usado dentro de <Accordion />');
  }
  return context;
}

export const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);

  if(context === undefined) {
    throw new Error('O useAccordionItem deve ser usado dentro de <AccordionItem />');
  }
  return context;
}
