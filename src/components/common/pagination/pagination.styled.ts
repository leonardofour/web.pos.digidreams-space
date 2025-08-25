import styled from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  max-width: 564px;
  margin: 0 auto;
`

export const PageButton = styled.button<{ $active: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
  background-color: ${({ $active }) => ($active ? 'var(--primary-pagination)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--pagination)' : 'var(--netral-600)')};
  cursor: pointer;
  font-family: var(--font-inter);

`

export const ArrowButton = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

`

export const Dots = styled.span`
  color: var(--netral-600);
`
