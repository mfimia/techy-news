import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, Typography } from "@mui/material";
import { Fragment } from "react";

const NewsItem = ({ entry }) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Link underline="none" href={entry.url}>
            {entry.title}
          </Link>
        }
        secondary={
          <Typography color="text.secondary" variant="body2">
            <Typography
              sx={{ display: "inline" }}
            >{`${entry.points} points by `}</Typography>
            <Typography sx={{ fontStyle: "italic", display: "inline" }}>
              {entry.author}
            </Typography>
          </Typography>
        }
      ></ListItemText>
    </ListItem>
  );
};

export default NewsItem;
