import { ArrowBack } from "@mui/icons-material";
import { Box, BoxProps, Drawer, DrawerProps, IconButton } from "@mui/material";
import { FC, PropsWithChildren } from "react";

const Root: FC<BoxProps> = (props) => {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 1fr) minmax(1fr, 1fr)",
          },
          gridTemplateRows: "64px 1fr",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

const Header: FC<BoxProps> = (props) => {
  return (
    <Box
      component="header"
      {...props}
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "pallete.divider",
          "backdrop-filter": "blur(4px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

const SideNav: FC<BoxProps> = (props) => {
  return (
    <Box
      component="nav"
      {...props}
      sx={[
        {
          p: 2,
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            sm: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
};

const Main: FC<BoxProps> = (props) => {
  return (
    <Box
      component="main"
      {...props}
      sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
    />
  );
};

interface SideDrawerProps extends DrawerProps {
  onClose: () => void;
  isOpen: boolean;
}

const SideDrawer: FC<PropsWithChildren<SideDrawerProps>> = (props) => {
  const { onClose, children, isOpen } = props;
  return (
    <Drawer
      PaperProps={{ sx: { width: "320px" } }}
      open={isOpen}
      onClose={onClose}
    >
      <IconButton onClick={onClose}>
        <ArrowBack />
      </IconButton>
      {children}
    </Drawer>
  );
};

export default {
  Root,
  Header,
  SideNav,
  SideDrawer,
  Main,
};
