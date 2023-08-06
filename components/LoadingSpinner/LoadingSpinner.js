import { Spinner, SpinnerContainer } from "./styles";

export default function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <h1>Loading</h1>
      <Spinner />
    </SpinnerContainer>
  );
}
