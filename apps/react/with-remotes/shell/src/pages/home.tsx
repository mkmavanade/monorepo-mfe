import { useLocation } from 'react-router-dom'

import { 
  TitleH1,
  Text
} from 'remote1/Module';

export function Home() {
  const location  = useLocation();
  const user_info = location.state.user
  return (
    <div>
      <TitleH1>Usuário Logado</TitleH1>
      <Text><strong>Nome:</strong> {user_info.name} {user_info.lastname}</Text>
      <Text><strong>E-mail:</strong> {user_info.email}</Text>
      <Text><strong>Escola:</strong> {user_info.schoolname} </Text>
    </div>
  );
}

export default Home;
