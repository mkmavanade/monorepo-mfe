import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  font-size: var(--font-button);

  &.success {
    background-color: var(--color-suport-focus-medium);
    color: var(--color-neutral-high);
  }
  
  &.warning {
    background-color: var(--color-alert);
    color: var(--color-neutral-high);
  }
  
  &.danger {
    background-color: var(--color-warning);
    color: var(--color-neutral-high);
  }
`
