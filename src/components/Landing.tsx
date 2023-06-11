import Selection from "./Selection";

type Props = {
  selection: () => string;
  setSelection: (selection: string) => void;
};

const Landing = (props: Props) => {
  return (
    <div class="bg-[#fdf5df] h-screen w-screen items-center flex flex-col justify-center ">
      <div class=" p-24 rounded-xl">
        <h1 class="text-7xl font-extrabold text-center from-[#F42D69] bg-gradient-to-r to-[#FF8A00] text-transparent bg-clip-text pb-10">
          Love Island Tracker
        </h1>
        <Selection
          selection={props.selection}
          setSelection={props.setSelection}
        />
      </div>
    </div>
  );
};

export default Landing;
