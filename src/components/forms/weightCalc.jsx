import PrimaryCTA from "../buttons/primaryButton";
import ExtraUserInfo from "../extraUserInformation";
import InfoButton from "../buttons/infoButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { coefficients } from "../../utils/liftingCoefficients";
import { useLiftingStore } from "../../utils/stateManagement/liftingState";
import { useInformationStore } from "../../utils/stateManagement/informationState/informationState";
import { shallow } from "zustand/shallow";

const schema = yup
  .object({
    liftedWeight: yup
      .number()
      .typeError("Enter amount in KG")
      .positive()
      .min(1, "Kilos cannot be lower than 1")
      .required(),
    liftedReps: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .integer()
      .min(1, "Number of reps cannot be lower than 1")
      .max(12, "Number of reps cannot be higher than 12")
      .required(),
    liftedRpe: yup.number().typeError("This is a required field").required(),
    desiredReps: yup
      .number()
      .typeError("This is a required field")
      .positive()
      .integer()
      .min(1, "Number of reps cannot be lower than 1")
      .max(12, "Number of reps cannot be higher than 12")
      .required(),
    desiredRpe: yup.number().typeError("This is a required field").required(),
  })
  .required();

export default function LiftingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { updateOneRm, updateWeightToLift } = useLiftingStore(
    (state) => ({
      updateOneRm: state.updateOneRm,
      updateWeightToLift: state.updateWeightToLift,
    }),
    shallow
  );

  function onSubmit({
    desiredReps,
    desiredRpe,
    liftedReps,
    liftedRpe,
    liftedWeight,
  }) {
    //get 1RM
    const selectedRpe = coefficients[liftedRpe];
    const coeffForRM = selectedRpe[liftedReps - 1];
    const rm = (liftedWeight / coeffForRM).toFixed(1);

    updateOneRm(rm);

    //get recommended lifting weight
    const wantedRpe = coefficients[desiredRpe];
    const coeffForRecommendedWeight = wantedRpe[desiredReps - 1];
    const weightToLift = (rm * coeffForRecommendedWeight).toFixed(1);

    updateWeightToLift(weightToLift);
  }

  const { infoButtons } = useInformationStore(
    (state) => ({
      infoButtons: state.infoButtons,
    }),
    shallow
  );

  const targetButton = infoButtons.find(
    (button) => button.id === "liftingFormHowTo"
  );

  return (
    <>
      <InfoButton id="liftingFormHowTo" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field-block">
          <label htmlFor="lifted-weight">I lifted</label>
          <input
            name="lifted-weight"
            id="lifted-weight"
            placeholder="Enter amount in kg"
            aria-label="Enter the amount of weight lifted in kilograms"
            {...register("liftedWeight", {
              required: true,
              min: 1,
            })}
          ></input>
          <p className="validation-error">{errors.liftedWeight?.message}</p>
        </div>

        <div className="field-block">
          <label htmlFor="lifted-reps">For</label>
          <input
            name="lifted-reps"
            id="lifted-reps"
            type="number"
            placeholder="Enter number of reps"
            aria-label="Enter the number of reps you performed"
            {...register("liftedReps", { required: true, min: 1, max: 12 })}
          ></input>
          <p className="validation-error">{errors.liftedReps?.message}</p>
        </div>

        <div className="field-block">
          <label htmlFor="lifted-rpe">My RPE was</label>
          <select
            name="lifted-rpe"
            id="lifted-rpe"
            aria-label="Select the RPE value you experienced during the lift"
            {...register("liftedRpe", { required: true })}
          >
            <option value="">Choose RPE</option>
            <option value={7}>6.5</option>
            <option value={6}>7</option>
            <option value={5}>7.5</option>
            <option value={4}>8</option>
            <option value={3}>8.5</option>
            <option value={2}>9</option>
            <option value={1}>9.5</option>
            <option value={0}>10</option>
          </select>
          <p className="validation-error">{errors.liftedRpe?.message}</p>
        </div>

        <div className="field-block">
          <label htmlFor="desired-reps">I want to endure</label>
          <input
            name="desired-reps"
            id="desired-reps"
            type="number"
            placeholder="Enter number of reps"
            aria-label="Enter the number of reps you want to perform"
            {...register("desiredReps", { required: true, min: 1, max: 12 })}
          ></input>
          <p className="validation-error">{errors.desiredReps?.message}</p>
        </div>

        <div className="field-block">
          <label htmlFor="desired-rpe">At an RPE of</label>
          <select
            name="desired-rpe"
            id="desired-rpe"
            aria-label="Select the desired RPE value you want to perform the lift at"
            {...register("desiredRpe", { required: true })}
          >
            <option value="">Choose RPE</option>
            <option value={7}>6.5</option>
            <option value={6}>7</option>
            <option value={5}>7.5</option>
            <option value={4}>8</option>
            <option value={3}>8.5</option>
            <option value={2}>9</option>
            <option value={1}>9.5</option>
            <option value={0}>10</option>
          </select>
          <p className="validation-error">{errors.desiredRpe?.message}</p>
        </div>
        <PrimaryCTA text={"calculate"} />
      </form>
      {targetButton.active && (
        <ExtraUserInfo
          id="liftingFormNote"
          title={"What does RPE mean?"}
          text={[
            {
              type: "",
              description: "RPE stands for Rate of Perceived Exertion.",
            },
            {
              type: "",
              description:
                "The RPE scale ranges from 6.5 (very light) to 10 (maximum effort), with increments of 0.5.",
            },
            {
              type: "",
              description:
                "Choose the RPE that most closely matches your perceived level of exertion during the lift.",
            },
          ]}
        />
      )}
    </>
  );
}
