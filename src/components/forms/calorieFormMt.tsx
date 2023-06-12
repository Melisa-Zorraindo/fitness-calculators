import { StyledForm } from "../../styles/components/forms/form.styles";
import PrimaryCTA from "../buttons/primaryButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import bmrCalc from "../../utils/calorieCalculatorFunctions/bmrCalc";
import tdeeCalc from "../../utils/calorieCalculatorFunctions/tdeeCalc";
import macroSplitSelector from "../../utils/calorieCalculatorFunctions/macroSplit/macroSplitSelector";
import calorieBudgetCalc from "../../utils/calorieCalculatorFunctions/calorieBudget";
import { useCalorieStore } from "../../utils/stateManagement/calorieState";
import { shallow } from "zustand/shallow";
import { CalorieFormData } from "../../types/calorieForm";

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
      .min(40, "Weight cannot be lower than 40KG")
      .max(160, "Weight cannot be higher than 160KG")
      .required(),
    personHeight: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .min(130, "Height cannot be lower than 130CM")
      .max(230, "Height cannot be higher than 230CM")
      .required(),
    activityLevel: yup.string().required("This is a required field"),
    goal: yup.string().required("This is a required field"),
  })
  .required();

export default function CalorieFormMt() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CalorieFormData>({
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
  }: CalorieFormData) {
    const personsBMR = bmrCalc(gender, age, personWeight, personHeight);
    const personsTDEE = tdeeCalc(personsBMR, activityLevel, goal);
    const tdee = Math.floor(personsTDEE);

    updateCalories(tdee);

    const macros = macroSplitSelector(macroSplit, personsTDEE, personWeight);

    updateMacros(macros);

    const calorieBudget = calorieBudgetCalc(personsTDEE);

    updateWeeklyBudget(calorieBudget);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <div className="field-block">
        <label htmlFor="gender">Your gender</label>
        <select
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
          id="person-weight"
          placeholder="Enter your weight in KG"
          aria-label="Enter your weight in KG"
          {...register("personWeight", { required: true, min: 40, max: 160 })}
        ></input>
        <p className="validation-error">{errors.personWeight?.message}</p>
      </div>

      <div className="field-block">
        <label htmlFor="person-height">Your height</label>
        <input
          id="person-height"
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
    </StyledForm>
  );
}
