import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid component={"footer"} sx={{ pt: 4, pb: 6 }} container>
      <Grid
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
        }}
        xs={12}
        item
      >
        <div
          style={{
            position: "relative",
            height: 80,
            display: "flex",
            justifyContent: isMobile ? "center" : "left",
            textAlign: isMobile ? "center" : "left",
            width: "auto",
          }}
        >
          <Image
            alt="Lounastutka logo"
            height={80}
            src="/logo.svg"
            width={200}
          />
        </div>
        <Typography variant="body2">
          Lounastutka on lounaspaikkaäänestykseen tehty sovellus, jonka avulla
          päivän ravintola valintaan puhtaasti demokratian keinoin! Lounastutka
          on tehty osana{" "}
          <b>
            <Link href="https://koodihaaste.solidabis.com/">
              Solidabis koodihaaste 2022-kilpailua
            </Link>
          </b>
          .
          <i>
            {" "}
            Psst: Kuulin taikasanasta &quot;<strong>Henri Lehtinen</strong>
            &quot;, jolla saa jonkinlaisia säälipisteitä, joten lunastan ne
            tässä :D
          </i>
        </Typography>
      </Grid>
      <Grid
        md={6}
        sx={{ textAlign: isMobile ? "center" : "right" }}
        xs={12}
        item
      >
        <Typography sx={{ pt: "80px" }} variant="body2">
          Toteuttanut: <strong>Kasperi &quot;kassq&quot; Pohtinen</strong>
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            justifyContent: isMobile ? "center" : "right",
            mt: 1,
          }}
        >
          <Link href="https://github.com/KasperiP">
            <a target="_blank">
              <GitHubIcon />
            </a>
          </Link>
          <Link href="https://twitter.com/KPohtinen">
            <a target="_blank">
              <TwitterIcon />
            </a>
          </Link>
          <Link href="https://www.kassq.dev">
            <a target="_blank">
              <LanguageIcon />
            </a>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
