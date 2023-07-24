import React, { useState } from "react";
import Counter from "./Counter";
import styled from "styled-components";

const CountersContainer = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  border: 3px solid black;
  padding: 10px;
`;

function Counters() {
  const [boxes, setBoxes] = useState([0, 0]);
  const [buckets, setBuckets] = useState([0, 0]);

  return (
    <div>
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
    </div>
  );
}

export default Counters;
