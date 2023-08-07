import Counter from "./Counter";
import { CountersContainer } from "./styles";

function Counters({
  boxes,
  buckets,
  attachments,
  setBoxes,
  setBuckets,
  setAttachments,
}) {
  return (
    <section>
      <CountersContainer>
        {boxes.map((value, index) => (
          <Counter
            key={index}
            name={`Kisten ${index === 0 ? "geliefert:" : "zurück:"}`}
            value={value}
            onIncrement={() => {
              const boxesCopy = [...boxes];
              boxesCopy[index] += 1;
              setBoxes(boxesCopy);
            }}
            onDecrement={() => {
              const boxesCopy = [...boxes];
              boxesCopy[index] -= 1;
              setBoxes(boxesCopy);
            }}
          />
        ))}
      </CountersContainer>
      <CountersContainer>
        {buckets.map((value, index) => (
          <Counter
            key={index}
            name={`Eimer ${index === 0 ? "geliefert:" : "zurück:"}`}
            value={value}
            onIncrement={() => {
              const bucketsCopy = [...buckets];
              bucketsCopy[index] += 1;
              setBuckets(bucketsCopy);
            }}
            onDecrement={() => {
              const bucketsCopy = [...buckets];
              bucketsCopy[index] -= 1;
              setBuckets(bucketsCopy);
            }}
          />
        ))}
      </CountersContainer>
      <CountersContainer>
        {attachments.map((value, index) => (
          <Counter
            key={index}
            name={`Aufsätze ${index === 0 ? "geliefert:" : "zurück:"}`}
            value={value}
            onIncrement={() => {
              const attachmentsCopy = [...attachments];
              attachmentsCopy[index] += 1;
              setAttachments(attachmentsCopy);
            }}
            onDecrement={() => {
              const attachmentsCopy = [...attachments];
              attachmentsCopy[index] -= 1;
              setAttachments(attachmentsCopy);
            }}
          />
        ))}
      </CountersContainer>
    </section>
  );
}

export default Counters;
