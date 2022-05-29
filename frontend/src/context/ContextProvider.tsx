import { createContext, ReactNode, useState } from "react";
import { ApiResultsCityResponse } from "../types/ApiReponses";

//
// Tämä perus context API ei ole siistein eikä
// paras mahdollinen työkalu tähän hommaan, mutta
// hoitaa asiansa paremmin kuin hyvin tämän skaalan
// projektissa :)
//
export interface ContextType {
  votedRestaurant: string | null;
  setVotedRestaurant: (restaurant: string | null) => void;
  city: string;
  setCity: (city: string) => void;
  results: ApiResultsCityResponse | null;
  setResults: (results: ApiResultsCityResponse | null) => void;
  weekendWarning: boolean;
  setWeekendWarning: (warning: boolean) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const VoteContext = createContext<ContextType | null>(null);

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [votedRestaurant, setVotedRestaurant] = useState<string | null>(null);
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ApiResultsCityResponse | null>(null);
  const [weekendWarning, setWeekendWarning] = useState(true);

  const globalState: ContextType = {
    votedRestaurant,
    setVotedRestaurant,
    city,
    setCity,
    results,
    setResults,
    weekendWarning,
    setWeekendWarning,
  };

  return (
    <VoteContext.Provider value={globalState}>{children}</VoteContext.Provider>
  );
};

export default ContextProvider;
