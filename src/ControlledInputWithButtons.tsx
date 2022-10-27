interface IControlledInputProps {
  value: string;
  onChange: (e: any) => void;
  rightButtons?: any;
  leftButtons?: any;
}

export default function ControlledInputWithButtons({
  value,
  onChange,
  rightButtons,
  leftButtons,
}: IControlledInputProps) {
  return (
    <>
      {leftButtons?.map((el: any) => (
        <button onClick={el.handler}>{el.name}</button>
      ))}
      <input value={value} onChange={onChange} />
      {rightButtons?.map((el: any) => (
        <button onClick={el.handler}>{el.name}</button>
      ))}
    </>
  );
}
