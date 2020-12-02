export default ({ batteryInfo }) => {
  let charging = batteryInfo.charging;
  let percentage = batteryInfo.percentage;

  return (
    <div>
      <div
        style={
          percentage < 10 && charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
        <span>{charging ? <i class="fas fa-bolt"></i>: null} {percentage}%</span>
      </div>
    </div>
  );
};
