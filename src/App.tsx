import {
  Accordion,
  AccordionItem,
  AccordionToggle,
  AccordionPanel,
} from "components/Accordion";
import { Card } from "components/Card";
import React from "react";

import { GlobalStyle } from "./styles";

const info = {
  picture:
    "https://images.pexels.com/photos/2130131/pexels-photo-2130131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  buttonContent: "Sou um botaozinho :D",
  altDescription: "Tchu tcha tchu tcha",
  pictureWidth: "350px",
  pictureHeight: "350px",
};

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Accordion>
        <AccordionItem id="1">
          <AccordionToggle>Section #1</AccordionToggle>
          <AccordionPanel>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="2">
          <AccordionToggle>Section #2</AccordionToggle>
          <AccordionPanel>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="3">
          <AccordionToggle>Section #3</AccordionToggle>
          <AccordionPanel>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="4">
          <AccordionToggle>Section #4</AccordionToggle>
          <AccordionPanel>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem id="5">
          <AccordionToggle>Section #5</AccordionToggle>
          <AccordionPanel>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Card>
        <Card.Image src={info.picture} alt={info.altDescription} />
        <Card.Body>
          <Card.Label>Label muito foda</Card.Label>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Text>
          <Card.Button>{info.buttonContent}</Card.Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
export default App;
