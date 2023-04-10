import { FC } from "react";
import { Character } from "../../types";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

interface CharacterCardProps extends Character {}

const CharacterCard: FC<CharacterCardProps> = (props) => {
  const { gender, image, location, name, species, status, type, episode } =
    props;
  return (
    <Card sx={{ height: "100%" }}>
      <CardMedia component="img" image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Gender: {gender}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Species: {species}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Status: {status}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Location: {location.name} 
          {type} : {type}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
