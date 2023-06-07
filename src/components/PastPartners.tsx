import { For, createEffect, createSignal } from "solid-js";
import Boysdata from "/data/2023/TimeLineBoys.json";
import Girlsdata from "/data/2023/TimeLineGirls.json";
import ContesetantData from "/data/2023/ContestantList.json";
import { createStore } from "solid-js/store";

type Props = {
  selection: () => string;
};

const Partner = (props: Props) => {
  const [gender, setGender] = createSignal("");
  const [pastPartners, setPastPartners] = createStore([]);
  createEffect(() => {
    setGender("");
    ContesetantData?.map((contestant: any) => {
      if (contestant?.name == props?.selection()) {
        setGender(contestant.gender);
      }
    });
  });

  if (gender() == "guy") {
    Boysdata?.map((contestant: any) => {
      if (contestant?.name == props?.selection()) {
        contestant?.data?.map((partner: any) => {
          console.log(partner?.partner);
          setPastPartners([
            { partner: partner?.partner, length: partner?.length },
          ]);
        });
      }
    });
  }

  if (gender() == "girl") {
    Girlsdata?.map((contestant: any) => {
      if (contestant?.name == props?.selection()) {
        contestant?.data?.map((partner: any) => {
          console.log(partner?.partner);
        });
      }
    });
  }

  console.log(pastPartners[0]);
  return (
    <table>
      <tbody>
        <tr>
          <th>Person 1</th>
          <th>Person 2</th>
        </tr>
        <For each={pastPartners}>
          {(pastPartner, i) => (
            <tr>
              <td>{pastPartner.partner}</td>
              <td>{pastPartner.length}</td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
};

export default Partner;
