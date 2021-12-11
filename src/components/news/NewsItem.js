import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";

const NewsItem = ({ entry }) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <Link underline="none" href={entry.url}>
            {entry.title}
          </Link>
        }
        secondary={`${entry.points} points by ${entry.author}`}
      ></ListItemText>
    </ListItem>
  );
};

export default NewsItem;
