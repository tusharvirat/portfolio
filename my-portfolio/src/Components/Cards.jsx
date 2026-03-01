const Cards = (props) => {
  return (
    <div className="h-50 w-50 flex flex-col  items-center justify-center  ">
      <div className="bg-[#9929EA] flex flex-col items-center rounded-2xl p-4">
        <img
          src={props.img}
          alt={props.alt}
          className="h-25 w-25"
        />
        <h1 className="font-bold text-1xl">{props.alt}</h1>
      </div>
    </div>
  );
};

export default Cards;
