import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background: var(--color-dark-blue);
  color: var(--color-white);
  position: absolute;
  top: 0;
  right: 0;
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  margin-top: 80px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
  svg {
    color: var(--color-white);
    font-size: 30px;
  }
`;