const NewsItem = ({ entry }) => {
  return (
    <div className="news--entry">
      <h4>
        <a href={entry.url}>{entry.title}</a>
      </h4>
      <p>
        {entry.points} points by {entry.author}
      </p>
    </div>
  );
};

export default NewsItem;
