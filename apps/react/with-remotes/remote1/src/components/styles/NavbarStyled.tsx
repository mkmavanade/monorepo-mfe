import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-secondary-dark);
`;

export const Lista = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  color: var(--color-neutral-high);
  text-decoration: none;
  padding: 10px;
  list-style: none;
`;
