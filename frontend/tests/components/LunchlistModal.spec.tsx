import LunchlistModal from "@components/lunchlist-modal/LunchlistModal";
import { render } from "@testing-library/react";
import { Restaurant } from "../../src/types/ApiReponses";

interface LunchlistModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  restaurant: Restaurant;
}

describe("LunchlistModal", () => {
  let props1: LunchlistModalProps;
  let props2: LunchlistModalProps;
  beforeEach(() => {
    props1 = {
      open: true,
      setOpen: jest.fn(),
      restaurant: {
        id: "a6f64b57271dd2136233fb30de065f86cba24622a78fe77cc2da7547ed535513",
        name: "NOM Helsinki",
        openingHours: "10-14",
        votes: 0,
        dishes: [
          {
            name: "Maissipaputärkkelys",
            price: "11.90€",
            attributes: ["G", "L", "M", "VEG", "VEG", "VEEG"],
          },
        ],
      },
    };
    props2 = {
      open: true,
      setOpen: jest.fn(),
      restaurant: {
        id: "a6f64b57271dd2136233fb30de065f86cba24622a78fe77cc2da7547ed535513",
        name: "Friends & Brgrs Helsinki",
        openingHours: "10-14",
        votes: 0,
        dishes: [],
      },
    };
  });

  it("should render NOM Helsinki", () => {
    const { getByText, getAllByText, queryByText } = render(
      <LunchlistModal {...props1} />
    );
    const restaurantName = props1.restaurant?.name;
    const dishName = props1.restaurant?.dishes[0]?.name;

    if (!restaurantName || !dishName) {
      fail("invalid restaurant or dish mock data");
    }

    expect(
      getByText(`Tässä näet ravintolan ${restaurantName} lounasvaihtoehdot.`)
    ).toBeInTheDocument();

    expect(getByText(dishName)).toBeInTheDocument();
    expect(getByText("Gluteeniton")).toBeInTheDocument();
    expect(getByText("Maidoton")).toBeInTheDocument();
    expect(getByText("Vegaaninen")).toBeInTheDocument();
    expect(getByText("Laktoositon")).toBeInTheDocument();
    expect(getAllByText("Vegaaninen")).toHaveLength(1);

    const invalidTag = queryByText("VEEG");
    expect(invalidTag).not.toBeInTheDocument();
  });

  it("should render Friends & Brgrs Helsinki", () => {
    const { getByText } = render(<LunchlistModal {...props2} />);
    expect(getByText("Ei lounaslistaa saatavilla")).toBeInTheDocument();
  });
});
