import { StyledForm } from "../../styles/components/forms/form.styles";
import PrimaryCTA from "../buttons/primaryButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import bmrCalc from "../../utils/calorieCalculatorFunctions/bmrCalc";
import tdeeCalc from "../../utils/calorieCalculatorFunctions/tdeeCalc";
import macroSplitSelector from "../../utils/calorieCalculatorFunctions/macroSplit/macroSplitSelector";
import calorieBudgetCalc from "../../utils/calorieCalculatorFunctions/calorieBudget";
import { weightConverter } from "../../utils/calorieCalculatorFunctions/weightConverter";
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
      .min(88, "Weight cannot be lower than 88Lbs")
      .max(352, "Weight cannot be higher than 352Lbs")
      .required(),
    personHeight: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .required(),
    activityLevel: yup.string().required("This is a required field"),
    goal: yup.string().required("This is a required field"),
  })
  .required();
export default function CalorieFormIm() {
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
    const convertedPersonWeight: number = weightConverter(personWeight);
    const personsBMR: number = bmrCalc(
      gender,
      age,
      convertedPersonWeight,
      personHeight
    );

    const personsTDEE: number = tdeeCalc(personsBMR, activityLevel, goal);
    const tdee: number = Math.floor(personsTDEE);

    updateCalories(tdee);

    const macros = macroSplitSelector(
      macroSplit,
      personsTDEE,
      convertedPersonWeight
    );

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
          placeholder="Enter your weight in Lbs"
          aria-label="Enter your weight in Lbs"
          {...register("personWeight", { required: true, min: 88, max: 352 })}
        ></input>
        <p className="validation-error">{errors.personWeight?.message}</p>
      </div>

      <div className="field-block">
        <label htmlFor="person-height">Your height</label>
        <select
          id="person-height"
          placeholder="Select your height"
          aria-label="Select your height"
          {...register("personHeight", {
            required: true,
            min: 130,
            max: 230,
          })}
        >
          <option value={""}>Select height</option>
          <option value={130}>4 ft 3 in</option>
          <option value={132.08}>4 ft 4 in</option>
          <option value={134.62}>4 ft 5 in</option>
          <option value={137.16}>4 ft 6 in</option>
          <option value={139.7}>4 ft 7 in</option>
          <option value={142.24}>4 ft 8 in</option>
          <option value={144.78}>4 ft 9 in</option>
          <option value={147.32}>4 ft 10 in</option>
          <option value={149.86}>4 ft 11 in</option>
          <option value={152.4}>5 ft</option>
          <option value={154.94}>5 ft 1 in</option>
          <option value={157.48}>5 ft 2 in</option>
          <option value={160.02}>5 ft 3 in</option>
          <option value={162.56}>5 ft 4 in</option>
          <option value={165.1}>5 ft 5 in</option>
          <option value={167.64}>5 ft 6 in</option>
          <option value={170.18}>5 ft 7 in</option>
          <option value={172.72}>5 ft 8 in</option>
          <option value={175.26}>5 ft 9 in</option>
          <option value={177.8}>5 ft 10 in</option>
          <option value={180.34}>5 ft 11 in</option>
          <option value={182.88}>6 ft</option>
          <option value={185.42}>6 ft 1 in</option>
          <option value={187.96}>6 ft 2 in</option>
          <option value={190.5}>6 ft 3 in</option>
          <option value={193.04}>6 ft 4 in</option>
          <option value={195.58}>6 ft 5 in</option>
          <option value={198.12}>6 ft 6 in</option>
          <option value={200.66}>6 ft 7 in</option>
          <option value={203.2}>6 ft 8 in</option>
          <option value={205.74}>6 ft 9 in</option>
          <option value={208.28}>6 ft 10 in</option>
          <option value={210.82}>6 ft 11 in</option>
          <option value={213.36}>7 ft</option>
          <option value={215.9}>7 ft 1 in</option>
          <option value={218.44}>7 ft 2 in</option>
          <option value={220.98}>7 ft 3 in</option>
          <option value={223.52}>7 ft 4 in</option>
          <option value={226.06}>7 ft 5 in</option>
          <option value={228.6}>7 ft 6 in</option>
        </select>
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
