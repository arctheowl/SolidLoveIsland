import { For } from "solid-js";
import data from "/data/2023/ContestantList.json";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
};

const Landing = (props: Props) => {
  return (
    <div class="bg-[#fdf5df] h-screen w-screen items-center flex flex-col justify-center ">
      <div class=" p-24 rounded-xl">
        <h1 class="text-7xl font-extrabold text-center from-[#F42D69] bg-gradient-to-r to-[#FF8A00] text-transparent bg-clip-text pb-10">
          Love Island Tracker
        </h1>
        <select
          class="rounded-full border-2 p-3 bg-[#5ebec4] mx-auto block "
          onChange={(e) => props.setSelection(e.target.value)}
          value={props.selection()}
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
