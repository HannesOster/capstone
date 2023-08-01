import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";

export default function Upload() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  async function submitImage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch("/api/upload", {
        method: "post",
        body: formData,
      });

      console.log("Browser: response from API: ", img);

      setImage(img);
    } catch (error) {
      setError(error);
    }
  }

  return (
    <>
      {image && (
        <ImageContainer>
          <Image
            src={image.url}
            alt="Uploaded image"
            layout="responsive"
            height={image.height}
            width={image.width}
          />
        </ImageContainer>
      )}
      {error && <div>{error.message}</div>}
      <Form onSubmit={submitImage}>
        <input type="file" name="file" />
        <button type="submit">Upload</button>
      </Form>
    </>
  );
}

const Form = styled.form`
  max-width: 20rem;
  margin-bottom: 200px;
`;

const ImageContainer = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  border: 2px solid grey;
  border-radius: 1rem;
  padding: 1rem;
`;
