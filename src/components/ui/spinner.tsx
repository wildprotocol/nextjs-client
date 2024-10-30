const Spinner = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-100">
      <span className="loading loading-spinner loading-md bg-primary"></span>
    </div>
  );
};

export default Spinner;
