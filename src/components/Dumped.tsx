import Bio from "./Bio";
import data from "/data/2023/ContestantList.json";
import dumpedData from "/data/2023/Dumped.json";
import PastPartners from "./PastPartners";
import { createEffect, createSignal } from "solid-js";

type Props = {
  selection: () => string;
};

const Dumped = (props: Props) => {
  const [added, setAdded] = createSignal(0);
  const [dumped, setDumped] = createSignal(0);
  createEffect(() => {
    setAdded(0);
    dumpedData.find((contestant: any) => {
      if (contestant.name == props.selection()) {
        setAdded(contestant.intro);
        setDumped(contestant.outro);
      }
    });
  });
  return (
    <div class="h-full w-full flex-col md:col-span-4">
      <div class="md:w-[40%] md:-top-10">
        <h1 class="md:text-7xl font-extrabold text-center bg-red-600 text-transparent bg-clip-text -rotate-45 relative md:top-96 top-52 text-4xl">
          DUMPED
        </h1>
        <Bio selection={props.selection} />
      </div>
      <div>
        <PastPartners selection={props.selection} />
      </div>
      <h1 class="text-2xl font-bold text-center">
        Introduced in episode {added()}
      </h1>
      <h1 class="text-2xl font-bold text-center">
        Dumped in episode {dumped()}
      </h1>
    </div>
  );
};

export default Dumped;
