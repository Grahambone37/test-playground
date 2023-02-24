/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import App from './App'

test("will h1 render with correct text", () => {
  render(<App />)

  let headerEI = screen.getByRole('heading', {name: /Testing Playground/i})
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

describe('test for the checkbox', () => {
  test("checkbox should disable button when clicked", () => {
    render(<App />)
    let theBtn = screen.getByRole('button')
    let checkBox = screen.getByRole('checkbox')

    act(() => {
      userEvent.click(checkBox)
    })

    expect(theBtn).toBeDisabled()

    act(() => {
      userEvent.click(checkBox)
    })

    expect(theBtn).toBeEnabled()
  })
})

describe('is the text changing with the button', () => {
  test('text changes if button is disabled', () => {
    render(<App />)
    let subText = screen.getByRole('heading', { name: /Button is/i })
    let checkBox = screen.getByRole('checkbox')

    act(() => {
      userEvent.click(checkBox)
    })

    expect(subText.textContent).toBe('Button is disabled')

    act(() => {
      userEvent.click(checkBox)
    })

    expect(subText.textContent).toBe('Button is enabled')
  })
})
