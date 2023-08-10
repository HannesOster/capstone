export default function formatTimestamp(timestamp) {
  if (!timestamp) {
    return "";
  }
  const date = new Date(timestamp);
  if (isNaN(date)) {
    return "";
  }
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour12: true,
  };
  return date.toLocaleString("de-DE", options);
}
