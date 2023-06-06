import TimeLineBoys from "/data/2023/TimeLineBoys.json";
import TimeLineGirls from "/data/2023/TimeLineGirls.json";
import data from "/data/2023/ContestantList.json";
import singleList from "/data/2023/CurrentSingles.json";
import { createEffect, createSignal, Show } from "solid-js";

type Props = {
  selection: () => string;
};

const Middle = (props: Props) => {
  const [inCouple, setInCouple] = createSignal(false);
  const [length, setLength] = createSignal(0);

  createEffect(() => {
    setLength(0);
    data.map((contestant: any) => {
      if (contestant.name == props.selection() && contestant.gender == "guy") {
        setInCouple(true);
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
          setInCouple(true);
          if (contestant.name == props.selection()) {
            setLength(contestant.data[0]?.length);
          }
        });
      }
    });
    singleList.map((contestant: any) => {
      if (contestant.name == props.selection()) {
        setInCouple(false);
      }
    });
  });

  return (
    <div class="text-pink-400">
      <Show
        when={inCouple()}
        fallback={
          <div>
            <h1>SINGLE READY TO MINGLE</h1>
            <h1 class="text-2xl font-bold text-center">
              Single for {length() > 1 ? `${length()} Days` : `${length()} Day`}
            </h1>
          </div>
        }
      >
        <h1 class="text-2xl font-bold text-center">
          Together {length() > 1 ? `${length()} Days` : `${length()} Day`}
        </h1>
      </Show>
    </div>
  );
};

export default Middle;
