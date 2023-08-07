import Image from "next/image";
import { ImageContainer, Form, BrowseInput, CameraIcon } from "./styles";

async function submitImage(event, id, mutate) {
  event.preventDefault();
  const formData = new FormData();
  const createDate = Date.now();
  formData.append("file", event.target.files[0], createDate);
  formData.append("name", createDate);
  formData.append("public_id,", createDate);

  try {
    const response = await fetch("/api/upload", {
      method: "post",
      body: formData,
    });

    const img = await response.json();

    const { secure_url, width, height } = img;

    try {
      await fetch(`/api/customers/${id}`, {
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
export default function Upload({ id, customer, mutate }) {
  const { image } = customer;
  return (
    <>
      {image ? (
        <ImageContainer>
          <Image
            src={image.url}
            alt="Uploaded image"
            height={image.height > image.width ? 300 : 230}
            width={image.height > image.width ? 230 : 300}
            style={{ borderRadius: 15 }}
          />
        </ImageContainer>
      ) : (
        <p>Kein Foto vorhanden. Bitte Hinzufügen!</p>
      )}
      <label htmlFor="camera">
        <CameraIcon />
      </label>
      <BrowseInput
        type="file"
        accepnt="image/*"
        name="file"
        id="camera"
        onChange={(event) => submitImage(event, id, mutate)}
      />
    </>
  );
}
