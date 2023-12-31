import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Page from "../app/page"

describe("Home page", () => {
  it("renders a heading with the text \"gather here.\"", () => {
    render(<Page />)
    const heading = screen.getByRole("heading", { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("gather here.")
  });
  it("renders a paragraph with our mission statement", () => {
    render(<Page />)
    const paragraph = screen.getByText("a social network for forming local friendship groups based on shared interests")
    expect(paragraph).toBeInTheDocument()
  });
  it("renders buttons linking to /auth and /about", () => {
    render(<Page />)
    const buttons = screen.getAllByRole("button")
    expect(buttons[0]).toHaveTextContent("Sign Up")
    expect(buttons[1]).toHaveTextContent("Learn More")

    const links = screen.getAllByRole("link")
    expect(links[0]).toHaveAttribute("href", "/signup")
    expect(links[1]).toHaveAttribute("href", "/about")
  })
})