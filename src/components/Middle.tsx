import TimeLineBoys from "/data/2023/TimeLineBoys.json";
import TimeLineGirls from "/data/2023/TimeLineGirls.json";
import data from "/data/2023/ContestantList.json";
import { createSignal } from "solid-js";

type Props = {
  selection: () => string;
};

const Middle = (props: Props) => {
  const [length, setLength] = createSignal(0);

  data.map((contestant: any) => {
    if (contestant.name == props.selection() && contestant.gender == "guy") {
      TimeLineBoys.map((contestant: any) => {
        if (contestant.name == props.selection()) {
          setLength(contestant.data[0]?.length);
        }
      });
    } else if (
      contestant.name == props.selection() &&
      contestant.gender == "girl"
    ) {
      TimeLineGirls.map((contestant: any) => {
        if (contestant.name == props.selection()) {
          setLength(contestant.data[0]?.length);
        }
      });
    }
  });

  return (
    <div class="text-pink-400">
      <h1 class="text-2xl font-bold text-center">Together {length()} Day</h1>
    </div>
  );
};

export default Middle;
