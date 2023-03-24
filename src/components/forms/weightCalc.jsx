import PrimaryCTA from "../buttons/primaryButton";

export default function LiftingForm() {
  return (
    <form>
      <label htmlFor="lifted-weight">I lifted</label>
      <input
        name="lifted-weight"
        id="lifted-weight"
        type="text"
        placeholder="Enter amount in kg"
        aria-label="Enter the amount of weight lifted in kilograms"
      ></input>

      <label htmlFor="lifted-reps">For</label>
      <input
        name="lifted-reps"
        id="lifted-reps"
        type="number"
        placeholder="Enter number of reps"
        aria-label="Enter the number of reps you performed"
      ></input>

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

      <label htmlFor="desired-reps">I want to endure</label>
      <input
        name="desired-reps"
        id="desired-reps"
        type="number"
        placeholder="Enter number of reps"
        aria-label="Enter the number of reps you want to perform"
      ></input>

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

      <div>
        <PrimaryCTA text={"calculate"} />
      </div>
    </form>
  );
}
