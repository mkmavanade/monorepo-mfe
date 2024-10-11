import { useNavigate } from 'react-router-dom';

import { ButtonStyled } from './styles/ButtonStyled';

export function WarningButtonComponent({ label }: { label: string }) {
  let navigate = useNavigate()

  let gotToNewPage = () => {
    navigate('/');
  }

  return (
    <ButtonStyled
      className='warning'
      onClick={() => gotToNewPage()}
    >
      {label}
    </ButtonStyled>
  );
};

export function SucessButtonComponent({ label }: { label: string }) {
  let navigate = useNavigate()

  let gotToNewPage=()=>{
    navigate('/blogs');
  }

  return (
    <ButtonStyled
      className='success'
      onClick={() => gotToNewPage()}
    >
      {label}
    </ButtonStyled>
  );
};

export function DangerButtonComponent({ label }: { label: string }) {
  let navigate = useNavigate()

  let gotToNewPage = () => {
    navigate('/contact');
}

  return (
    <ButtonStyled
      className='danger'
      onClick={() => gotToNewPage()}
    >
      {label}
    </ButtonStyled>
  );
};

export default { 
  WarningButtonComponent, 
  SucessButtonComponent, 
  DangerButtonComponent
};
