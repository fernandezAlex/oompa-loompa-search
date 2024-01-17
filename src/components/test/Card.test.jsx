import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Card } from "../Card";

describe("Card", () => {
  it("renders the card with the correct information", () => {
    render(
      <BrowserRouter>
        <Card
          image="test-image.jpg"
          firstName="Charlie"
          gender="M"
          profession="Chocolate Tester"
          id={1}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Charlie")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Chocolate Tester")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: /illustration of oompa loompa charlie/i })
    ).toHaveAttribute("src", "test-image.jpg");
  });
});
