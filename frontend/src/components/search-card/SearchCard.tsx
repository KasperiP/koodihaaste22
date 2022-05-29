import RestaurantIcon from "@mui/icons-material/Restaurant";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  CardContent,
  Grid,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SyntheticEvent, useContext, useState } from "react";
import { VoteContext } from "../../context/ContextProvider";
import fetcher from "../../fetcher";
import {
  ApiResultsCityResponse,
  ApiResultsReponse,
  Restaurant,
} from "../../types/ApiReponses";
import cities from "../../utils/finlandCities";
import { formatOpeningHours } from "../../utils/functions";
import LunchlistModal from "../lunchlist-modal/LunchlistModal";
import { RenderRestaurantTags } from "../render-tags/RenderTags";

const boxStyles = {
  height: "100%",
  p: 3,
  background: "#f5f5f5",
  borderRadius: 2,
  pb: 15,
  position: "relative",
  transition: "transform 0.2s ease-in-out",
  boxShadow:
    "0px 1px 1px rgba(100, 116, 139, 0.06),0px 1px 2px rgba(100, 116, 139, 0.1)",
  "&:hover": {
    transform: "translateY(-4px)",
  },
};

interface SearchCardProps {
  handleVote: (restaurantId: string) => void;
  result: ApiResultsReponse | undefined;
}

