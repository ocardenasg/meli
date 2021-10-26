import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import * as nextRouter from 'next/router'
import ItemBox from '.'

nextRouter.useRouter = jest.fn()
nextRouter.useRouter.mockImplementation(() => ({
  query: {
    search: 'ipod',
  },
}))

test('Component <ItemBox/>', () => {
  const props = {
    id: 'TEST_ID',
    title: 'Test title',
    thumbnail:
      'https://http2.mlstatic.com/D_958403-MLA42268792349_062020-O.jpg&w=3840&q=100',
    sellerState: 'Buenos Aires',
    formattedPrice: '$1.000',
    hasFreeShipping: false,
  }
  const component = render(<ItemBox {...props} />)

  component.getByText(props.title)
  component.getByAltText(props.title)
  component.getByText(props.sellerState)
  component.getByText(props.formattedPrice)

  expect(component).toBeDefined()
})
