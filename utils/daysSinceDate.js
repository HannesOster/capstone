export default function daysSinceDate(date) {
  const now = new Date();
  const elapsedTime = now.getTime() - date.getTime();
  const elapsedDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
  return elapsedDays;
}
