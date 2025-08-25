import styled from "styled-components";

export const ContainerNavbar = styled.div`
  width: 100%;
  height: 76px;
  background: var(--background);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 32px;
  position: relative;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  display: flex;
  color: var(--text);
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Search = styled.div`
  width: 495px;
  height: 44px;
  background: var(--netral-100);
  border-radius: 8px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0 12px;
  color: var(--text);
  box-shadow: var(--shadow-sm);
  font-size: 14px;
  margin-left: 50px;

  @media (max-width: 1200px) {
    width: 390px;
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
