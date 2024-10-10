import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="remote1" /> */}

      <div>
        <h1>Teste REMOTE 1</h1>
        <button>Botão de apertar</button>
        <input type="text" />
      </div>
    </StyledApp>
  );
}

export default App;
