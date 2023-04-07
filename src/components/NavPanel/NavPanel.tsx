import { List, ListItem } from "@mui/material";
import { FC, MouseEvent } from "react";
import { CustomLink } from "../UI/CustomLink";



interface NavPanel {
  onClose?: () => void;
}

const NavPanel: FC<NavPanel> = (props) => {
  const { onClose } = props;
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClose && onClose();
  };
  return (
    <List>
      <ListItem disablePadding>
        <CustomLink onClick={onClick} to="/">
          Characters
        </CustomLink>
      </ListItem>
      <ListItem disablePadding>
        <CustomLink
          style={{ textDecoration: "none" }}
          onClick={onClick}
          to="/episodes"
        >
          Episodes
        </CustomLink>
      </ListItem>
      <ListItem disablePadding>
        <CustomLink onClick={onClick} to="/locations">
          Locations
        </CustomLink>
      </ListItem>
    </List>
  );
};
export { NavPanel };
