import { For, createEffect, createSignal } from "solid-js";
import Boysdata from "/data/2023/TimeLineBoys.json";
import Girlsdata from "/data/2023/TimeLineGirls.json";
import ContesetantData from "/data/2023/ContestantList.json";
import { createStore } from "solid-js/store";

type Props = {
  selection: () => string;
};

type Partner = {
  partner: string;
  length: number;
};

const Partner = (props: Props) => {
  const [gender, setGender] = createSignal("");
  const [pastPartners, setPastPartners] = createStore<[Partner]>([
    { partner: "", length: 0 },
  ]);

  createEffect(() => {
    setGender("");
    ContesetantData?.map((contestant: any) => {
      if (contestant?.name == props?.selection()) {
        setGender(contestant.gender);
      }
    });
    switch (gender()) {
      case "guy":
        Boysdata?.map((contestant: any) => {
          if (contestant?.name == props?.selection()) {
            setPastPartners(contestant?.data);
          }
        });
      case "girl":
        Girlsdata?.map((contestant: any) => {
          if (contestant?.name == props?.selection()) {
            setPastPartners(contestant?.data);
          }
        });
    }
  });

  console.log(pastPartners);
  return (
    <div class="mx-auto md:col-span-2">
      <h1 class="text-2xl font-bold text-center"> Past Partners</h1>
      <table class="">
        <tbody class="">
          <tr class="border-2">
            <th class="border-2 p-5">Past Partner</th>
            <th class="border-2 p-5 ">Days Together</th>
          </tr>
          <For each={pastPartners}>
            {(pastPartner, i) => (
              <tr class="border-2">
                <td class="border-2 p-5 text-xl font-bold text-center">
                  {pastPartner.partner}
                </td>
                <td class="border-2 p-5 text-xl font-bold text-center">
                  {pastPartner.length}
                </td>
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
};

export default Partner;
