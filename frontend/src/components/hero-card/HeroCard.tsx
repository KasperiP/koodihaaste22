import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Link from "next/link";

interface HeroCardProps {
  setTab: (tab: number) => void;
}

const HeroCard = ({ setTab }: HeroCardProps) => {
  const handleButton = (btn: "vote" | "results") => {
    const element = document.getElementById("content-area");

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    btn === "vote" ? setTab(0) : setTab(1);
  };

  return (
    <Card sx={{ height: "100%", py: 2, background: "secondary" }}>
      <CardContent>
        <Typography variant="h1">Lounastutka</Typography>
        <Typography sx={{ py: 2 }} variant="body1">
          Onko työ- tai kaveriporukassa epäselvyyksiä mihin tänään mennään
          lounaalle? Lounastutka on lounaspaikkaäänestykseen tehty sovellus,
          jonka avulla päivän ravintola valintaan puhtaasti demokratian keinoin!
          Hae omaa paikkakuntaasi hakupalkista ja äänestä päivän ravintolaa.
          Eniten ääniä saanut ravintola tulee valituksi, eikä tarvitse
          kinastella mitä tänään syötäisiin. Lounastutka on tehty osana{" "}
          <b>
            <Link href="https://koodihaaste.solidabis.com/">
              Solidabis koodihaaste 2022-kilpailua
            </Link>
          </b>
          -kilpailua.
        </Typography>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Button variant="contained" onClick={() => handleButton("vote")}>
            Äänestä ravintolaa
          </Button>
          <Button variant="outlined" onClick={() => handleButton("results")}>
            Katso tulokset
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
