import TopCard from "@components/top-card/TopCard";
import { render } from "@testing-library/react";

describe("TopCard", () => {
  let result: any;
  beforeEach(() => {
    result = {
      date: "2022-05-29",
      results: [
        {
          votes: 1,
          restaurantid:
            "d7483076ad646dda43c0afa1c127f5c7f7b2ec4b6e1b051ab8732b74d81b543f",
          name: "The Glass Helsinki",
          city: "Helsinki",
        },
        {
          votes: 10,
          restaurantid:
            "6a8a12b84a2781df8bc63291e7695ae07c3bf3918cc5154748d78b3842cd3b86",
          name: "Armas Helsinki",
          city: "Helsinki",
        },
      ],
    };
  });

  it("should render armas helsinki", () => {
    const { getByTestId } = render(<TopCard placement={1} result={result} />);
    expect(getByTestId("top-placement")).toHaveTextContent("Sijalla: #1");
    expect(getByTestId("top-votes")).toHaveTextContent("Äänet: 10");
    expect(getByTestId("top-city")).toHaveTextContent("Helsinki");
  });

  it("shouldn't have 3rd place", () => {
    const { getByTestId } = render(<TopCard placement={3} result={result} />);
    expect(getByTestId("top-city")).toHaveTextContent("N/A");
    expect(getByTestId("top-placement")).toHaveTextContent("Sijalla: #3");
  });
});
