import { createEffect, createSignal } from "solid-js";
import data from "/data/2023/ContestantList.json";

type Props = {
  selection: () => string;
};
const InstaFollowers = ({ selection }: Props) => {
  const [startInstaFollowers, setStartInstaFollowers] = createSignal(0);
  const [endInstaFollowers, setEndInstaFollowers] = createSignal(0);

  createEffect(() => {
    setStartInstaFollowers(0);
    data.map((contestant: any) => {
      if (contestant?.name == selection()) {
        setStartInstaFollowers(contestant?.instaFollowCount);
        fetch(`https://www.instagram.com/mitcheltaylor_/?__a=1`).then(
          (data) => {
            console.log(data);
          }
        );
        // .then((data) => {
        //   console.log(data);
        // setStartInstaFollowers(data.users[0].user.follower_count);
        // });
      }
    });
  });

  return <div>InstaFollowers: {startInstaFollowers()}</div>;
};

export default InstaFollowers;
