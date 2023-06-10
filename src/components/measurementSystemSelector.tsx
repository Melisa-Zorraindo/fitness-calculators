import { ChangeEvent } from "react";
import { StyledMeasurementSystemSelector } from "../styles/components/measurementSystemSelector.styles";

export default function MeasurementSystemSelector({
  system,
  setSystem,
}: {
  system: string;
  setSystem: (system: string) => void;
}) {
  //function to handle measuring system change
  function handleSystemChange(event: ChangeEvent<HTMLInputElement>) {
    setSystem(event.currentTarget.id);
  }

  return (
    <StyledMeasurementSystemSelector>
      <div>
        <input
          type="radio"
          name="system"
          id="metric"
          defaultChecked={system === "metric"}
          onChange={handleSystemChange}
        ></input>
        <label htmlFor="metric">Metric</label>
      </div>
      <div>
        <input
          type="radio"
          name="system"
          id="imperial"
          onChange={handleSystemChange}
        ></input>
        <label htmlFor="imperial">Imperial</label>
      </div>
    </StyledMeasurementSystemSelector>
  );
}
