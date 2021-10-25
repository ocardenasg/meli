import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--yellow);
  height: fit-content;
  width: 100%;
`

export const Content = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  width: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  height: 4rem;
`

export const Logo = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  max-width: 64px;
`

export const Search = styled.form`
  grid-column-start: 3;
  grid-column-end: 12;
  display: grid;
  grid-template-columns: auto 40px;
`

export const InputSearch = styled.input`
  background-color: var(--white);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-size: var(--font-18);
  border: none;
  padding: 0.5rem 1rem;
  outline: none;
  height: 40px;
  &::placeholder {
    color: var(--gray);
    font-size: var(--font-16);
  }
`

export const ButtonSearch = styled.button`
  background-color: var(--light);
  border-radius: var(--border-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  outline: none;
  width: 40px;
`
