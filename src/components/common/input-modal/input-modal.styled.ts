import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  background: var(--background);
  width: 800px;
  height: 800px;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 1200px) {
    width: 700px;
    height: 700px;
  }
`;

export const ModalContent = styled.div`
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background: var(--netral-100);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark, var(--primary));
  }
`;
export const Title = styled.div`
  margin: 0;
  color: var(--text);
  display: flex;
  justify-content: space-between;
  position: sticky;
  margin-bottom: 20px;
`;

export const IconClose = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: var(--netral-800);
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const Label = styled.label`
  color: var(--text);
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  background: var(--netral-100);

  :active {
    border: none;
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 0;
  margin-top: 4px;
  list-style: none;
  z-index: 10;
`;

export const SuggestionItem = styled.li`
  padding: 12px 16px;
  cursor: pointer;
  color: #333;
  transition: background 0.2s;
`;

export const CalendarIconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const DatePickerWrapper = styled.div`
  position: relative;
`;

export const DatePickerOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const DatePickerModal = styled.div`
  background: var(--background);
  border-radius: 12px;
  padding: 16px;
  width: auto;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  color: white;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MonthYearSelector = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
`;

export const CalendarNavButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const CalendarNavButton = styled.div`
  background: none;
  border: none;
  color: var(--text);
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background 0.2s;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: 16px;
`;

export const Days = styled.div`
  text-align: center;
  font-size: 12px;
  color: var(--text);
  padding: 8px 0;
`;

export const CalendarDay = styled.div<{
  $isSelected?: boolean;
  $isEmpty?: boolean;
  $isToday?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  border-radius: 50%;
  cursor: ${(props) => (props.$isEmpty ? "default" : "pointer")};
  color: ${(props) => (props.$isSelected ? "" : "var(--text)")};
  background: ${(props) => {
    if (props.$isEmpty) return "transparent";
    if (props.$isSelected) return "var(--primary)";
    if (props.$isToday) return "var(--netral-200)";
    return "transparent";
  }};
  transition: background 0.2s;

  &:hover {
    background: ${(props) => {
      if (props.$isEmpty) return "transparent";
      if (props.$isSelected) return "var(--primary)";
      return "var(--netral-200)";
    }};
  }
`;

export const TimeSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  padding: 12px;
  background: var(--primary-light);
  border-radius: 8px;
`;

export const TImeInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const TimeInput = styled.input`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  width: 50px;
  text-align: center;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* &[type=number] {
    -moz-appearance: textfield;
  } */
`;

export const TimeDot = styled.div`
  color: var(--text);
`;

export const CalendarActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const CalendarActionButton = styled.div`
  background: none;
  border: none;
  color: var(--text);
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  /* transition: background 0.2s; */

  &:hover {
    background: var(--primary-light);
  }
`;

export const TagWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 10px;
`;

export const TagItems = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 80px;
  min-height: 36px;
  padding: 8px 10px;
  background-color: ${(props) =>
    props.$isSelected ? "var(--primary)" : "var(--background)"};
  color: ${(props) => props.$isSelected ? "white" : "var(--text)"};
  border: ${(props) =>
    props.$isSelected ? "none" : "2px solid var(--netral-200)"} ;
  border-radius: 10px;
  cursor: pointer;
  /* transition: all 0.2s ease; */
  user-select: none;

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? "var(--primary)" : "var(--primary-light)"};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
  
`;

export const TagSelected = styled.div`
  margin-top: 8px;
  color: var(--text);
`;

export const DrinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const DrinkContent = styled.div`
  display: flex;
  gap: 10px;
`;

export const LabelDrink = styled.div`
  color: var(--text);
  margin-top: 10px;
`;

export const OrderSummaryWrapper = styled.div`
  background-color: var(--background);
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--netral-200);
  margin-top: 8px;
`;

export const OrderSummaryItem = styled.div<{ $isLast?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: ${(props) =>
    props.$isLast ? "none" : "1px solid var(--netral-200)"};
`;

export const OrderSummaryItemName = styled.div`
  color: var(--text);
  flex: 1;
`;

export const OrderSummaryItemPrice = styled.div`
  color: var(--text);
  font-weight: 600;
`;

export const OrderSummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0 4px 0;
  margin-top: 8px;
  border-top: 2px solid var(--netral-200);
`;

export const OrderSummaryTotalLabel = styled.div`
  color: var(--text);
  font-weight: 700;
`;

export const OrderSummaryTotalPrice = styled.div`
  color: var(--success);
  font-weight: 700;
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
`;

export const Quantity = styled.div`
  min-width: 20px;
  text-align: center;
`;

export const CountMinusButton = styled.div`
  color: white;
  border: none;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CountPlusButton = styled.div`
  color: white;
  border: none;
  border-radius: 4px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
