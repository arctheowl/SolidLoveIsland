import { createEffect, createSignal } from "solid-js";
import data from "/data/2023/CurrentCouples.json";
import Bio from "./Bio";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
};

const Partner = (props: Props) => {
  const [partner, setPartner] = createSignal("Select Contestant");
  createEffect(() => {
    data.map((couple: any) => {
      if (couple.name == props.selection()) {
        setPartner(couple.partner);
      } else if (couple.partner == props.selection()) {
        setPartner(couple.name);
      }
    });
  });
  return (
    <>
      <Bio selection={partner} setSelection={setPartner} main={false} />
    </>
  );
};

export default Partner;
