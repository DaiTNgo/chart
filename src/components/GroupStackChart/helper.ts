import { TData } from "./types";

export function getNumOfValue(_data: TData[]) {
  console.log("-> _data getNumOfValue", _data);
  const numOfGroup: number = _data.length;
  const numOfBar: number = _data[0].valueGroup.length;
  const numOfStack: number = _data[0].valueGroup[0].valueBar.length;

  return {
    numOfGroup,
    numOfBar,
    numOfStack,
  };
}
