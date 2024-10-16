import { FooterStyled } from './styles/FooterStyled';
import { TitleH1 } from "./styles/TitleStyled";

export function FooterComponent({ title }: { title: string }) {
  return (
    <FooterStyled>
      <TitleH1>{title}</TitleH1>
    </FooterStyled>
  );
};

export default FooterComponent;