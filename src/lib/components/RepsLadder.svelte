<script lang="ts">
	type Row = { reps: number; pct: number; rpe: number; rir: number; load: number };

	let { rows, targetReps }: { rows: Row[]; targetReps?: number } = $props();
</script>

<div class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<div class="rounded-sm border border-gray-300 bg-white px-3 py-2.5">
		<div
			role="region"
			aria-label="Reps ladder table, scrolls horizontally"
			tabindex="-1"
			class="overflow-x-auto focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:outline-none"
		>
			<table class="w-full border-collapse text-sm tabular-nums">
				<caption class="pb-2 text-start text-sm text-mist-800">
					Reps ladder: load by RPE and RIR
				</caption>

				<thead>
					<tr>
						<th
							scope="col"
							class="border-b border-gray-500 px-2 py-1.5 text-start text-xs font-normal tracking-wider text-mist-800 uppercase"
							>Reps</th
						>
						<th
							scope="col"
							class="border-b border-gray-500 px-2 py-1.5 text-end text-xs font-normal tracking-wider text-mist-800 uppercase"
							>% 1RM</th
						>
						<th
							scope="col"
							class="border-b border-gray-500 px-2 py-1.5 text-end text-xs font-normal tracking-wider text-mist-800 uppercase"
							>RPE</th
						>
						<th
							scope="col"
							class="border-b border-gray-500 px-2 py-1.5 text-end text-xs font-normal tracking-wider text-mist-800 uppercase"
							>RIR</th
						>
						<th
							scope="col"
							class="border-b border-gray-500 px-2 py-1.5 text-end text-xs font-normal tracking-wider text-mist-800 uppercase"
							>Load kg</th
						>
					</tr>
				</thead>

				<tbody>
					{#each rows as row (row.reps)}
						{@const on = row.reps === targetReps}
						{@const cell = on ? 'border-y border-gray-700' : 'border-b border-gray-200'}
						<tr
							aria-current={on ? 'true' : undefined}
							class={on ? 'bg-teal-200 font-semibold' : 'even:bg-gray-50'}
						>
							<td class="px-2 py-2 text-start text-mist-950 {cell}">{row.reps}</td>
							<td class="px-2 py-2 text-end text-gray-800 {cell}">{row.pct}</td>
							<td class="px-2 py-2 text-end text-gray-800 {cell}">{row.rpe}</td>
							<td class="px-2 py-2 text-end text-gray-800 {cell}">{row.rir}</td>
							<td class="px-2 py-2 text-end font-bold text-mist-950 {cell}">{row.load}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
