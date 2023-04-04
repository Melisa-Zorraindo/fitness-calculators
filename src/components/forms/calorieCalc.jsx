import PrimaryCTA from "../buttons/primaryButton";
import InfoButton from "../buttons/infoButton";
import ExtraUserInfo from "../extraUserInformation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bmrCalc from "../../utils/calorieCalculatorFunctions/bmrCalc";
import tdeeCalc from "../../utils/calorieCalculatorFunctions/tdeeCalc";
import macroSplitSelector from "../../utils/calorieCalculatorFunctions/macroSplit/macroSplitSelector";
import calorieBudgetCalc from "../../utils/calorieCalculatorFunctions/calorieBudget";
import { useCalorieStore } from "../../utils/stateManagement/calorieState";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";

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

  const { updateCalories, updateMacros, updateWeeklyBudget } = useCalorieStore(
    (state) => ({
      updateCalories: state.updateCalories,
      updateMacros: state.updateMacros,
      updateWeeklyBudget: state.updateWeeklyBudget,
    }),
    shallow
  );

  function onSubmit({
    gender,
    age,
    personWeight,
    personHeight,
    activityLevel,
    goal,
    macroSplit,
  }) {
    const personsBMR = bmrCalc(gender, age, personWeight, personHeight);
    const personsTDEE = tdeeCalc(personsBMR, activityLevel, goal);
    const tdee = Math.floor(personsTDEE);

    updateCalories(tdee);

    const macros = macroSplitSelector(macroSplit, personsTDEE, personWeight);

    updateMacros(macros);

    const calorieBudget = calorieBudgetCalc(personsTDEE);

    updateWeeklyBudget(calorieBudget);
  }

  const { infoButtons } = useInformationStore(
    (state) => ({
      infoButtons: state.infoButtons,
    }),
    shallow
  );

  const targetButton = infoButtons.find(
    (button) => button.id === "calorieFormHowTo"
  );

  return (
    <>
      <InfoButton id="calorieFormHowTo" />
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
            <option value={"female"}>Female</option>
            <option value={"male"}>Male</option>
          </select>
          <p className="validation-error">{errors.gender?.message}</p>
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
          <p className="validation-error">{errors.age?.message}</p>
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
          <p className="validation-error">{errors.personWeight?.message}</p>
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
          <p className="validation-error">{errors.personHeight?.message}</p>
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
            <option value={1.2}>Sedentary (office job)</option>
            <option value={1.375}>Light exercise (1-2 days a week)</option>
            <option value={1.55}>Moderate exercise (3-5 days a week)</option>
            <option value={1.725}>Heavy exercise (6-7 days a week)</option>
          </select>
          <p className="validation-error">{errors.activityLevel?.message}</p>
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
            <option value={"moderateLose"}>Moderate weight loss</option>
            <option value={"mildLose"}>Mild weight loss</option>
            <option value={"maintain"}>Maintain weight</option>
            <option value={"mildGain"}>Mild weight gain</option>
            <option value={"moderateGain"}>Moderate weight gain</option>
          </select>
          <p className="validation-error">{errors.goal?.message}</p>
        </div>
        <div className="field-block">
          <label htmlFor="macroSplit">Your macro split</label>
          <select
            name="macroSplit"
            id="macroSplit"
            aria-label="Select your macro split"
            {...register("macroSplit", { required: false })}
          >
            <option value={""}>Choose macro split (optional)</option>
            <option value={"weightlifting"}>Weightlifting</option>
            <option value={"balanced"}>Balanced</option>
            <option value={"keto"}>Keto</option>
          </select>
        </div>
        <PrimaryCTA text={"calculate"} />
      </form>
      {targetButton.active && (
        <ExtraUserInfo
          id="calorieFormNote"
          title={"How to choose your macro split"}
          text={[
            {
              type: "Weightlifting: ",
              description:
                "aim for 1.6 g - 2g of protein and 0.8g - 1g of fats per kilo of body weight, with the remaining calories coming from carbohydrates. This option will set the calculator to the higher end of the recommended range for protein and fat intake.",
            },
            {
              type: "Keto diet: ",
              description:
                "aim for 5 - 10% carbs, 10 - 15% protein, and 75 - 80 % fats. The percentage split used in this calculator is 10% carbs, 15% protein, and 75% fats.",
            },
            {
              type: "Balanced: ",
              description:
                "aim for 45 - 65% carbs, 10 - 35% protein, and 20 - 30% fats. The percentage split used in this calculator is 55% carbs, 15% protein, and 30% fats.",
            },
          ]}
        />
      )}
    </>
  );
}
