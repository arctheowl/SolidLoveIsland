import { For } from "solid-js";
import data from "/data/2023/ContestantList.json";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
};

const Landing = (props: Props) => {
  return (
    <div class="bg-red-200 h-screen w-screen items-center flex flex-col">
      <h1 class="text-2xl font-bold text-center"> Love Island Tracker</h1>
      <div class=" ">
        <select
          class="rounded-full border-2 p-3 bg-[#5ebec4] mx-auto block "
          onChange={(e) => props.setSelection(e.target.value)}
          value={props.selection()}
          // placeholder should say "Select Contestant"
        >
          <option selected disabled>
            Select Contestant
          </option>
          <For each={data}>
            {(contestant) => <option>{contestant.name}</option>}
          </For>
        </select>
      </div>
    </div>
  );
};

export default Landing;
