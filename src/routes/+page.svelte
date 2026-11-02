<script lang="ts">
	import Card from '#lib/components/Card.svelte';
</script>

<div class="mx-2 mb-2.5 grid grid-cols-2 gap-2 rounded-sm bg-gray-100 p-3">
	<Card text="LOAD THE BAR" value="100 kg" variant="primary" />
	<Card text="1RM" value="115.9 kg" />
	<Card text="% 1RM" value="86" />
</div>

<form class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<fieldset>
		<span>last set</span>
		<div>
			<label for="weight">weight</label>
			<input type="number" name="last-set" id="weight" />
		</div>
		<div>
			<label for="reps">reps</label>
			<input type="number" name="last-set" id="reps" />
		</div>
		<div>
			<label for="rpe">RPE</label>
			<input type="number" name="last-set" id="rpe" />
		</div>
	</fieldset>

	<fieldset>
		<span>next set</span>
		<div>
			<label for="reps">target reps</label>
			<input type="number" name="next-set" id="target-reps" />
		</div>
		<div>
			<label for="rpe">target RPE</label>
			<input type="number" name="next-set" id="target-rpe" />
		</div>
	</fieldset>
</form>

<div class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<div class="overflow-hidden rounded-lg border border-gray-300">
		<table
			class="w-full table-auto border-collapse text-sm
			[&_tbody_tr:last-child>*]:border-b-0
			[&_thead_th]:border-t-0
			[&_tr>:first-child]:border-l-0
			[&_tr>:last-child]:border-r-0"
		>
			<caption>Reps ladder load in relation to RPE and RIR</caption>
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
</div>
