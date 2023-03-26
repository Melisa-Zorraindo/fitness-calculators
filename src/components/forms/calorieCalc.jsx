import PrimaryCTA from "../buttons/primaryButton";
import { Info } from "react-feather";

export default function CalorieForm() {
  return (
    <>
      <button className="info-btn">
        <Info size={"2rem"} />
      </button>
      <form>
        <div className="field-block">
          <label htmlFor="gender">Your gender</label>
          <select name="gender" id="gender" aria-label="Select your gender">
            <option value="">Choose gender</option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>
        <div className="field-block">
          <label htmlFor="age">Your age</label>
          <input
            name="age"
            id="age"
            type="number"
            placeholder="Enter your age"
            aria-label="Enter your age"
          ></input>
        </div>
        <div className="field-block">
          <label htmlFor="person-weigth">Your weight</label>
          <input
            name="person-weigth"
            id="person-weigth"
            type="number"
            placeholder="Enter your weight in KG"
            aria-label="Enter your weight in KG"
          ></input>
        </div>
        <div className="field-block">
          <label htmlFor="person-height">Your height</label>
          <input
            name="person-height"
            id="person-height"
            type="number"
            placeholder="Enter your height in CM"
            aria-label="Enter your height in CM"
          ></input>
        </div>
        <div className="field-block">
          <label htmlFor="activity-level">Your activity level</label>
          <select
            name="activity-level"
            id="activity-level"
            aria-label="Select your activity level"
          >
            <option>Choose activity level</option>
            <option>Sedentary (office job)</option>
            <option>Light exercise (1-2 days a week)</option>
            <option>Moderate exercise (3-5 days a week)</option>
            <option>Heavy exercise (6-7 days a week)</option>
          </select>
        </div>
        <div className="field-block">
          <label htmlFor="goal">Your goal</label>
          <select name="goal" id="goal" aria-label="Select your goal">
            <option>Choose goal</option>
            <option>Lose weight</option>
            <option>Maintain weight</option>
            <option>Gain weight</option>
          </select>
        </div>
        <PrimaryCTA text={"calculate"} />
        <div className="instructions">
          <ol>
            <li>
              Choose your <span> gender </span> from the drop-down menu.
            </li>
            <li>
              Enter your <span> age </span> in years in the corresponding field.
            </li>
            <li>
              Enter your weight in kilograms in the <span> your weight </span>{" "}
              field.
            </li>
            <li>
              Enter your height in centimeters in the <span> your height </span>{" "}
              field.
            </li>
            <li>
              Select your <span> activity level </span> from the drop-down menu.
            </li>
            <li>
              Select your <span> goal </span> from the drop-down menu.
            </li>
            <li>
              Click on the <span> calculate </span> button to get your estimated
              daily calorie needs based on the information you provided.
            </li>
            <p>
              <span>Note: </span>keep in mind that the results are only an
              estimate, and you may need to adjust your calorie intake based on
              your individual needs and goals. Also, please make sure to consult
              with a healthcare professional before making any significant
              changes to your diet or exercise routine.
            </p>
          </ol>
        </div>
        ;
      </form>
    </>
  );
}
