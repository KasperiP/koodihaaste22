import { render } from "@testing-library/react";
import {
  RenderDishTags,
  RenderRestaurantTags,
} from "../../src/components/render-tags/RenderTags";
import { Dish } from "../../src/types/ApiReponses";

const commonFoodAttributes = {
  g: "Gluteeniton",
  l: "Laktoositon",
  m: "Maidoton",
  veg: "Vegaaninen",
  vl: "Vähälaktoosinen",
  k: "Kananmunaton",
  s: "Sianlihaton",
};

describe("RenderTags", () => {
  describe("RenderDishTags", () => {
    it("should render tags", () => {
      const tags = [...Object.keys(commonFoodAttributes), "invalidTag"];
      const { getByText, queryByText } = render(
        <RenderDishTags attributes={tags} />
      );

      tags.forEach((tag) => {
        if (tag.toLowerCase() in commonFoodAttributes) {
          const t = tag as keyof typeof commonFoodAttributes;
          expect(getByText(commonFoodAttributes[t])).toBeInTheDocument();
        }
      });

      const invalidTag = queryByText("invalidTag");
      expect(invalidTag).not.toBeInTheDocument();
    });
  });

  describe("RenderRestaurantTags", () => {
    it("should render tags", () => {
      const dishes: Dish[] = [
        {
          name: "Lihapullat",
          price: "10.00",
          attributes: ["vl", "g"],
        },
        {
          name: "Pasta Carbonara",
          price: "9.00",
          attributes: ["k", "l", "vl"],
        },
        {
          name: "Pasta Bolognese",
          price: "5.00",
          attributes: ["s"],
        },
      ];
      const { getByText, getAllByText } = render(
        <RenderRestaurantTags dishes={dishes} />
      );

      dishes.forEach((dish) => {
        dish.attributes.forEach((tag) => {
          const t = tag as keyof typeof commonFoodAttributes;
          expect(getByText(commonFoodAttributes[t])).toBeInTheDocument();
        });
      });

      expect(getAllByText("Vähälaktoosinen")).toHaveLength(1);
    });
  });
});
