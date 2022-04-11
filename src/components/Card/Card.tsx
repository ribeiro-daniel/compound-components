import { ImgHTMLAttributes } from "react";
import { CardContext } from "./CardContext";
import { Body, Button, Container, Image, Label, Text } from "./styles";

type CardProps = {
  children: React.ReactNode;
};

type CardButtonProps = {
  children: React.ReactNode;
};

type CardImageProps = ImgHTMLAttributes<HTMLImageElement>;

type CardTextProps = {
  children: React.ReactNode;
};

type CardLabelProps = {
  children: React.ReactNode;
};

type CardBodyProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps): JSX.Element => {
  return (
    <CardContext.Provider value={{}}>
      <Container>{children}</Container>
    </CardContext.Provider>
  );
};

const CardButton = ({ children }: CardButtonProps): JSX.Element => {
  
  return <Button>{children}</Button>;
};

const CardImage = (props: CardImageProps): JSX.Element => {
  return <Image {...props} />;
};

const CardLabel = ({ children }: CardLabelProps): JSX.Element => {
  return <Label>{children}</Label>;
};

const CardText = ({ children }: CardTextProps): JSX.Element => {
  return <Text>{children}</Text>;
};

const CardBody = ({ children }: CardBodyProps) => {
  return <Body>{children}</Body>;
};

Card.Image = CardImage;
Card.Label = CardLabel;
Card.Text = CardText;
Card.Button = CardButton;
Card.Body = CardBody;
export default Card;
