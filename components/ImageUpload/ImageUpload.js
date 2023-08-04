import Image from "next/image";
import { ImageContainer, Form, BrowseInput } from "./styles";
import { Button } from "../Buttons/styles";

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

      try {
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
            height={image.height / 3.5}
            width={image.width / 3.5}
            style={{ borderRadius: 15 }}
          />
        </ImageContainer>
      )}

      <Form onSubmit={(event) => submitImage(event, id)}>
        <BrowseInput type="file" name="file" />
        <Button size="m" variant="success" type="submit">
          Hochladen
        </Button>
      </Form>
    </>
  );
}
