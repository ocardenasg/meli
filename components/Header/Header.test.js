import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as nextRouter from 'next/router'
import Header from '.'

const search = 'ipod'
const mockHandler = jest.fn()

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({
  query: { search },
  push: mockHandler,
}))

test('Component <Header />', () => {
  const component = render(<Header />)
  expect(component).toBeDefined()

  const form = component.container.querySelector('form')
  const button = component.container.querySelector('button')

  fireEvent.submit(form)
  fireEvent.click(button)

  expect(mockHandler.mock.calls).toHaveLength(2)
})
