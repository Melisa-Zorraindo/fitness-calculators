<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import Number from '#lib/components/inputs/Number.svelte';
	import Range from '#lib/components/inputs/Range.svelte';
	import RepsLadder from '#lib/components/RepsLadder.svelte';
	import { calculateOneRepMaxTuchscherer, calculateWeightToLift } from 'fit-tools';

	let rpe = $state(8);
	let targetRpe = $state(8);
	let weight = $state(50);
	let reps = $state(3);
	let targetReps = $state(6);
	const oneRepMax = $derived(calculateOneRepMaxTuchscherer(reps, rpe, weight));
	const weightToLift = $derived(calculateWeightToLift(targetReps, targetRpe, oneRepMax));
	const pctOfOneRepMax = $derived(oneRepMax > 0 ? (weightToLift / oneRepMax) * 100 : 0);

	const ladderRows = $derived(
		Array.from({ length: 12 }, (_, i) => {
			const r = i + 1;
			const load = calculateWeightToLift(r, targetRpe, oneRepMax);
			return {
				reps: r,
				pct: oneRepMax > 0 ? Math.round((load / oneRepMax) * 100) : 0,
				rpe: targetRpe,
				rir: 10 - targetRpe,
				load
			};
		})
	);
</script>

<div class="mx-2 mb-2.5 grid grid-cols-2 gap-2 rounded-sm bg-gray-100 p-3">
	<Card text="LOAD THE BAR" value={`${weightToLift}`} unit="kg" variant="primary" />
	<Card text="1RM" value={`${oneRepMax}`} unit="kg" />
	<Card text="% 1RM" value={`${Math.round(pctOfOneRepMax)}`} unit="%" />
</div>

<form class="mx-2 mb-2.5 space-y-6 rounded-sm bg-gray-100 p-3">
	<fieldset>
		<legend class="mb-3 text-sm tracking-wider text-mist-800 uppercase"> Last set </legend>

		<div class="space-y-4">
			<div class="grid grid-cols-2 gap-3">
				<div class="flex flex-col gap-1.5">
					<Number
						id="weight"
						text="Weight (kg)"
						name="weight"
						min={1}
						max={500}
						step={0.5}
						inputmode="decimal"
						placeholder="50"
						bind:value={weight}
					/>
				</div>
				<div class="flex flex-col gap-1.5">
					<Number
						id="reps"
						text="Reps"
						name="reps"
						min={1}
						max={12}
						step={1}
						inputmode="numeric"
						placeholder="3"
						bind:value={reps}
					/>
				</div>
			</div>

			<Range
				id="rpe"
				text="RPE"
				name="rpe"
				min={6.5}
				max={10}
				step={0.5}
				bind:value={rpe}
				minLabel="6.5 · easy"
				maxLabel="10 · max"
			/>
		</div>
	</fieldset>

	<fieldset>
		<legend class="mb-3 text-sm tracking-wider text-mist-800 uppercase"> Next set </legend>

		<div class="space-y-4">
			<div class="flex flex-col gap-1.5">
				<Number
					id="target-reps"
					text="Target reps"
					name="target-reps"
					min={1}
					max={12}
					step={1}
					inputmode="numeric"
					placeholder="6"
					bind:value={targetReps}
				/>
			</div>

			<Range
				id="target-rpe"
				text="Target RPE"
				name="target-rpe"
				min={6.5}
				max={10}
				step={0.5}
				bind:value={targetRpe}
			/>
		</div>
	</fieldset>
</form>

<RepsLadder rows={ladderRows} {targetReps} />
