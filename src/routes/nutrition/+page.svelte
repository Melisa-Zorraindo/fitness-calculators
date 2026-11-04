<script lang="ts">
	import Card from '#lib/components/Card.svelte';

	let { bmr = 1200, activity = 800 }: { bmr?: number; activity?: number } = $props();

	const tdee = $derived(bmr + activity);
	const bmrPct = $derived(Math.round((bmr / tdee) * 100));
	const actPct = $derived(100 - bmrPct);
	const fmt = (n: number) => n.toLocaleString('en-US');
</script>

<section class="mx-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<div class="grid grid-cols-3 gap-2">
		<Card text="DAILY CALORIES" value="2000 kcal" variant="primary" />
		<Card text="PROTEIN" value="110 g" />
		<Card text="CARBS" value="250 g" />
		<Card text="FAT" value="68 g" />
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
				<span class="text-1xl font-bold tracking-tighter text-mist-950">
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
				<span class="text-1xl font-bold tracking-tighter text-mist-950">
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
