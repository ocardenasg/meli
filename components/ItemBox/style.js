import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 0;
  margin: 0 1rem;
  height: fit-content;
  border-bottom: 1px solid var(--light);
  display: grid;
  grid-template-columns: 180px auto 16%;
  grid-gap: 1rem;
`

export const Img = styled.div`
  height: 180px;
  position: relative;
  width: auto;
  background-color: var(--white);
  border-radius: 4px;
`
