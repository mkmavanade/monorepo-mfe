import { useNavigate } from 'react-router-dom';

import { ButtonStyled } from './styles/ButtonStyled';

export function WarningButtonComponent({ label }: { label: string }) {
  return (
    <ButtonStyled
      className='warning'
    >
      {label}
    </ButtonStyled>
  );
};

export function SucessButtonComponent({ label }: { label: string }) {
  return (
    <ButtonStyled
      type='submit'
      className='success'
    >
      {label}
    </ButtonStyled>
  );
};

export function DangerButtonComponent({ label }: { label: string }) {
  return (
    <ButtonStyled
      className='danger'
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
