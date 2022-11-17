import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  min-height: 800px;
  height: auto;
  background-color: ${({ theme }) => theme.styles.colors.white.background};

  padding-top: 150px;
  position: relative;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1500px;
  height: calc(100% - 150px);

  background-color: blue;
`;

export const NavBar = styled.div`
  width: 100%;
  max-width: 1500px;

  height: 150px;

  position: absolute;
  background-color: red;

  top: 0;
`;
