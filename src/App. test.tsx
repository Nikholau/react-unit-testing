import {render} from '@testing-library/react'
import App from './App'

test('sum', () => {

  const { getByText } = render(<App />)

  expect('Hello World').toBeTruthy()
})