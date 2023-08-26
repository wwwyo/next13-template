import { render, screen } from '@testing-library/react'

import { Button } from '.'

test('renders Button component', () => {
  render(<Button onClick={() => undefined} />)

  expect(screen.getByRole('button')).toBeInTheDocument()
})
