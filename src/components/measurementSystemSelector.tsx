import { StyledMeasurementSystemSelector } from "../styles/components/measurementSystemSelector.styles";

export default function MeasurementSystemSelector({ system, setSystem }) {
  function handleSystemChange(event) {
    setSystem(event.target.id);
  }

  return (
    <StyledMeasurementSystemSelector onChange={handleSystemChange}>
      <div>
        <input
          type="radio"
          name="system"
          id="metric"
          defaultChecked={system === "metric"}
        ></input>
        <label htmlFor="metric">Metric</label>
      </div>
      <div>
        <input type="radio" name="system" id="imperial"></input>
        <label htmlFor="imperial">Imperial</label>
      </div>
    </StyledMeasurementSystemSelector>
  );
}
