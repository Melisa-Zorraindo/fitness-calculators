import PrimaryCTA from "../buttons/primaryButton";
import { Info } from "react-feather";

export default function LiftingForm() {
  return (
    <>
      <button className="info-btn">
        <Info size={"2rem"} />
      </button>
      <form>
        <div className="field-block">
          <label htmlFor="lifted-weight">I lifted</label>
          <input
            name="lifted-weight"
            id="lifted-weight"
            type="text"
            placeholder="Enter amount in kg"
            aria-label="Enter the amount of weight lifted in kilograms"
          ></input>
        </div>

        <div className="field-block">
          <label htmlFor="lifted-reps">For</label>
          <input
            name="lifted-reps"
            id="lifted-reps"
            type="number"
            placeholder="Enter number of reps"
            aria-label="Enter the number of reps you performed"
          ></input>
        </div>

        <div className="field-block">
          <label htmlFor="lifted-rpe">My RPE was</label>
          <select
            name="lifted-rpe"
            id="lifted-rpe"
            aria-label="Select the RPE value you experienced during the lift"
          >
            <option value="">Choose RPE</option>
            <option>6.5</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
          </select>
        </div>

        <div className="field-block">
          <label htmlFor="desired-reps">I want to endure</label>
          <input
            name="desired-reps"
            id="desired-reps"
            type="number"
            placeholder="Enter number of reps"
            aria-label="Enter the number of reps you want to perform"
          ></input>
        </div>

        <div className="field-block">
          <label htmlFor="desired-rpe">At an RPE of</label>
          <select
            name="desired-rpe"
            id="desired-rpe"
            aria-label="Select the desired RPE value you want to perform the lift at"
          >
            <option>Choose RPE</option>
            <option>6.5</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
          </select>
        </div>

        <PrimaryCTA text={"calculate"} />
        <div className="instructions">
          <ol>
            <li>
              Enter the weight you lifted in kilograms (kg) in the
              <span> "I lifted" </span>
              field.
            </li>
            <li>
              Enter the number of reps you completed in the <span> "For" </span>
              field.
            </li>
            <li>
              Select the RPE (Rate of Perceived Exertion) you experienced from
              the dropdown menu in the <span> "My RPE was" </span>field.
            </li>
            <li>
              Enter the number of reps you want to endure in the{" "}
              <span> "I want to endure" </span>field.
            </li>
            <li>
              Select the desired RPE you want to achieve from the dropdown menu
              in the<span> "At an RPE of" </span>field.
            </li>
            <li>
              Click the<span> "Calculate" </span>button to generate the
              recommended weight to lift for the desired number of reps and RPE.
            </li>
          </ol>
          <p>
            <span> Note: </span>The RPE scale ranges from 6.5 (very light) to 10
            (maximum effort), with increments of 0.5. Choose the RPE that most
            closely matches your perceived level of exertion during the lift.
          </p>
        </div>
      </form>
    </>
  );
}
