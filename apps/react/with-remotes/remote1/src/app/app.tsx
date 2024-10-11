import styled from 'styled-components';
import './App.css';
import { HeaderComponent } from '../components/Header'
import { FooterComponent } from '../components/Footer'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <HeaderComponent title='Teste Header Remote 1' />
      <div>
        <h1>Teste REMOTE 1</h1>
        <button>Botão de apertar</button>
        <input type="text" />
      </div>
      <FooterComponent title='Teste Footer Remote 1' />
    </StyledApp>
  );
}

export default App;
