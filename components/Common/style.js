import styled from 'styled-components'

const fontSizes = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  24: '24px',
  28: '28px',
  46: '46px',
}

export const Page = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  margin: ${({ margin }) => margin || '1rem auto'};
  max-width: var(--max-width);
  width: 100%;
`

export const Content = styled.article`
  background-color: ${({ bg }) => (bg && `var(--${bg})`) || 'var(--white)'};
  border-radius: var(--border-radius);
  display: grid;
  grid-column-start: 2;
  grid-column-end: 12;
  grid-gap: 1rem;
  grid-template-columns: repeat(${({ columns }) => columns || 1}, 1fr);
`

export const Container = styled.div`
  grid-column-end: ${({ end }) => end};
  grid-column-start: ${({ start }) => start};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  position: relative;
  width: ${({ width }) => width};
`

export const Text = styled.p`
  color: ${({ color }) => (color && `var(--${color})`) || 'var(--black)'};
  font-size: ${({ size }) => fontSizes[size]};
  font-weight: ${({ weight }) => weight || 'normal'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  text-align: ${({ align }) => align || 'left'};
  white-space: pre-line;
`

export const Button = styled.button`
  background-color: var(--blue);
  border: none;
  border-radius: var(--border-radius);
  color: var(--white);
  cursor: pointer;
  font-size: ${fontSizes[16]};
  height: 2.5rem;
  width: 100%;
`

export const ArrowRight = styled.i`
  border: solid var(--gray);
  border-width: 0 2px 2px 0;
  display: inline-block;
  margin: 0 0.5rem;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`

export const Loading = styled.div`
  display: block;
  width: 80px;
  height: 80px;
  margin: 3rem auto;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #ffe600;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #ffe600 transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
