import { APIEvent, json } from "solid-start";

export async function GET({ params }: APIEvent) {
  const data = await fetch(
    `https://www.instagram.com/mitcheltaylor_/?__a=1`
  ).then((data) => {
    console.log(data);
  });
  return json({ response: params.instaName });
}
