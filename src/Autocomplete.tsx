import React from "react";
import { getCountryByName } from "./api/apiService";
import { css } from "@emotion/css";

interface IAutocompleteInputProps {
  prompts: number;
}

export default function AutocompleteInput({
  prompts,
}: IAutocompleteInputProps) {
  const [value, setValue] = React.useState("");
  const [options, setOptions] = React.useState<any>([]);
  const onChangeInput = (event: any) => {
    setValue(event.target.value);
  };
  const onChangeSelect = (event: any) => {
    setValue(event.target.value);
    setOptions([]);
  };

  React.useEffect(() => {
    getCountryByName(value).then((result) =>
      setOptions(result.slice(0, prompts))
    );
  }, [value]);

  return (
    <>
      <input value={value} onChange={onChangeInput} />
      <br />
      {options.length > 0 && (
        <select onChange={onChangeSelect} size={options.length} multiple>
          <option hidden></option>
          {options?.map((el: any, index: number) => {
            return (
              <>
                <option
                  key={el.name}
                  value={el.name}
                  className={css`
                    background: url(${el.flag}) no-repeat;
                    background-size: 20px;
                    padding-left: 25px;
                    background-position: 0 1px;
                  `}
                >
                  {`${el.name}, ${el.fullName}`}
                </option>
              </>
            );
          })}
        </select>
      )}
    </>
  );
}
