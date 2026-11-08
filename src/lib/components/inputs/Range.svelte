<script lang="ts">
	let {
		id,
		text,
		name,
		min,
		max,
		step = 0.5,
		value = $bindable(min),
		minLabel,
		maxLabel
	}: {
		id: string;
		text: string;
		name: string;
		min: number;
		max: number;
		step?: number;
		value?: number;
		minLabel?: string;
		maxLabel?: string;
	} = $props();

	const pct = $derived(((value - min) / (max - min)) * 100);

	// Full class names are kept as whole strings so Tailwind can detect them.
	const track =
		'[&::-webkit-slider-runnable-track]:box-border [&::-webkit-slider-runnable-track]:h-3 [&::-webkit-slider-runnable-track]:rounded-sm [&::-webkit-slider-runnable-track]:border [&::-webkit-slider-runnable-track]:border-gray-500 [&::-webkit-slider-runnable-track]:bg-[image:var(--track)] ' +
		'[&::-moz-range-track]:box-border [&::-moz-range-track]:h-3 [&::-moz-range-track]:rounded-sm [&::-moz-range-track]:border [&::-moz-range-track]:border-gray-500 [&::-moz-range-track]:bg-[image:var(--track)]';

	const thumb =
		'[&::-webkit-slider-thumb]:box-border [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gray-700 [&::-webkit-slider-thumb]:bg-teal-200 ' +
		'[&::-moz-range-thumb]:box-border [&::-moz-range-thumb]:size-5 [&::-moz-range-thumb]:rounded-sm [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gray-700 [&::-moz-range-thumb]:bg-teal-200';

	const focus =
		'focus:outline-none [&:focus-visible::-webkit-slider-thumb]:ring-2 [&:focus-visible::-webkit-slider-thumb]:ring-teal-300 [&:focus-visible::-moz-range-thumb]:ring-2 [&:focus-visible::-moz-range-thumb]:ring-teal-300';
</script>

<div class="flex flex-col gap-1">
	<div class="flex items-baseline justify-between">
		<label for={id} class="text-sm tracking-tighter text-mist-800">{text}</label>
		<output for={id} class="text-lg font-semibold text-gray-900 tabular-nums">{value}</output>
	</div>

	<input
		type="range"
		{id}
		{name}
		{min}
		{max}
		{step}
		bind:value
		style="--track: linear-gradient(to right, var(--color-teal-200) {pct}%, white {pct}%)"
		class="h-11 w-full cursor-pointer appearance-none bg-transparent {track} {thumb} {focus}"
	/>

	{#if minLabel || maxLabel}
		<div class="flex justify-between text-sm text-gray-600">
			<span>{minLabel}</span><span>{maxLabel}</span>
		</div>
	{/if}
</div>
