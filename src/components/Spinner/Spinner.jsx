import Loader from "react-loader-spinner";

import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <Loader type="TailSpin" color="silver" height={80} width={80} />
    </div>
  );
};

export default Spinner;
