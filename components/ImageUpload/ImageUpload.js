import Image from "next/image";
import styled from "styled-components";
import { GreenButton } from "../Buttons/styles";

export default function Upload({ id, customer, mutate }) {
  async function submitImage(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });

      const img = await response.json();

      const { secure_url, width, height } = img;
      console.log("Browser: response from API: ", img);
      try {
        console.log(id);
        const response = await fetch(`/api/customers/${id}`, {
          method: "PATCH",
          body: JSON.stringify({
            image: { url: secure_url, width: width, height: height },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        mutate();
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  const { image } = customer;
  return (
    <>
      {image && (
        <ImageContainer>
          <Image
            src={image.url}
            alt="Uploaded image"
            height={image.height / 2}
            width={image.width / 2}
            style={{ borderRadius: 15 }}
          />
        </ImageContainer>
      )}

      <Form onSubmit={(event) => submitImage(event, id)}>
        <input type="file" name="file" />
        <GreenButton type="submit">Hochladen</GreenButton>
      </Form>
    </>
  );
}

const Form = styled.form`
  margin-bottom: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const ImageContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  border: 2px solid grey;
  border-radius: 1rem;
  padding: 1rem;
`;
