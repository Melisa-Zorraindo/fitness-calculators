<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import Number from '#lib/components/inputs/Number.svelte';
	import Range from '#lib/components/inputs/Range.svelte';
	import RepsLadder from '#lib/components/RepsLadder.svelte';

	let rpe = $state(8);
	let targetRpe = $state(8);
</script>

<div class="mx-2 mb-2.5 grid grid-cols-2 gap-2 rounded-sm bg-gray-100 p-3">
	<Card text="LOAD THE BAR" value="100 kg" variant="primary" />
	<Card text="1RM" value="115.9 kg" />
	<Card text="% 1RM" value="86" />
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
						placeholder="100"
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
						placeholder="5"
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
					placeholder="3"
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

<RepsLadder
	rows={[
		{ reps: 1, pct: 100, rpe: 10, rir: 0, load: 125 },
		{ reps: 2, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 3, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 4, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 5, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 6, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 7, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 8, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 9, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 10, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 11, pct: 90, rpe: 9, rir: 1, load: 100 },
		{ reps: 12, pct: 90, rpe: 9, rir: 1, load: 100 }
	]}
	targetReps={3}
/>
