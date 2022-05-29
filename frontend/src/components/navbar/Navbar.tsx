import { Box } from "@mui/material";
import Image from "next/image";

const Navbar = () => {
  return (
    <Box height={150} sx={{ position: "relative", mb: 2 }}>
      <Image
        alt="Lounastutka logo"
        layout="fill"
        loading="eager"
        objectFit="contain"
        src={"/logo.svg"}
        style={{
          filter:
            "drop-shadow(0px 1px 1px rgba(100, 116, 139, 0.06)) drop-shadow(0px 1px 2px rgba(100, 116, 139, 0.3))",
        }}
      />
    </Box>
  );
};

export default Navbar;
