import { Show } from "solid-js";
import data from "/data/2023/ContestantList.json";
import { AiOutlineTwitter } from "solid-icons/ai";
import { FaBrandsTiktok, FaBrandsInstagram } from "solid-icons/fa";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
  main: boolean;
};

const Bio = (props: Props) => {
  if (props.main == true) {
    return (
      <>
        {data.map((contestant: any) => {
          if (contestant.name == props.selection()) {
            return (
              <div class="border-4 md:w-[40%] rounded-md md:absolute md:top-10 md:left-10 p-4 bg-[#fdf5df]">
                <h1 class="text-2xl font-bold text-center">Contestant</h1>
                <img
                  class={`rounded-lg border-2 p-1  block ${
                    contestant.gender == "guy" ? "bg-[#5ebec4]" : "bg-[#f92c85]"
                  }`}
                  src={contestant.image}
                />
                <h1 class="text-2xl font-bold">{contestant.name}</h1>
                <h2 class="text-xl font-bold">Age: {contestant.age}</h2>
                <h2 class="text-xl font-bold">{contestant.job}</h2>
                <h2 class="text-xl font-bold">From: {contestant.from}</h2>
                <div class="flex gap-5 ">
                  <Show when={contestant?.socials?.insta}>
                    <a
                      class="text-2xl font-bold"
                      target="_blank"
                      href={contestant?.socials?.insta}
                    >
                      <FaBrandsInstagram size={38} color="#FFFFFF" />
                    </a>
                  </Show>
                  <Show when={contestant?.socials?.tiktok}>
                    <a
                      class="text-2xl font-bold"
                      target="_blank"
                      href={contestant?.socials?.tiktok}
                    >
                      <FaBrandsTiktok size={38} />
                    </a>
                  </Show>
                  <Show when={contestant?.socials?.twitter}>
                    <a
                      class="text-2xl font-bold"
                      target="_blank"
                      href={contestant?.socials?.twitter}
                    >
                      <AiOutlineTwitter size={38} />
                    </a>
                  </Show>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  } else {
    return (
      <>
        {data.map((contestant: any) => {
          if (contestant.name == props.selection()) {
            return (
              <div class="border-4 md:w-[40%] rounded-md md:absolute md:top-10 md:right-10 p-4 bg-[#fdf5df]">
                <h1 class="text-2xl font-bold text-center">Current Partner</h1>
                <img
                  class={`rounded-lg border-2 p-1  block ${
                    contestant.gender == "guy" ? "bg-[#5ebec4]" : "bg-[#f92c85]"
                  }`}
                  src={contestant.image}
                />
                <h1 class="text-2xl font-bold">{contestant.name}</h1>
                <h2 class="text-xl font-bold">Age: {contestant.age}</h2>
                <h2 class="text-xl font-bold">{contestant.job}</h2>
                <h2 class="text-xl font-bold">From: {contestant.from}</h2>
                <div class="flex gap-5 ">
                  <Show when={contestant?.socials?.insta}>
                    <a
                      class="text-2xl font-bold"
                      target="_blank"
                      href={contestant?.socials?.insta}
                    >
                      <FaBrandsInstagram size={38} color="#FFFFFF" />
                    </a>
                  </Show>
                  <Show when={contestant?.socials?.tiktok}>
                    <a
                      class="text-2xl font-bold"
                      target="_blank"
                      href={contestant?.socials?.tiktok}
                    >
                      <FaBrandsTiktok size={38} />
                    </a>
                  </Show>
                  <Show when={contestant?.socials?.twitter}>
                    <a
                      class="text-2xl font-bold"
                      target="_blank"
                      href={contestant?.socials?.twitter}
                    >
                      <AiOutlineTwitter size={38} />
                    </a>
                  </Show>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
};

export default Bio;
