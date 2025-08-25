import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`

export const Badge = styled.div<{ status: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  width: fit-content;

  ${({ status }) => {
    switch (status) {
      case 'ready':
        return css`
          background-color: var(--success-light);
          color: var(--success-order);
        `
      case 'in-progress':
        return css`
          background-color: var(--card-bg);
          color: var(--text);
        `
      case 'completed':
        return css`
          background-color: var(--card-bg);
          color: var(--text);
        `
    }
  }}
`

export const Subtext = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;

  ${({ status }) => {
    switch (status) {
      case 'ready':
        return css`
          color: var(--netral-600);
        `
      case 'in-progress':
      case 'completed':
        return css`
          color: var(--netral-600);
        `
    }
  }}
`

export const Dot = styled.span<{ status: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;

  ${({ status }) => {
    switch (status) {
      case 'ready':
        return css`
          background-color: var(--success-dot);
        `
      case 'in-progress':
        return css`
          background-color: var(--dot);
        `
      case 'completed':
        return css`
          background-color: var(--dot);
        `
    }
  }}
`
