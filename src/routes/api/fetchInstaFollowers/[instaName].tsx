import { APIEvent, json } from "solid-start";

export async function GET({ params }: APIEvent) {
  const options = {
    method: "GET",
    headers: {
      cookie:
        "mid=ZIW5IwAEAAESQn7x5y6NFOjeedtS; ig_did=B01FE5AC-CF76-4202-A276-45864A7F173D; ig_nrcb=1; csrftoken=vVoIK6lESWngWwBN8SLKNio2GaUgnV7E",
    },
  };

  fetch("https://www.instagram.com/mitcheltaylor_/?__a=1", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return json({ response: params.instaName });
}
