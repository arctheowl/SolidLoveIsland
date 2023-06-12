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
    <div class="flex-col md:col-span-4 md:grid md:grid-cols-4">
      <div class="md:col-span-2 md:row-span-2">
        <h1 class="md:text-7xl font-extrabold text-center bg-red-600 text-transparent bg-clip-text -rotate-45 relative md:top-80 top-52 text-4xl">
          DUMPED
        </h1>
        <Bio selection={props.selection} />
      </div>
      <div class="col-span-2 mt-14 md:p-4 pb-5">
        <PastPartners selection={props.selection} />
      </div>
      <div class="flex-col col-span-2 gap-5 border-4 md:m-4 items-center flex my-auto md:p-10 rounded-lg">
        <h1 class="text-2xl font-bold text-center">
          Introduced in episode {added()}
        </h1>
        <h1 class="text-2xl font-bold text-center">Lasted {dumped() - added() + 1}</h1>
        <h1 class="text-2xl font-bold text-center">
          Dumped in episode {dumped()}
        </h1>
      </div>
    </div>
  );
};

export default Dumped;
