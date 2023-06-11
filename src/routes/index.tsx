import { Show, createEffect, createSignal, For } from "solid-js";
import data from "/data/2023/ContestantList.json";
import Bio from "~/components/Bio";
import Partner from "~/components/Partner";
import Middle from "~/components/Middle";
import Landing from "~/components/Landing";
import PastPartners from "~/components/PastPartners";
import InstaFollowers from "~/components/InstaFollowers";

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
            <label class="pt-1">Select Contestant</label>
            <select
              class={`w-24 rounded-3xl border-2 p-1 bg-[#5ebec4] mx-auto text-center`}
              onChange={(e) => setSelection(e.target.value)}
              value={selection()}
              // placeholder should say "Select Contestant"
            >
              <For each={data}>
                {(contestant: any) => <option>{contestant.name}</option>}
              </For>
            </select>
          </div>
          <div class="md:col-span-5">
            <Bio
              selection={selection}
              setSelection={setSelection}
              main={true}
            />
          </div>

          <Middle selection={selection} />
          <div class="md:col-span-5">
            <Partner selection={selection} setSelection={setSelection} />
          </div>
          <PastPartners selection={selection} />
          {/* <InstaFollowers selection={selection} /> */}
        </div>
      </Show>
    </main>
  );
}
