export interface ApiResultsReponse {
  date: string;
  results: Result[];
}

export interface Result {
  votes: number;
  restaurantid: string;
  name: string;
  city: string;
}

export interface Dish {
  name: string;
  price: string;
  attributes: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  openingHours: string;
  votes: number;
  dishes: Dish[];
}

export interface ApiResultsCityResponse {
  alreadyVoted: string;
  date: string;
  restaurants: Restaurant[];
}
