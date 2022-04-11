import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  border: 5px solid;
  max-width: 500px;
  border-radius: 12px;
  height: 450px;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
  height: calc(450px - 240px);
  overflow: hidden;
  display: block;
  margin: 0 auto;
`;

export const Label = styled.span`
  padding: 8px;
  color: #cecece;
  text-decoration: wavy;
  background-color: blue;
  font-weight: 600;
`;

export const Text = styled.div`
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.8rem;
  background-color: violet;
  color: white;
  height: 100px;
`;

export const Button = styled.button`
  border: 0;
  padding: 12px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 24px;
  height: 80px;

  color: black;
  background-color: pink;
  outline: none;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 9px #999;

  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`
