import HashLoader from "react-spinners/HashLoader";

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <HashLoader color="#0067ff" />
    </div>
  );
}

export default Loader;