const SearchCard = ({ handleVote, result }: SearchCardProps) => {
  const globalState = useContext(VoteContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [cityInput, setCityInput] = useState<string>("");
  const [filterResults, setFilterResults] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalRestaurant, setModalRestaurant] = useState<Restaurant | null>(
    null
  );

  //
  // Käyttäjät voivat hakea myös kaupungeista, joita
  // ei ole "finlandCities" listassa. Tämä siksi, koska
  // huomasin listasta puuttuvan joitakin kaupunkeja, enkä
  // tähän hätään löytänyt mitään pommminvarmaa listaa.
  //
  const handleSearch = async (value: string) => {
    if (value.length < 2) {
      setErrorMsg("Kirjoita kaupunki");
      return;
    }

    //
    // Tallennetaan käyttäjän syöttämä kaupunki
    // global stateen, jotta kaupunki ei häviä
    // syötekentästä jos käy kurkkaamassa tuloksia.
    //
    globalState?.setCity(value);

    try {
      const res = await fetcher<ApiResultsCityResponse>(
        `/api/v1/restaurants/${value}`
      );
      globalState?.setResults(res);
    } catch (error) {
      setErrorMsg("Ravintoloiden haku epäonnistui");
      console.log(error);
    }
  };

  //
  // Ravintolan dish lista on yleensä tyhjä, mutta joissakin
  // tapauksissa siellä on yksi alkio, jonka nimi on tyhjä.
  // Tämä ongelma on korjattu alhaalla.
  //
  const handleDisabled = (
    dishes: ApiResultsCityResponse["restaurants"][number]["dishes"]
  ) => {
    return dishes.length === 0 || dishes[0].name === "";
  };

  const handleModal = (
    restaurant: ApiResultsCityResponse["restaurants"][number]
  ) => {
    const bool = !openModal;
    setOpenModal(bool);
    setModalRestaurant(restaurant);
  };

  //
  // Huomasin että viikonloppuna lähes jokainen ravintola ilmoittaa
  // openingHours-arvoksi "ei lounasta", joten tässä filtteröidään
  // ns "turhat" raflat pois, koska kuka nyt haluaa lounastaa
  // paikassa, jossa ei ole lounasta???
  //
  const getResults = () => {
    const results = globalState?.results?.restaurants;
    if (!results) return [];
    if (filterResults) {
      return results.filter((r) => r.openingHours === "ei lounasta");
    } else {
      return results;
    }
  };

  const filteredCount = (): number => {
    const results = globalState?.results?.restaurants;
    if (!results) return 0;

    const filteredResults = results?.filter(
      (r) => r?.openingHours === "ei lounasta"
    );

    const filteredResultsExist = results?.length !== filteredResults?.length;

    if (filteredResultsExist) {
      return results.length - filteredResults.length;
    }
    return 0;
  };

  //
  // Huomasin, että viikonloppuna lounastiedot ovat melko puutteelliset
  // joten käyttäjää kehotetaan tarkistamaan tietojen paikkaansapitävyys
  // ravintolan omilta verkkosivuilta.
  //
  const isWeekend = (): boolean => {
    const today = new Date();
    const day = today.getDay();
    return day === 6 || day === 0;
  };

  return (
    <>
      <CardContent>
        <LunchlistModal
          open={openModal}
          restaurant={modalRestaurant}
          setOpen={setOpenModal}
        />
        <Typography sx={{ my: 3 }} variant="h2">
          Hae kaupunki
        </Typography>
        {isWeekend() && globalState?.weekendWarning && (
          <Alert
            severity="error"
            sx={{ mb: 3 }}
            onClose={() => globalState?.setWeekendWarning(false)}
          >
            Viikonloppu voi vaikuttaa tulosten paikkaansapitävyyteen! Tarkista
            tiedot ravintolan omilta verkkosivuilta.
          </Alert>
        )}
        <Box
          component={"form"}
          sx={{
            display: "flex",
            alignItems: "center",
            maxWidth: isMobile ? "auto" : "40rem",
            gap: 1,
            flexDirection: isMobile ? "column" : "row",
          }}
          onSubmit={(e: SyntheticEvent) => {
            e.preventDefault();
            handleSearch(cityInput);
          }}
        >
          <Autocomplete
            id="city-autocomplete"
            inputValue={cityInput}
            options={cityInput.length >= 2 ? cities : []}
            renderInput={(params) => (
              <TextField
                error={errorMsg ? true : false}
                {...params}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  endAdornment: <TrackChangesIcon sx={{ color: "#65748B" }} />,
                }}
                helperText={errorMsg ? errorMsg : ""}
                label="Hae kaupunkia"
              />
            )}
            sx={{ width: "100%" }}
            value={globalState?.city}
            disableClearable
            freeSolo
            onChange={(_: any, newCity: string) => {
              handleSearch(newCity);
            }}
            onInputChange={(_: any, newInputValue: string) => {
              setCityInput(newInputValue);
              setErrorMsg("");
            }}
          />

          <Button
            sx={
              errorMsg
                ? {
                    mb: 3,
                    whiteSpace: "nowrap",
                    height: isMobile ? "auto" : "56px",
                    width: isMobile ? "100%" : "auto",
                  }
                : {
                    whiteSpace: "nowrap",
                    height: isMobile ? "auto" : "56px",
                    width: isMobile ? "100%" : "auto",
                  }
            }
            type="submit"
            variant="contained"
          >
            Hae ravintolat
          </Button>
        </Box>

        {globalState?.results && (
          <Box
            sx={{
              display: "flex",
              alignItems: isMobile ? "left" : "center",
              justifyContent: "space-between",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <Typography sx={{ mt: 2 }} variant="body1">
              <strong>Hakutuloksia:</strong>{" "}
              {
                globalState.results.restaurants?.filter(
                  (r) => r?.openingHours === "ei lounasta"
                ).length
              }
            </Typography>
            {filteredCount() > 0 && (
              <>
                {filterResults ? (
                  <Tooltip
                    placement="bottom"
                    title="Näyttää myös ravintolat, jotka ovat ilmoittaneet ettei lounasta ole saatavilla."
                  >
                    <Typography
                      sx={{ mt: 2, cursor: "pointer" }}
                      variant="body2"
                      onClick={() => setFilterResults(false)}
                    >
                      Näytä virheelliset hakutulokset (
                      <strong>{filteredCount()}</strong>)
                    </Typography>
                  </Tooltip>
                ) : (
                  <Tooltip
                    placement="bottom"
                    title="Piilottaa ravintolat, jotka ovat ilmoittaneet ettei lounasta ole saatavilla."
                  >
                    <Typography
                      sx={{ mt: 2, cursor: "pointer" }}
                      variant="body2"
                      onClick={() => setFilterResults(true)}
                    >
                      Piilota vihreelliset hakutulokset (
                      <strong>{filteredCount()}</strong>)
                    </Typography>
                  </Tooltip>
                )}
              </>
            )}
          </Box>
        )}
        <Grid spacing={2} sx={{ mt: 0 }} container>
          {globalState?.results &&
            getResults().map((restaurant) => (
              <Grid key={restaurant.id} lg={4} md={6} sm={6} xs={12} item>
                <Box sx={boxStyles}>
                  <Box
                    sx={{
                      gap: 3,
                      flexDirection: "column",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                      <span
                        style={{
                          background: theme.palette.primary.main,
                          borderRadius: "50%",
                          padding: 8,
                          display: "flex",
                        }}
                      >
                        <RestaurantIcon sx={{ color: "white" }} />
                      </span>

                      <Typography component="h2" variant="h6">
                        {restaurant.name}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        <strong>Äänet tänään:</strong>
                      </Typography>
                      <Typography variant="body1">
                        {result
                          ? result?.results?.find(
                              (r) => r.name === restaurant.name
                            )?.votes || "Ei ääniä"
                          : "Ei ääniä"}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        <strong>Avoinna:</strong>
                      </Typography>
                      <Typography variant="body1">
                        {restaurant.openingHours
                          ? formatOpeningHours(restaurant.openingHours)
                          : "Ei tiedossa"}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ mb: 0.5 }} variant="body1">
                        <strong>Lisätiedot:</strong>
                      </Typography>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <RenderRestaurantTags dishes={restaurant.dishes} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        display: "flex",
                        gap: 1,
                        flexDirection: "column",
                      }}
                    >
                      <Button
                        color="primary"
                        disabled={handleDisabled(restaurant.dishes)}
                        onClick={() => handleModal(restaurant)}
                      >
                        {handleDisabled(restaurant.dishes)
                          ? "Ei lounaslistaa saatavilla"
                          : "Näytä lounaslista"}
                      </Button>
                      {globalState?.votedRestaurant === restaurant.id ? (
                        <>
                          <Button
                            color="secondary"
                            variant="contained"
                            onClick={() => handleVote(restaurant.id)}
                          >
                            Poista äänesi
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            onClick={() => handleVote(restaurant.id)}
                          >
                            Äänestä ravintolaa
                          </Button>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
        </Grid>
      </CardContent>
    </>
  );
};

export default SearchCard;
