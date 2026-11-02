<script lang="ts">
	import Card from '#lib/components/Card.svelte';
</script>

<div class="mx-2 mb-2.5 grid grid-cols-2 gap-2 rounded-sm bg-gray-100 p-3">
	<Card text="LOAD THE BAR" value="100 kg" variant="primary" />
	<Card text="1RM" value="115.9 kg" />
	<Card text="% 1RM" value="86" />
</div>

<form class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<fieldset class="mb-5 text-xs">
		<legend class="mb-2">LAST SET</legend>
		<div class="mb-2 flex flex-col text-sm">
			<label for="weight" class="mb-1">Weight (kg)</label>
			<input
				type="number"
				name="last-set"
				id="weight"
				min="1"
				max="500"
				class="w-full rounded-sm border-gray-300"
			/>
		</div>
		<div class="mb-2 flex flex-col text-sm">
			<label for="reps" class="mb-1">Reps</label>
			<input
				type="number"
				name="last-set"
				id="reps"
				min="1"
				max="12"
				class="w-full rounded-sm border-gray-300"
			/>
		</div>
		<div class="mb-2 flex flex-col text-sm">
			<label for="rpe" class="mb-1">RPE</label>
			<input
				type="range"
				name="last-set"
				id="rpe"
				min="6"
				max="10"
				step="0.5"
				class="w-full rounded-sm accent-teal-200"
			/>
		</div>
	</fieldset>

	<fieldset class="text-xs">
		<legend class="mb-2">NEXT SET</legend>
		<div class="mb-2 flex flex-col text-sm">
			<label for="target-reps" class="mb-1">Target reps</label>
			<input
				type="number"
				name="next-set"
				id="target-reps"
				min="1"
				max="12"
				class="w-full rounded-sm border-gray-300"
			/>
		</div>
		<div class="mb-2 flex flex-col text-sm">
			<label for="target-rpe" class="mb-1">Target RPE</label>
			<input
				type="range"
				name="next-set"
				id="target-rpe"
				min="6"
				max="10"
				step="0.5"
				class="w-full rounded-sm accent-teal-200"
			/>
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
