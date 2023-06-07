import { Show, createEffect, createSignal, For } from "solid-js";
import data from "/data/2023/ContestantList.json";
import Bio from "~/components/Bio";
import Partner from "~/components/Partner";

import TimeLineBoys from "/data/2023/TimeLineBoys.json";
import TimeLineGirls from "/data/2023/TimeLineGirls.json";
import Middle from "~/components/Middle";
import Landing from "~/components/Landing";
import PastPartners from "~/components/PastPartners";

export default function Home() {
  const [selection, setSelection] = createSignal("Select Contestant");

  return (
    <main class="text-gray-700 bg-[#fdf5df] h-screen flex flex-col justify-center align-middle items-center">
      <Show when={selection() == "Select Contestant"}>
        <Landing selection={selection} setSelection={setSelection} />
      </Show>
      <Show when={selection() != "Select Contestant"}>
        <div class="flex flex-col items-center h-screen p-4">
          <div class="flex gap-5">
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

          <Bio selection={selection} setSelection={setSelection} main={true} />
          <Middle selection={selection} />
          <Partner selection={selection} setSelection={setSelection} />
          <PastPartners selection={selection} />
        </div>
      </Show>
    </main>
  );
}
