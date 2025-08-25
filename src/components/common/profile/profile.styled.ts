import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: var(--background);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* transition: background-color 0.2s; */

  @media (max-width: 1200px) {
    padding: 8px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;

    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  text-align: left;
`;

export const Name = styled.div`
  margin: 0;
  color: var(--text);
`;

export const Role = styled.div`
  margin: 2px 0 0;
  color: var(--netral-600);
`;

export const DropdownCard = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin: 8px;
  width: 280px;
  background: var(--background);
  border-radius: 12px;
  box-shadow: 0 4px 16px var(--netral-200);
  z-index: 9999;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TimeSection = styled.div`
  padding: 16px 20px;
  display: flex;
  gap: 20px;
  background: var(--netral-100);
  margin: 16px;
  border-radius: 12px;
  margin-top: 16px;
`;

export const TimeItem = styled.div`
  flex: 1;
  text-align: center;
`;

export const TimeLabel = styled.div`
  margin: 0 0 4px;
  color: var(--netral-600);
`;

export const TimeValue = styled.div`
  margin: 0;
  color: var(--text);
`;

export const MenuSection = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Line = styled.div`
  border-top: 1px solid var(--netral-200);
  border-radius: 50%;
  margin: 0 20px;
`;

export const MenuItem = styled.button`
  width: 100%;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text);
  /* transition: background-color 0.2s; */

  &:hover {
    background: var(--netral-100);
  }

  span {
    flex: 1;
    text-align: left;
  }
`;
