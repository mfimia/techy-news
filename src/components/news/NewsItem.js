import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, Typography } from "@mui/material";

const NewsItem = ({ entry }) => {
  const { points, author, title, url, num_comments } = entry;
  return (
    <ListItem>
      <ListItemText
        primary={
          <Link underline="none" href={url}>
            {title}
          </Link>
        }
        secondary={
          <Typography color="text.secondary" variant="body2">
            <Typography component="span">{`${points} point${
              points === 1 ? "" : "s"
            } by `}</Typography>
            <Typography component="span" sx={{ fontStyle: "italic" }}>
              {author}
            </Typography>
            <Typography component="span">{` | ${num_comments} comments`}</Typography>
          </Typography>
        }
      ></ListItemText>
    </ListItem>
  );
};

export default NewsItem;
