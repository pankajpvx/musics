import "./loader.css";

const Loader = ({ isLoader = false }) => {
  if (isLoader)
    return (
      <div className="loader-container">
        <div id="loader" className="loader" />
      </div>
    );
};

export default Loader;
