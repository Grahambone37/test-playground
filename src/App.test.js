/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import App from './App'

test("will h1 render with correct text", () => {
  render(<App />)

  let headerEI = screen.getByRole('heading')
  expect(headerEI.textContent).toBe("Testing Playground")
})

describe('test for the button', () => {
  test("button background-color is correct",() => {
    render(<App />)
    let buttonInQuestion = screen.getByRole('button')
    
    act(() => {
      userEvent.click(buttonInQuestion)
    })
    
    expect(buttonInQuestion).toHaveStyle(` background-color: blue `)
    expect(buttonInQuestion.textContent).toBe('Change button color to green')
  })
})