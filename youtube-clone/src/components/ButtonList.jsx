import Button from "./Button";

const list = [
  "All",
  "Music",
  "Vlogs",
  "Trains",
  "Taste",
  "Dough",
  "Technology",
];
const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap px-2 no-scrollbar">
      {list.map((item, index) => (
        <Button key={index} name={item} />

      )


      )}
    </div>
  );
};

export default ButtonList;
