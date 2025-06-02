type Props = {
  date: string;
};

const Card = ({ date }: Props) => {
  const formattedDate = date.split("/")[0];
  return (
    <>
      {/* <h2 className="text-xl font-bold pb-2">{date}</h2> */}
      <h2 className="opacity-70 mb-4 cursor-pointer transition-transform hover:opacity-100 hover:scale-105 duration-300 shadow-md">
        {formattedDate}
      </h2>
    </>
  );
};

export default Card;
