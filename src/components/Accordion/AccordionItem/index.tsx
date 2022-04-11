import { AccordionItemContext } from "../AccordionContext";
import { Container } from "../styles";

type Props = {
  id: string;
  children: React.ReactElement[];
};

const AccordionItem = ({ children, id }: Props): JSX.Element => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      <Container>{children}</Container>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
