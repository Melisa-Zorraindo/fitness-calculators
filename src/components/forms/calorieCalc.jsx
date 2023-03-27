import PrimaryCTA from "../buttons/primaryButton";
import { Info } from "react-feather";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    gender: yup.string().required("This is a required field"),
    age: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .integer()
      .min(18, "Age cannot be lower than 18")
      .max(80, "Age cannot be higher than 80")
      .required(),
    personWeight: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .integer()
      .min(40, "Weight cannot be lower than 40KG")
      .max(160, "Weight cannot be higher than 160KG")
      .required(),
    personHeight: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .integer()
      .min(130, "Height cannot be lower than 130CM")
      .max(230, "Height cannot be higher than 230CM")
      .required(),
    activityLevel: yup.string().required("This is a required field"),
    goal: yup.string().required("This is a required field"),
  })
  .required();

export default function CalorieForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <button className="info-btn">
        <Info size={"2rem"} />
      </button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field-block">
          <label htmlFor="gender">Your gender</label>
          <select
            name="gender"
            id="gender"
            aria-label="Select your gender"
            {...register("gender", {
              required: true,
            })}
          >
            <option value="">Choose gender</option>
            <option>Female</option>
            <option>Male</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>
        <div className="field-block">
          <label htmlFor="age">Your age</label>
          <input
            name="age"
            id="age"
            type="number"
            placeholder="Enter your age"
            aria-label="Enter your age"
            {...register("age", { required: true, min: 18, max: 80 })}
          ></input>
          <p>{errors.age?.message}</p>
        </div>
        <div className="field-block">
          <label htmlFor="person-weight">Your weight</label>
          <input
            name="person-weight"
            id="person-weight"
            type="number"
            placeholder="Enter your weight in KG"
            aria-label="Enter your weight in KG"
            {...register("personWeight", { required: true, min: 40, max: 160 })}
          ></input>
          <p>{errors.personWeight?.message}</p>
        </div>
        <div className="field-block">
          <label htmlFor="person-height">Your height</label>
          <input
            name="person-height"
            id="person-height"
            type="number"
            placeholder="Enter your height in CM"
            aria-label="Enter your height in CM"
            {...register("personHeight", {
              required: true,
              min: 130,
              max: 230,
            })}
          ></input>
          <p>{errors.personHeight?.message}</p>
        </div>
        <div className="field-block">
          <label htmlFor="activity-level">Your activity level</label>
          <select
            name="activity-level"
            id="activity-level"
            aria-label="Select your activity level"
            {...register("activityLevel", { required: true })}
          >
            <option value={""}>Choose activity level</option>
            <option value={2}>Sedentary (office job)</option>
            <option value={3}>Light exercise (1-2 days a week)</option>
            <option value={4}>Moderate exercise (3-5 days a week)</option>
            <option value={5}>Heavy exercise (6-7 days a week)</option>
          </select>
          <p>{errors.activityLevel?.message}</p>
        </div>
        <div className="field-block">
          <label htmlFor="goal">Your goal</label>
          <select
            name="goal"
            id="goal"
            aria-label="Select your goal"
            {...register("goal", { required: true })}
          >
            <option value={""}>Choose goal</option>
            <option value={"mildlose"}>Lose weight</option>
            <option value={"maintain"}>Maintain weight</option>
            <option value={"mildgain"}>Gain weight</option>
          </select>
          <p>{errors.goal?.message}</p>
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
      </form>
    </>
  );
}
