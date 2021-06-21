import { render, screen } from '@testing-library/react'
import Alert from '@/components/Alert'

test("alert render data correctly", () => {
  const message = 'failed to load'
  render(<Alert message={message} type="warning" />)

  expect(screen.queryByText(message)).toBeTruthy()
})
