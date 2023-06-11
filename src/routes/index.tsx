import { Show, createEffect, createSignal, For } from "solid-js";
import data from "/data/2023/ContestantList.json";
import Bio from "~/components/Bio";
import Partner from "~/components/Partner";
import Middle from "~/components/Middle";
import Landing from "~/components/Landing";
import PastPartners from "~/components/PastPartners";
import InstaFollowers from "~/components/InstaFollowers";
import Dumped from "~/components/Dumped";
import Facts from "~/components/Facts";
import Selection from "~/components/Selection";

export default function Home() {
  const [selection, setSelection] = createSignal("Select Contestant");

  return (
    <main class="text-gray-700 bg-[#fdf5df] h-screen flex flex-col justify-center align-middle items-center">
      <Show when={selection() == "Select Contestant"}>
        <Landing selection={selection} setSelection={setSelection} />
      </Show>
      <Show when={selection() != "Select Contestant"}>
        <div class="flex flex-col items-center h-screen w-screen p-4 md:grid md:grid-cols-12 md:gap-0">
          <div class="flex gap-5 md:col-span-12 md:mx-auto">
            <Selection selection={selection} setSelection={setSelection} />
          </div>
          <Show
            when={data.find(
              (contestant: any) =>
                contestant.name == selection() && contestant.dumped == true
            )}
          >
            <div class="col-span-12">
              <Dumped selection={selection} />
            </div>
          </Show>
          <Show
            when={data.find(
              (contestant: any) =>
                contestant.name == selection() && contestant.dumped == false
            )}
          >
            <>
              <div class="md:col-span-5">
                <Bio selection={selection} main={true} />
              </div>
              <Middle selection={selection} />
              <div class="md:col-span-5">
                <Partner selection={selection} setSelection={setSelection} />
              </div>
              <div class="md:col-span-5 pt-2">
                <PastPartners selection={selection} />
              </div>
              <div class="md:col-span-5 pt-2 w-full">
                <Facts selection={selection} />
              </div>
            </>
          </Show>
        </div>
      </Show>
    </main>
  );
}
