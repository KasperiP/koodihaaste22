import { render } from "@testing-library/react";
import ResultsCard from "../../src/components/results-card/ResultsCard";
import { ApiResultsReponse } from "../../src/types/ApiReponses";

describe("ResultsCard", () => {
  let result: ApiResultsReponse;
  let handleVote: (restaurantId: string) => void;

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
        {
          votes: 5,
          restaurantid:
            "f8341c1b719417c1dc13edc0b611d98dec74bcec0a5759a3c9ad10164a1159cb",
          name: "PhoHelsinki",
          city: "Helsinki",
        },
      ],
    };
    handleVote = jest.fn();
  });

  it("should render results", () => {
    const { getByText, queryAllByText } = render(
      <ResultsCard handleVote={handleVote} result={result} />
    );

    result.results.forEach((restaurant) => {
      expect(getByText(restaurant.name)).toBeInTheDocument();
      expect(queryAllByText(restaurant.city)).toHaveLength(3);
    });
  });

  it("should render results in correct order", () => {
    const { baseElement } = render(
      <ResultsCard handleVote={handleVote} result={result} />
    );

    const sortedOrder = result.results.sort((a, b) => b.votes - a.votes);

    baseElement.querySelectorAll("h2").forEach((e, index) => {
      // Ensimmäinen h2 on äänestystulokset.
      if (index === 0) return;
      expect(e.textContent).toBe(sortedOrder[index - 1].name);
    });
  });
});
