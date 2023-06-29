import FormInput from "./FormInput.js";

export default function App() {
  return (
    <div className="app">
      <form>
        <FormInput placeholder={"UserName"} />
        <FormInput placeholder={"Email"} />
        <FormInput placeholder={"Full Name"} />
        <FormInput placeholder={"Designation"} />
      </form>
    </div>
  );
}
