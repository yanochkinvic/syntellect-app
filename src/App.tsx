import React from "react";
import "./App.css";
import AutocompleteInput from "./Autocomplete";
import ControlledInputWithButtons from "./ControlledInputWithButtons";

function App() {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState<any>("");

  const onChange1 = (event: any) => {
    setValue1(event.target.value);
  };
  const onChange2 = (event: any) => {
    setValue2(event.target.value);
  };
  const clearHandler = () => {
    setValue1("");
  };
  const helloHandler = () => {
    setValue1("Hello world!");
  };
  const alertHandler = () => {
    alert(value2);
  };
  const checkAndAlertHandler = () => {
    if (Number(value2)) {
      alert(value2);
    }
  };

  return (
    <div>
      <ControlledInputWithButtons
        value={value1}
        onChange={onChange1}
        rightButtons={[
          {
            name: "Очистить",
            handler: clearHandler,
          },
          {
            name: "Say Hello",
            handler: helloHandler,
          },
        ]}
      />
      <br />
      <ControlledInputWithButtons
        value={value2}
        onChange={onChange2}
        rightButtons={[
          {
            name: "Alert",
            handler: alertHandler,
          },
        ]}
        leftButtons={[
          {
            name: "Check and Alert",
            handler: checkAndAlertHandler,
          },
        ]}
      />
      <br />
      <AutocompleteInput prompts={3} />
      <br />
      <AutocompleteInput prompts={10} />
    </div>
  );
}

export default App;
