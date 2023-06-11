import { For, Show, createEffect, createSignal } from "solid-js";
import data from "/data/2023/ContestantList.json";

type Props = {
  selection: () => string;
};

const Facts = (props: Props) => {
  const [facts, setFacts] = createSignal([]);
  createEffect(() => {
    setFacts([]);
    data.map((contestant: any) => {
      if (contestant.name == props.selection()) {
        setFacts(contestant.facts);
      }
    });
  });

  return (
    <div class="p-2">
      <Show when={facts().length > 0}>
        <div class="border-4 rounded-md p-4">
          <h1 class="text-2xl font-bold text-center"> Fun Facts</h1>
          <For each={facts()}>
            {(fact: string, i) => (
              <div class="text-center">
                <p class="text-xl font-bold">
                  {i() + 1}) {fact}
                </p>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default Facts;
