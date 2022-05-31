import SearchCard from "@components/search-card/SearchCard";
import ContextProvider from "@context/ContextProvider";
import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { DefaultBodyType, rest } from "msw";
import { setupServer } from "msw/node";
import { act } from "react-dom/test-utils";

const server = setupServer(
  rest.get<DefaultBodyType>("/api/v1/restaurants/helsinki", (req, res, ctx) => {
    return res(
      ctx.json({
        alreadyVoted: null,
        date: "2022-05-30",
        restaurants: [
          {
            id: "a6f64b57271dd2136233fb30de065f86cba24622a78fe77cc2da7547ed535513",
            name: "NOM Helsinki",
            openingHours: "11-13:30",
            votes: 0,
            dishes: [],
          },
          {
            id: "9591d73811b571c61edfcac6d7dcfe85b123431c30c2dd357070ad1f12855b03",
            name: "Woolshed Helsinki",
            openingHours: "",
            votes: 1,
            dishes: [
              {
                name: "ALA CARTE Burgers, Steaks, Salads",
                price: "",
                attributes: [],
              },
            ],
          },
          {
            id: "7bfcc015049e2ab7b5a16966098378f7ca3b5f6ad3be72a25f9d42b5212d04ae",
            name: "Hard Rock Cafe Helsinki",
            openingHours: "11-14",
            votes: 0,
            dishes: [],
          },
          {
            id: "4327d80596984898dfd6f18902f3f7ce2e4ae6a07b49f2681ca01158b3de003d",
            name: "Friends & Brgrs Helsinki",
            openingHours: "11-15",
            votes: 0,
            dishes: [],
          },
          {
            id: "d7483076ad646dda43c0afa1c127f5c7f7b2ec4b6e1b051ab8732b74d81b543f",
            name: "The Glass Helsinki",
            openingHours: "11-14",
            votes: 0,
            dishes: [],
          },
          {
            id: "6a8a12b84a2781df8bc63291e7695ae07c3bf3918cc5154748d78b3842cd3b86",
            name: "Armas Helsinki",
            openingHours: "11-14:30",
            votes: 0,
            dishes: [],
          },
          {
            id: "a7aa86a63dc935a3a2824b74e9132013e5c24441e561e0be7baa7c59ab192220",
            name: "Starter Helsinki",
            openingHours: "11-15",
            votes: 0,
            dishes: [
              {
                name: "12,50€",
                price: "",
                attributes: [],
              },
            ],
          },
          {
            id: "7359852aa38629938f6b0b1bb1ba5be1d7a6becb36d3ad943d750d961a95d9c9",
            name: "Konttiravintola Morton Helsinki",
            openingHours: "10:30-14",
            votes: 0,
            dishes: [
              {
                name: "Delaware Burger -ateria vl",
                price: "12,90e",
                attributes: ["vl"],
              },
              {
                name: "Elisabethin salaatti g l",
                price: "12,90e",
                attributes: ["g", "l"],
              },
              {
                name: "Päivän burgeriateria tai salaatti 12,90€. Päivän burgeri 11,90€ . Lasten lounasateria 6,90€.",
                price: "",
                attributes: [],
              },
              {
                name: "Myös Mortonin pannarimenu saatavilla koko päivän hintaan 16,90€!",
                price: "",
                attributes: [],
              },
              {
                name: "Syö paikan päällä tai nouda mukaan Emme valitettavasti ota pöytävarauksia tai ennakkotilauksia, mutta pöytä löytyy usein nopeasti. Tervetuloa lounaalle!",
                price: "",
                attributes: [],
              },
            ],
          },
          {
            id: "34d58ee1d14b8d1bf3c9f63de61b90497bc06baca40bf54e8f04d6e4009f2f72",
            name: "Holiday Inn Helsinki West Ruoholahti Open Lobby",
            openingHours: "ei lounasta",
            votes: 0,
            dishes: [
              {
                name: "",
                price: "",
                attributes: [],
              },
            ],
          },
          {
            id: "32f525b80be2d63e6d568afb4e90f31b04e0fd7e84dca7a3f142aaf9b753a443",
            name: "Grillsson Helsinki",
            openingHours: "11-14",
            votes: 0,
            dishes: [],
          },
          {
            id: "f8341c1b719417c1dc13edc0b611d98dec74bcec0a5759a3c9ad10164a1159cb",
            name: "PhoHelsinki",
            openingHours: "11-15",
            votes: 0,
            dishes: [
              {
                name: "Tauolla! Pysykää kuulolla seuratkaa fb!",
                price: "",
                attributes: [],
              },
              {
                name: "Pho-lihanuudelikeitto",
                price: "",
                attributes: [],
              },
            ],
          },
          {
            id: "fe7301e4b39223a356dc3acced049344f7626b164402981fd45ac77f91f45f1c",
            name: "Factory Helsinki-Tali",
            openingHours: "10-14",
            votes: 0,
            dishes: [
              {
                name: "Basilika-tomaattikeitto l g",
                price: "",
                attributes: ["l", "g"],
              },
              {
                name: "Paistettua lohta bearnaisekastikkeessa l g keitetyt perunat m + g",
                price: "",
                attributes: ["l", "g", "m", "g"],
              },
              {
                name: "Mozzarella-pepperoni-punasipulipizza vl kevätsipuli m + g",
                price: "",
                attributes: ["vl", "m", "g"],
              },
              {
                name: "Falafelpyörykät ve+vs tzatziki l g vs",
                price: "",
                attributes: ["l", "g"],
              },
              {
                name: "Raparperipiirakkaa l vaniljakastike l g",
                price: "",
                attributes: ["l", "l", "g"],
              },
            ],
          },
          {
            id: "6dc4fcf420a5683854b44de9b811b602241fc6a86896e39ba5432d2a388a8824",
            name: "Antell K-Auto Helsinki",
            openingHours: "10:30-13",
            votes: 0,
            dishes: [
              {
                name: "Lounasbuffet",
                price: "11,10e",
                attributes: [],
              },
              {
                name: "Jälkiruoka",
                price: "1,50e",
                attributes: [],
              },
            ],
          },
        ],
      })
    );
  }),
  rest.get<DefaultBodyType>("/api/v1/restaurants/:any", (req, res, ctx) => {
    return res(
      ctx.json({
        alreadyVoted: null,
        date: "2022-05-30",
        restaurants: [],
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("SearchCard", () => {
  let handleVote: any;
  let results: any;
  beforeAll(() => {
    handleVote = jest.fn();
    results = {
      date: "2022-05-30",
      results: [
        {
          votes: 10,
          restaurantid:
            "9591d73811b571c61edfcac6d7dcfe85b123431c30c2dd357070ad1f12855b03",
          name: "Woolshed Helsinki",
          city: "Helsinki",
        },
      ],
    };
  });

  it("should render SearchCard without crashing", () => {
    const { getByText } = render(
      <SearchCard handleVote={handleVote} result={results} />
    );
    expect(getByText("Hae ravintolat")).toBeInTheDocument();
    expect(getByText("Hae kaupunki")).toBeInTheDocument();
  });

  it("input should error", async () => {
    const { getByLabelText, getByRole, getByText } = render(
      <SearchCard handleVote={handleVote} result={results} />
    );
    const input = getByLabelText("Hae kaupunkia");
    await user.type(input, "a");

    const button = getByRole("button", {
      name: /hae ravintolat/i,
    });
    await user.click(button);

    expect(getByText("Kirjoita kaupunki")).toBeInTheDocument();
  });

  it("shouldn't find results", async () => {
    const { getByLabelText, getByRole, getByTestId } = render(
      <ContextProvider>
        <SearchCard handleVote={handleVote} result={results} />
      </ContextProvider>
    );
    const input = getByLabelText("Hae kaupunkia");
    const button = getByRole("button", {
      name: /hae ravintolat/i,
    });

    await act(async () => {
      await user.type(input, "helsinkii");
      await user.click(button);
      await new Promise((r) => setTimeout(r, 500));
    });

    expect(getByTestId("result-text")).toHaveTextContent("Hakutuloksia: 0");
  });

  it("should render results", async () => {
    const { getByLabelText, getByRole, getByText } = render(
      <ContextProvider>
        <SearchCard handleVote={handleVote} result={results} />
      </ContextProvider>
    );
    const input = getByLabelText("Hae kaupunkia");
    const button = getByRole("button", {
      name: /hae ravintolat/i,
    });

    await act(async () => {
      await user.type(input, "HeLsInKi");
      await user.click(button);
      await new Promise((r) => setTimeout(r, 500));
    });

    expect(getByText("NOM Helsinki")).toBeInTheDocument();
    expect(getByText("Antell K-Auto Helsinki")).toBeInTheDocument();
  });
});
