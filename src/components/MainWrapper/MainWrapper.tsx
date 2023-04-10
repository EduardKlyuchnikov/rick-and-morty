import { AutoAwesomeMosaic } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC, PropsWithChildren, memo, useState } from "react";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import Layout from "../Layout/Layout";
import { NavPanel } from "../NavPanel/NavPanel";

const MainWrapper: FC<PropsWithChildren> = memo((props) => {
  const { children } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Layout.Root>
        <Layout.Header>
          <IconButton
            color="primary"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { sm: "none" } }}
          >
            <AutoAwesomeMosaic />
          </IconButton>
          <ColorSchemeToggle />
        </Layout.Header>

        <Layout.SideNav>
          <NavPanel />
        </Layout.SideNav>

        <Layout.SideDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <NavPanel onClose={() => setDrawerOpen(false)} />
        </Layout.SideDrawer>

        <Layout.Main>{children}</Layout.Main>
      </Layout.Root>
    </>
  );
});

export default MainWrapper;
