const formatTime = (time: string): string => {
  let formatted = "";
  formatted = time.includes(":")
    ? (formatted = `${time}`)
    : (formatted = `${time}:00`);
  return formatted;
};

export const formatOpeningHours = (openingHours: string): string => {
  const openingHoursArray = openingHours.split("-");
  if (openingHoursArray.length !== 2) {
    return "Ei tiedossa";
  }

  const [open, close] = openingHoursArray;

  //
  // API palauttaa aikoja vaikka minkälaisissa muodoissa
  // joten tässä vähän siistitään aika merkkijonoa, jotta
  // näyttää yhdenmukaiselta.
  //
  if (!open || !close) return "Ei tiedossa";

  return `${formatTime(open)}-${formatTime(close)}`;
};
