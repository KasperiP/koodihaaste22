import { render, screen } from "@testing-library/react";
import Home from "../../src/pages/index";

describe("Index page", () => {
  beforeEach(() => {
    render(<Home />);
  });
  it("should render the index page without errors", async () => {
    expect(screen.getByText("Lounastutka")).toBeInTheDocument();
    expect(screen.getByText("Hae kaupunki")).toBeInTheDocument();
    expect(screen.getByText("Äänestä ravintolaa")).toBeInTheDocument();
  });
});
