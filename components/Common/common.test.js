import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ArrowRight, Button, Container, Content, Page, Text } from './style'

test('Component <ArrowRight />', () => {
  const component = render(<ArrowRight />)
  expect(component).toBeDefined()
})

test('Component <Button />', () => {
  const component = render(<Button />)
  expect(component).toBeDefined()
})

test('Component <Container />', () => {
  const text = 'This is text test'
  const props = {
    end: 2,
    margin: '1rem',
    padding: '1rem',
    start: 1,
  }

  const component = render(<Container {...props}>{text}</Container>)
  const renderComponent = component.getByText(text)
  expect(renderComponent).toHaveStyle('grid-column-start: 1')
  expect(renderComponent).toHaveStyle('grid-column-end: 2')
  expect(renderComponent).toHaveStyle('padding: 1rem')
  expect(renderComponent).toHaveStyle('margin: 1rem')
})

test('Component <Content />', () => {
  const text = 'This is text test'
  const props = { columns: 20 }

  const component = render(<Content {...props}>{text}</Content>)
  const renderComponent = component.getByText(text)
  expect(renderComponent).toHaveStyle('grid-column-end: 12')
  expect(renderComponent).toHaveStyle('grid-column-start: 2')
  expect(renderComponent).toHaveStyle('grid-template-columns: repeat(20,1fr)')
})

test('Component <Page />', () => {
  const text = 'This is text test'
  const props = { margin: '1rem' }

  const component = render(<Page {...props}>{text}</Page>)
  const renderComponent = component.getByText(text)
  expect(renderComponent).toHaveStyle('margin: 1rem')
  expect(renderComponent).toHaveStyle('grid-template-columns: repeat(12,1fr)')
})

test('Component <Text />', () => {
  const text = 'This is text test'
  const props = {
    margin: '1rem',
    padding: '1rem',
  }

  const component = render(<Text {...props}>{text}</Text>)
  const renderComponent = component.getByText(text)
  expect(renderComponent).toHaveStyle('margin: 1rem')
  expect(renderComponent).toHaveStyle('padding: 1rem')
})
