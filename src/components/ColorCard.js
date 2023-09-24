function ColorCard({ hex }) {
  return (
    <div className="card flex flex-col h-96 w-96 mx-auto my-20 p-2">
      {/* <div className={`color bg-[${hex}] h-64 w-64 mx-auto`}></div> */}
      <h3 className="text-xl text-center">{hex}</h3>
    </div>
  );
}

export default ColorCard;
