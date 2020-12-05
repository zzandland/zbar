import DateTime from "./lib/DateTime.jsx";
import Battery from "./lib/Battery.jsx";
import Error from "./lib/Error.jsx";
import parse from "./lib/parse.jsx";
import styles from "./lib/styles.jsx";

export const refreshFrequency = 10000;

export const command = "./zbar/scripts/status.sh";

const style = {
  display: "grid",
  padding: "1px 20px 0 0",
  gridAutoFlow: "column",
  gridGap: "30px",
  position: "fixed",
  overflow: "hidden",
  right: "0px",
  top: "0px",
  color: styles.colors.dim,
  fontFamily: styles.fontFamily,
  fontSize: styles.fontSize,
  lineHeight: styles.lineHeight,
  fontWeight: styles.fontWeight
};

export const render = ({ output }) => {
  const data = parse(output);
  if (typeof data === "undefined") {
    return (
      <div style={style}>
        <Error msg="Error: unknown script output" side="right" />
      </div>
    );
  }
  return (
    <div style={style}>
      <Battery batteryInfo={data.battery} />
      <DateTime datetimeInfo={data.datetime} />
    </div>
  );
};

export default null;
