import { useContext } from "react";
import { AccordionContext, AccordionItemContext } from "../AccordionContext";
import { ToggleButton } from "./styles";

type Props = {
  children: React.ReactNode;
};

const AccordionToggle = ({ children }: Props): JSX.Element => {
  const { handlePanelClick } = useContext(AccordionContext);
  const { id } = useContext(AccordionItemContext);

  return (
    <ToggleButton onClick={() => handlePanelClick(id)}>{children}</ToggleButton>
  );
};
export default AccordionToggle;
