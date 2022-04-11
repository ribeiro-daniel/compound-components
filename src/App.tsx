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
    "https://images.pexels.com/photos/7296575/pexels-photo-7296575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  buttonContent: "Proposta $$",
  altDescription:
    "Mulher de cabelos morenos e vestido preto segurando uma taca de vinho com os olhos fechados",
  pictureWidth: "350px",
  pictureHeight: "350px",
};

const info2 = {
  picture:
    "https://envato-shoebox-0.imgix.net/57a8/ccb3-b10b-4cd4-83a9-95efba46e7d5/KIR04249.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=2eb97705d67fec44e524301a77fbd9c7",
  buttonContent: "Proposta $$",
  altDescription:
    "Mulher de cabelos morenos e vestido preto segurando uma taca de vinho com os olhos fechados",
  pictureWidth: "350px",
  pictureHeight: "350px",
};

const info3 = {
  picture:
    "https://womenandtravel.net/wp-content/uploads/2021/08/hottest-women.jpg",
  buttonContent: "Proposta $$",
  altDescription:
    "Mulher de cabelos morenos e vestido preto segurando uma taca de vinho com os olhos fechados",
  pictureWidth: "350px",
  pictureHeight: "350px",
};

const info4 = {
  picture:
    "https://imagens.viashopmoda.com.br/upload/Juruaia_GarotaVeneno/colecoes/28/2021022515525302352-_hot_woman_(2).jpg",
  buttonContent: "Proposta $$",
  altDescription:
    "Mulher de cabelos morenos e vestido preto segurando uma taca de vinho com os olhos fechados",
  pictureWidth: "350px",
  pictureHeight: "350px",
};

const info5 = {
  picture:
    "https://images.unsplash.com/photo-1587053076193-83e87333dd4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd29tZW58ZW58MHx8MHx8&w=1000&q=80",
  buttonContent: "Proposta $$",
  altDescription:
    "Mulher de cabelos morenos e vestido preto segurando uma taca de vinho com os olhos fechados",
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
          <Card.Label>Joana, 22, Barueri - SP</Card.Label>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Text>
          <Card.Button>{info.buttonContent}</Card.Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Image src={info2.picture} alt={info2.altDescription} />
        <Card.Body>
          <Card.Label>Joana, 22, Barueri - SP</Card.Label>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Text>
          <Card.Button>{info2.buttonContent}</Card.Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Image src={info3.picture} alt={info3.altDescription} />
        <Card.Body>
          <Card.Label>Joana, 22, Barueri - SP</Card.Label>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Text>
          <Card.Button>{info3.buttonContent}</Card.Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Image src={info4.picture} alt={info4.altDescription} />
        <Card.Body>
          <Card.Label>Joana, 22, Barueri - SP</Card.Label>
          <Card.Label>$350</Card.Label>
          <Card.Button>{info4.buttonContent}</Card.Button>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Image src={info5.picture} alt={info5.altDescription} />
        <Card.Body>
          <Card.Label>Joana, 22, Barueri - SP</Card.Label>
          <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Card.Text>
          <Card.Button>{info5.buttonContent}</Card.Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}
export default App;
