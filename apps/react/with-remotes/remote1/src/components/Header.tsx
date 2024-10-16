import { HeaderStyled } from './styles/HeaderStyled';
import { TitleH1 } from './styles/TitleStyled';

export function HeaderComponent({ title }: { title: string }) {
  return (
    <HeaderStyled>
      <TitleH1>{title}</TitleH1>
    </HeaderStyled>
  );
};

export default HeaderComponent;