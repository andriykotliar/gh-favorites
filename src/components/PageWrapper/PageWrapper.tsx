import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box component="article" py={5}>
      {children}
    </Box>
  );
};

export { PageWrapper };