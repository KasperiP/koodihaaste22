import { Chip, Typography } from "@mui/material";
import { Dish } from "../../types/ApiReponses";

const commonFoodAttributes = {
  g: "Gluteeniton",
  l: "Laktoositon",
  m: "Maidoton",
  veg: "Vegaaninen",
  vl: "Vähälaktoosinen",
  k: "Kananmunaton",
  s: "Sianlihaton",
};

const formatTag = (tag: string) => {
  // Check if tag is a food attribute
  if (tag.toLowerCase() in commonFoodAttributes) {
    return commonFoodAttributes[
      tag.toLowerCase() as keyof typeof commonFoodAttributes
    ];
  }
};

interface RenderRestaurantTagsProps {
  dishes: Dish[];
}

export const RenderRestaurantTags = ({ dishes }: RenderRestaurantTagsProps) => {
  const uniqueAttributes = new Set<string>();

  dishes.forEach((dish) => {
    dish.attributes.forEach((attribute) => {
      const tag = formatTag(attribute);
      tag && uniqueAttributes.add(tag);
    });
  });

  //
  // Typescript ei tykkää [...set].map joten
  // söpö pirkka fixaus.
  //
  const attributesArray = Array.from(uniqueAttributes);

  if (attributesArray.length === 0) {
    return <Typography variant="body1">Ei lisätietoja</Typography>;
  }

  return (
    <>
      {attributesArray.map((attribute) => (
        <Chip key={attribute} color="primary" label={attribute} />
      ))}
    </>
  );
};

interface RenderDishTagsProps {
  attributes: string[];
}

export const RenderDishTags = ({ attributes }: RenderDishTagsProps) => {
  const uniqueAttributes = new Set<string>();

  attributes.forEach((attr) => {
    const tag = formatTag(attr);
    tag && uniqueAttributes.add(tag);
  });

  //
  // Typescript ei tykkää [...set].map joten
  // söpö pirkka fixaus.
  //
  const attributesArray = Array.from(uniqueAttributes);

  if (attributesArray.length === 0) {
    return <Typography variant="body1">Ei lisätietoja</Typography>;
  }

  return (
    <>
      {attributesArray.map((attribute) => {
        return <Chip key={attribute} color="primary" label={attribute} />;
      })}
    </>
  );
};
