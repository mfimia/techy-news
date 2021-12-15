import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

const NewsItem = ({ entry }) => {
  const { points, author, title, url, num_comments } = entry;
  return (
    <ListItem>
      <ListItemText
        primary={
          <Tooltip
            enterDelay={500}
            TransitionComponent={Zoom}
            title={url}
            arrow
          >
            <Link underline="none" href={url}>
              <Typography
                component="span"
                color={url ? "primary" : "secondary"}
              >
                {title}
              </Typography>
            </Link>
          </Tooltip>
        }
        secondary={
          <Typography color="text.secondary" variant="body2">
            <Typography sx={{ fontSize: 14 }} component="span">
              {`${points} point${points === 1 ? "" : "s"} by `}
            </Typography>
            <Typography
              component="span"
              sx={{ fontStyle: "italic", fontSize: 14 }}
            >
              {author}
            </Typography>
            <Typography sx={{ fontSize: 14 }} component="span">
              {` | ${num_comments} comments`}
            </Typography>
          </Typography>
        }
      ></ListItemText>
    </ListItem>
  );
};

export default NewsItem;
