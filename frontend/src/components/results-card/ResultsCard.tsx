import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  Box,
  Button,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { VoteContext } from "../../context/ContextProvider";
import { ApiResultsReponse } from "../../types/ApiReponses";

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

interface ResultsCardProps {
  result: ApiResultsReponse | undefined;
  handleVote: (restaurantId: string) => void;
}

const ResultsCard = ({ result, handleVote }: ResultsCardProps) => {
  const globalState = useContext(VoteContext);
  const theme = useTheme();

  return (
    <>
      <CardContent>
        <Typography sx={{ my: 3 }} variant="h2">
          Äänestystulokset
        </Typography>
        <Grid spacing={2} sx={{ mt: 0 }} container>
          {result && (
            <>
              {result.results.length > 0 ? (
                result.results
                  .sort((a, b) => b.votes - a.votes)
                  .map((restaurant) => (
                    <Grid
                      key={restaurant.restaurantid}
                      lg={4}
                      md={6}
                      sm={6}
                      xs={12}
                      item
                    >
                      <Box sx={boxStyles}>
                        <Box
                          sx={{
                            gap: 3,
                            flexDirection: "column",
                            display: "flex",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              gap: 1,
                              alignItems: "center",
                            }}
                          >
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
                              {restaurant.votes}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography sx={{ mb: 0.5 }} variant="body1">
                              <strong>Kaupunki:</strong>
                            </Typography>
                            <Typography variant="body1">
                              {restaurant.city}
                            </Typography>
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
                            {globalState?.votedRestaurant ===
                            restaurant.restaurantid ? (
                              <>
                                <Button
                                  color="secondary"
                                  variant="contained"
                                  onClick={() =>
                                    handleVote(restaurant.restaurantid)
                                  }
                                >
                                  Poista äänesi
                                </Button>
                              </>
                            ) : (
                              <>
                                <Button
                                  variant="contained"
                                  onClick={() => {
                                    handleVote(restaurant.restaurantid);
                                  }}
                                >
                                  Äänestä ravintolaa
                                </Button>
                              </>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                  ))
              ) : (
                <b style={{ marginLeft: "16px" }}>
                  Yhtään ääntä ei ole vielä annettu :(
                </b>
              )}
            </>
          )}
        </Grid>
      </CardContent>
    </>
  );
};

export default ResultsCard;
