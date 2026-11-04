<script lang="ts">
	import Card from '#lib/components/Card.svelte';
	import Number from '#lib/components/inputs/Number.svelte';
</script>

<div class="mx-2 mb-2.5 grid grid-cols-2 gap-2 rounded-sm bg-gray-100 p-3">
	<Card text="LOAD THE BAR" value="100 kg" variant="primary" />
	<Card text="1RM" value="115.9 kg" />
	<Card text="% 1RM" value="86" />
</div>

<form class="mx-2 mb-2.5 space-y-6 rounded-sm bg-gray-100 p-3">
	<fieldset>
		<legend class="mb-3 text-xs tracking-wider text-mist-800 uppercase"> Last set </legend>

		<div class="space-y-4">
			<div class="grid grid-cols-2 gap-3">
				<div class="flex flex-col gap-1.5">
					<Number
						id="weight"
						text="Weight (kg)"
						name="weight"
						min="1"
						max="500"
						step="0.5"
						inputmode="decimal"
						placeholder="100"
					/>
				</div>
				<div class="flex flex-col gap-1.5">
					<Number
						id="reps"
						text="Reps"
						name="reps"
						min="1"
						max="12"
						step="1"
						inputmode="numeric"
						placeholder="5"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-1">
				<div class="flex items-baseline justify-between">
					<label for="rpe" class="text-sm tracking-tighter text-mist-800">RPE</label>
					<output for="rpe" class="text-lg font-semibold text-gray-900 tabular-nums">8</output>
				</div>
				<input
					type="range"
					id="rpe"
					name="rpe"
					min="6.5"
					max="10"
					step="0.5"
					value="8"
					class="h-11 w-full accent-teal-200"
				/>
				<div class="flex justify-between text-xs text-gray-500">
					<span>6.5 · easy</span><span>10 · max</span>
				</div>
			</div>
		</div>
	</fieldset>

	<fieldset>
		<legend class="mb-3 text-xs tracking-wider text-mist-800 uppercase"> Next set </legend>

		<div class="space-y-4">
			<div class="flex flex-col gap-1.5">
				<Number
					id="target-reps"
					text="Target reps"
					name="target-reps"
					min="1"
					max="12"
					step="1"
					inputmode="numeric"
					placeholder="3"
				/>
			</div>

			<div class="flex flex-col gap-1">
				<div class="flex items-baseline justify-between">
					<label for="target-rpe" class="text-sm tracking-tighter text-mist-800">Target RPE</label>
					<output for="target-rpe" class="text-lg font-semibold text-gray-900 tabular-nums"
						>8</output
					>
				</div>
				<input
					type="range"
					id="target-rpe"
					name="target-rpe"
					min="6.5"
					max="10"
					step="0.5"
					value="8"
					class="h-11 w-full accent-teal-200"
				/>
			</div>
		</div>
	</fieldset>
</form>

<div class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<table class="w-full table-auto border-collapse border border-gray-300 text-sm">
		<caption class="pb-2 text-xs">Reps ladder load in relation to RPE and RIR</caption>
		<thead>
			<tr>
				<th class="border border-gray-300">reps</th>
				<th class="border border-gray-300">% 1RM</th>
				<th class="border border-gray-300">RPE</th>
				<th class="border border-gray-300">RIR</th>
				<th class="border border-gray-300">load kg</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="border border-gray-300 pr-1 text-right">1</td>
				<td class="border border-gray-300 pr-1 text-right">100</td>
				<td class="border border-gray-300 pr-1 text-right">10</td>
				<td class="border border-gray-300 pr-1 text-right">0</td>
				<td class="border border-gray-300 pr-1 text-right">125</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">2</td>
				<td class="border border-gray-300 pr-1 text-right">90</td>
				<td class="border border-gray-300 pr-1 text-right">9</td>
				<td class="border border-gray-300 pr-1 text-right">1</td>
				<td class="border border-gray-300 pr-1 text-right">100</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">3</td>
				<td class="border border-gray-300 pr-1 text-right">80</td>
				<td class="border border-gray-300 pr-1 text-right">8</td>
				<td class="border border-gray-300 pr-1 text-right">2</td>
				<td class="border border-gray-300 pr-1 text-right">90</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">4</td>
				<td class="border border-gray-300 pr-1 text-right">70</td>
				<td class="border border-gray-300 pr-1 text-right">7</td>
				<td class="border border-gray-300 pr-1 text-right">3</td>
				<td class="border border-gray-300 pr-1 text-right">80</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">5</td>
				<td class="border border-gray-300 pr-1 text-right">60</td>
				<td class="border border-gray-300 pr-1 text-right">6</td>
				<td class="border border-gray-300 pr-1 text-right">4</td>
				<td class="border border-gray-300 pr-1 text-right">70</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">6</td>
				<td class="border border-gray-300 pr-1 text-right">50</td>
				<td class="border border-gray-300 pr-1 text-right">5</td>
				<td class="border border-gray-300 pr-1 text-right">5</td>
				<td class="border border-gray-300 pr-1 text-right">60</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">7</td>
				<td class="border border-gray-300 pr-1 text-right">40</td>
				<td class="border border-gray-300 pr-1 text-right">4</td>
				<td class="border border-gray-300 pr-1 text-right">6</td>
				<td class="border border-gray-300 pr-1 text-right">50</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">8</td>
				<td class="border border-gray-300 pr-1 text-right">30</td>
				<td class="border border-gray-300 pr-1 text-right">3</td>
				<td class="border border-gray-300 pr-1 text-right">7</td>
				<td class="border border-gray-300 pr-1 text-right">40</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">9</td>
				<td class="border border-gray-300 pr-1 text-right">20</td>
				<td class="border border-gray-300 pr-1 text-right">2</td>
				<td class="border border-gray-300 pr-1 text-right">8</td>
				<td class="border border-gray-300 pr-1 text-right">30</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">10</td>
				<td class="border border-gray-300 pr-1 text-right">10</td>
				<td class="border border-gray-300 pr-1 text-right">1</td>
				<td class="border border-gray-300 pr-1 text-right">9</td>
				<td class="border border-gray-300 pr-1 text-right">20</td>
			</tr>

			<tr>
				<td class="border border-gray-300 pr-1 text-right">11</td>
				<td class="border border-gray-300 pr-1 text-right">5</td>
				<td class="border border-gray-300 pr-1 text-right">1</td>
				<td class="border border-gray-300 pr-1 text-right">10</td>
				<td class="border border-gray-300 pr-1 text-right">10</td>
			</tr>
			<tr>
				<td class="border border-gray-300 pr-1 text-right">12</td>
				<td class="border border-gray-300 pr-1 text-right">0</td>
				<td class="border border-gray-300 pr-1 text-right">0</td>
				<td class="border border-gray-300 pr-1 text-right">11</td>
				<td class="border border-gray-300 pr-1 text-right">5</td>
			</tr>
		</tbody>
	</table>
</div>
