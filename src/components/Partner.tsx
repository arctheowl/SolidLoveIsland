import { createEffect, createSignal, Show } from "solid-js";
import data from "/data/2023/CurrentCouples.json";
import Bio from "./Bio";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
};

const Partner = (props: Props) => {
  const [partner, setPartner] = createSignal("");
  createEffect(() => {
    setPartner("");
    data.map((couple: any) => {
      if (couple.name == props.selection()) {
        setPartner(couple.partner);
      } else if (couple.partner == props.selection()) {
        setPartner(couple.name);
      }
    });
  });
  return (
    <Show when={partner() != ""}>
      <Bio selection={partner} setSelection={setPartner} main={false} />
    </Show>
  );
};

export default Partner;
