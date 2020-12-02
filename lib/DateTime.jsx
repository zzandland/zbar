export default ({ datetimeInfo }) => {
  if (typeof datetimeInfo === "undefined") return null;
  return (
    <div>
      {datetimeInfo.date}
      &nbsp;
      {datetimeInfo.time}
    </div>
  );
};
