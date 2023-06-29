// import Gallery from "./Gallery.js";

const FormInput = (props) => {
  return (
    <div className="formInput">
      <label>UserName</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};

export default FormInput;
