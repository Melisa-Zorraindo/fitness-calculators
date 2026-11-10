<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import Number from '#lib/components/inputs/Number.svelte';
	import Radio from '#lib/components/inputs/Radio.svelte';
	import Select from '#lib/components/inputs/Select.svelte';
	import { calculateBmrMifflinStJeor, calculateMacros, calculateTdee } from 'fit-tools';

	// TODO: remove inferred types when calculator exports them
	type Gender = Parameters<typeof calculateBmrMifflinStJeor>[0];
	type ActivityLevel = Parameters<typeof calculateTdee>[1];
	type Goal = Parameters<typeof calculateTdee>[2];

	type Macro = 'weightlifting' | 'balanced' | 'keto';

	// TODO: retrieve values from localstorage || hardcoded
	let gender = $state<Gender>('female');
	let weight = $state(60);
	let height = $state(160);
	let age = $state(42);
	let activityLevel = $state<ActivityLevel>('moderate');
	let goal = $state<Goal>('maintain');
	let macro = $state<Macro>('weightlifting');
	let bmr = $derived(calculateBmrMifflinStJeor(gender, age, weight, height));

	const macroSplit = $derived.by(() => {
		switch (macro) {
			case 'balanced':
				return { carbs: 50, fat: 30, protein: 20 };
			case 'keto':
				return { carbs: 10, fat: 75, protein: 15 };
			case 'weightlifting': {
				// 2g protein (4 kcal/g) and 1g fat (9 kcal/g) per kg of body weight, the rest is carbs
				const protein = ((weight * 2 * 4) / tdee) * 100;
				const fat = ((weight * 1 * 9) / tdee) * 100;
				return { carbs: Math.max(0, 100 - protein - fat), fat, protein };
			}
		}
	});

	const tdee = $derived(calculateTdee(bmr, activityLevel, goal));
	const { carbs, fat, protein } = $derived(
		calculateMacros(tdee, macroSplit.carbs, macroSplit.fat, macroSplit.protein)
	);
	const activity = $derived(Math.round(tdee) - bmr);
	const bmrPct = $derived(Math.round((bmr / tdee) * 100));
	const actPct = $derived(100 - bmrPct);
	const fmt = (n: number) => n.toLocaleString('en-US');
</script>

<section class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<div class="grid grid-cols-3 gap-2">
		<Card text="DAILY CALORIES" value={`${Math.round(tdee)} kcal`} variant="primary" />
		<Card text="CARBS" value={`${carbs} g`} />
		<Card text="FAT" value={`${fat} g`} />
		<Card text="PROTEIN" value={`${protein} g`} />
	</div>
</section>

<section class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3" aria-labelledby="energy-title">
	<h2 id="energy-title" class="mb-3 text-sm tracking-wider text-mist-800 uppercase">
		Where your calories go
	</h2>

	<div class="rounded-sm border border-gray-300 bg-white p-3 tabular-nums">
		<!-- BMR -->
		<div class="pb-2.5">
			<div class="flex items-baseline justify-between gap-2">
				<span class="text-sm tracking-wider text-mist-800 uppercase">BMR</span>
				<span class="text-xl font-bold tracking-tighter text-mist-950">
					{fmt(bmr)} <span class="text-sm font-normal tracking-normal text-gray-600">kcal</span>
				</span>
			</div>
			<div
				class="mt-2 h-3 overflow-hidden rounded-sm border border-gray-500 bg-white"
				aria-hidden="true"
			>
				<div class="h-full border-e border-gray-500 bg-teal-200" style="width: {bmrPct}%"></div>
			</div>
			<p class="mt-1.5 text-sm text-gray-600">{bmrPct}% &middot; at rest</p>
		</div>

		<!-- Activity -->
		<div class="border-t border-gray-200 pt-2.5">
			<div class="flex items-baseline justify-between gap-2">
				<span class="text-sm tracking-wider text-mist-800 uppercase">Activity</span>
				<span class="text-xl font-bold tracking-tighter text-mist-950">
					{fmt(activity)}
					<span class="text-sm font-normal tracking-normal text-gray-600">kcal</span>
				</span>
			</div>
			<div
				class="mt-2 h-3 overflow-hidden rounded-sm border border-gray-500 bg-white"
				aria-hidden="true"
			>
				<div class="h-full border-e border-gray-500 bg-purple-100" style="width: {actPct}%"></div>
			</div>
			<p class="mt-1.5 text-sm text-gray-600">{actPct}% · movement and training</p>
		</div>
	</div>
</section>

<form class="mx-2 mb-2.5 space-y-6 rounded-sm bg-gray-100 p-3">
	<fieldset>
		<legend class="mb-3 text-sm tracking-wider text-mist-800 uppercase"> Your body </legend>
		<div class="space-y-4">
			<Radio
				text="Gender"
				name="gender"
				options={[
					{ value: 'female', label: 'Female' },
					{ value: 'male', label: 'Male' }
				]}
				bind:value={gender}
			/>

			<div class="grid grid-cols-3 gap-3">
				<div class="flex flex-col gap-1.5">
					<Number
						id="weight"
						text="Weight (kg)"
						name="weight"
						min={40}
						max={400}
						step={0.1}
						inputmode="decimal"
						placeholder="60"
						bind:value={weight}
					/>
				</div>
				<div class="flex flex-col gap-1.5">
					<Number
						id="height"
						text="Height (cm)"
						name="height"
						min={130}
						max={230}
						step={1}
						inputmode="numeric"
						placeholder="160"
						bind:value={height}
					/>
				</div>
				<div class="flex flex-col gap-1.5">
					<Number
						id="age"
						text="Age"
						name="age"
						min={18}
						max={99}
						step={1}
						inputmode="numeric"
						placeholder="42"
						bind:value={age}
					/>
				</div>
			</div>

			<Select
				id="activity"
				text="Activity level"
				name="activity"
				options={[
					{ value: 'sedentary', label: 'Sedentary' },
					{ value: 'light', label: 'Light' },
					{ value: 'moderate', label: 'Moderate' },
					{ value: 'heavy', label: 'Heavy' },
					{ value: 'veryHeavy', label: 'Very heavy' }
				]}
				bind:value={activityLevel}
			/>

			<Select
				id="goal"
				text="Goal"
				name="goal"
				options={[
					{ value: 'moderateLose', label: 'Cut' },
					{ value: 'mildLose', label: 'Mild cut' },
					{ value: 'maintain', label: 'Maintain' },
					{ value: 'mildGain', label: 'Mild bulk' },
					{ value: 'moderateGain', label: 'Bulk' }
				]}
				bind:value={goal}
			/>

			<Radio
				text="Macro split"
				name="macro"
				options={[
					{ value: 'weightlifting', label: 'Weightlifting' },
					{ value: 'balanced', label: 'Balanced' },
					{ value: 'keto', label: 'Keto' }
				]}
				bind:value={macro}
			/>
		</div>
	</fieldset>
</form>
