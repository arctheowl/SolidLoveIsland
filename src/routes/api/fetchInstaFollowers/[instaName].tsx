import { APIEvent, json } from "solid-start";

export async function GET({ params }: APIEvent) {
  let response = await fetch("https://www.instagram.com/mitcheltaylor_/?__a=1")
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      return json({ response: err });
    });
  return json({ response: response });
}
