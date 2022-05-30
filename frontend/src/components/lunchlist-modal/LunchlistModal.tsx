import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import { Restaurant } from "../../types/ApiReponses";
import { RenderDishTags } from "../render-tags/RenderTags";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  maxWidth: "95%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  maxHeight: "90%",
};

interface LunchlistModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  restaurant: Restaurant | null;
}

const LunchlistModal = ({ open, setOpen, restaurant }: LunchlistModalProps) => {
  if (!restaurant) return null;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-describedby="Näyttää ravintolan lounaslistan."
      aria-labelledby="Lounaslista modaali"
      open={open}
      onClose={handleClose}
    >
      <Card sx={style}>
        <CardHeader
          subheader={`Tässä näet ravintolan ${restaurant.name} lounasvaihtoehdot.`}
          title="Lounaslista"
        />
        <Divider />
        <CardContent sx={{ maxHeight: "30rem", overflowY: "scroll" }}>
          {restaurant.dishes.length && restaurant.dishes.length > 0 ? (
            <>
              {restaurant.dishes.map((dish) => (
                <Box
                  key={dish.name}
                  sx={{ display: "flex", flexDirection: "column", mt: 2 }}
                >
                  <Typography>{dish.name}</Typography>
                  <Typography sx={{ my: 0.5 }}>
                    {dish.price || "Ei hintaa"}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      mb: 2,
                      flexFlow: "row wrap",
                    }}
                  >
                    <RenderDishTags attributes={dish.attributes} />
                  </Box>
                  <Divider />
                </Box>
              ))}
            </>
          ) : (
            <>
              <Typography variant="h6" gutterBottom>
                Ei lounaslistaa saatavilla
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Modal>
  );
};

export default LunchlistModal;
