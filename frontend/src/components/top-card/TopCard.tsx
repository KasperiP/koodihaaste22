import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Card, CardContent, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { ApiResultsReponse } from "../../types/ApiReponses";

interface TopCardProps {
  placement: 1 | 2 | 3;
  result: ApiResultsReponse | undefined;
}

const TopCard = ({ placement, result }: TopCardProps) => {
  const theme = useTheme();

  const top = result?.results.sort((a, b) => b.votes - a.votes);

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
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
            <EmojiEventsIcon sx={{ color: "white" }} />
          </span>

          <Typography component="h2" data-testid="top-city" variant="h6">
            {top?.[placement - 1]?.name ?? "N/A"}
          </Typography>
        </Box>
        <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
          <Typography data-testid="top-placement">
            <strong>Sijalla:</strong> #{placement}
          </Typography>
          <Typography data-testid="top-votes">
            <strong>Äänet:</strong> {top?.[placement - 1]?.votes ?? 0}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TopCard;
