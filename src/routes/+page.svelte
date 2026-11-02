<script lang="ts">
</script>

<div class="mx-2 mb-2.5 grid grid-cols-2 gap-2 rounded-sm bg-gray-100 p-3">
	<div class="col-span-2 rounded-sm border border-teal-400 bg-teal-300 px-1.5 py-4">
		<h1 class="text-xs tracking-wider text-mist-800">LOAD THE BAR</h1>
		<span class="text-6xl font-extrabold tracking-tighter text-mist-950">100 kg</span>
	</div>

	<div class="rounded-sm border border-purple-200 bg-purple-100 p-1.5">
		<h2 class="text-xs tracking-wider text-mist-800">1RM</h2>
		<span class="text-3xl font-bold tracking-tighter text-mist-950">115.9 kg</span>
	</div>

	<div class="rounded-sm border border-purple-200 bg-purple-100 p-1.5">
		<h2 class="text-xs tracking-wider text-mist-800">% 1RM</h2>
		<span class="text-3xl font-bold tracking-tighter text-mist-950">86</span>
	</div>
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

<table>
	<thead>
		<tr>
			<td>RPE ladder</td>
		</tr>
	</thead>
</table>
