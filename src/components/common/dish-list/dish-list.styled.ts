import styled from "styled-components";

export const DishListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  max-width: 600px;
`;

export const DishItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
`;

export const DishNumber = styled.div`
  color: var(--text);
  min-width: 32px;
  text-align: center;

  .no {
    @media (min-width: 1440px) {
      font-size: 14px;
    }
  }
`;

export const DishImage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  border: none;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const DishContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const DishName = styled.div`
  color: var(--text);
  margin: 0;

  .name {
    @media (min-width: 1440px) {
      font-size: 14px;
    }
  }
`;

export const DishMeta = styled.div`
  color: var(--netral-600);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 5px;

  .order {
    color: var(--text);
    @media (min-width: 1440px) {
      font-size: 12px;
    }
  }
`;

export const AvailableTime = styled.span<{ $isAvailable: boolean }>`
  color: var(--text);
`;
