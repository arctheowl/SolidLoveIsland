import { For } from "solid-js";
import data from "/data/2023/ContestantList.json";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
};

const Selection = (props: Props) => {
  return (
    <select
      class="rounded-full border-2 p-3 bg-[#5ebec4] mx-auto block text-center"
      onChange={(e) => props.setSelection(e.target.value)}
      value={props.selection()}
    >
      <option selected disabled>
        Select Contestant
      </option>
      <optgroup label="Boys">
        <For each={data}>
          {(contestant) => {
            if (contestant.gender === "guy" && contestant.dumped !== true)
              return <option>{contestant.name} </option>;
          }}
        </For>
      </optgroup>

      <optgroup label="Girls">
        <For each={data}>
          {(contestant) => {
            if (contestant.gender === "girl" && contestant.dumped !== true)
              return <option>{contestant.name} </option>;
          }}
        </For>
      </optgroup>
      <optgroup label="Dumped">
        Dumped
        <For each={data}>
          {(contestant) => {
            if (contestant.dumped == true)
              return <option>{contestant.name} </option>;
          }}
        </For>
      </optgroup>
    </select>
  );
};

export default Selection;
