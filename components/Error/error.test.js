import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Error from '.'

test('Component <Error />', () => {
  const text = 'Ops... algo salió mal, intenta nuevamente'
  const component = render(<Error />)
  const renderComponent = component.getByText(text)

  expect(component).toBeDefined()
  expect(renderComponent).toHaveTextContent(text)
})
