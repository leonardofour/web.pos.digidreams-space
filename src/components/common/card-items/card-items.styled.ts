import styled from "styled-components";

export const Card = styled.div`
  background: var(--background);
  border-radius: 16px;
  overflow: hidden;
  max-width: 255px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 150px;
  width: 223px;
  overflow: hidden;
  margin: 16px auto;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
    object-fit: cover;
    position: absolute;
  }
`;

export const TagContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 18px;
  display: flex;
  gap: 8px;
  width: 190px;
  height: 32px;
`;

export const Tag = styled.div<{ type: "popular" | "discount" }>`
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 4px;
  width: ${(props) => (props.type === "popular" ? "87px" : "95px")};
  height: auto;
  color: var(--toggle);
  background: ${(props) =>
    props.type === "popular" ? "var(--warning-tag)" : "var(--danger-tag)"};

  img.star {
    width: 16px;
    height: 16px;
    left: 10px;
  }
  img.shoptag {
    width: 16px;
    height: 16px;
    left: 105px;
  }
`;

export const Content = styled.div`
  padding: 16px;
`;

export const Title = styled.div`
  margin: 0 0 8px 0;
  color: var(--text);
`;

export const Description = styled.div`
  margin: 0 0 16px 0;
  color: var(--netral-600);
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const Price = styled.div`
  color: var(--dot);
  display: flex;
  flex-direction: row;
  position: relative;

  .prices {
    padding-left: 8px;
  }

  span {
    font-size: 12px;
    bottom: 3px;
    left: 0;
    position: absolute;
  }
`;

export const OriginalPrice = styled.div`
  color: var(--text-muted);
  text-decoration: line-through;
  position: relative;
  top: 5px;

  .prices {
    padding-left: 6px;
  }

  span {
    text-decoration: none;
    font-size: 9px;
    bottom: 3px;
    left: 0;
    position: absolute;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10.5px;
  /* max-width: 99px; */
`;

export const QuantityButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  background: var(--primary-pagination);
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const DecrementButton = styled(QuantityButton)`
  background: var(--card-bg);
`;

export const Quantity = styled.div`
  color: var(--text);
`
