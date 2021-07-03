import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => { console.log('I am cliled') } }></input>
    </div>
  );
}

export default App;
