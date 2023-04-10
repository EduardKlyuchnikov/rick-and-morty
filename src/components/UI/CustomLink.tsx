import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const CustomLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  padding: "5px 10px",
  width: "100%",
  borderRadius: "8px",
  transition: "all .2s ease-in-out",
  ":hover": {
    background: theme.palette.action.hover,
  },
  ":active": {
    background: theme.palette.action.selected,
  },
}));

export { CustomLink };
