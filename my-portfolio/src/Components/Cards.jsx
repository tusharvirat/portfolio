const Cards = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[#9929EA] flex flex-col items-center rounded-2xl p-3 sm:p-4 md:p-6 w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 justify-center gap-1 sm:gap-2">
        <img
          src={props.img}
          alt={props.alt}
          className="h-7 w-7 sm:h-12 sm:w-12 md:h-16 md:w-16 lg:h-24 lg:w-24"
        />
        <h1 className="font-bold text-[8px] sm:text-xs md:text-sm lg:text-base text-white text-center">{props.alt}</h1>
      </div>
    </div>
  );
};
export default Cards;