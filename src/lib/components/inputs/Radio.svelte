<script lang="ts">
	type Option = { value: string; label: string };

	let {
		text,
		name,
		options,
		value = $bindable(options[0]?.value)
	}: {
		text: string;
		name: string;
		options: Option[];
		value?: string;
	} = $props();
</script>

<fieldset>
	<legend class="mb-1.5 text-sm tracking-tighter text-mist-800">{text}</legend>

	<div class="flex flex-wrap justify-between gap-2">
		{#each options as option (option.value)}
			<label
				class="flex h-10 min-w-24 flex-1 cursor-pointer items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-sm text-mist-800 select-none has-checked:border-teal-300 has-checked:bg-teal-200 has-checked:font-semibold has-checked:text-mist-950 has-focus-visible:ring-2 has-focus-visible:ring-teal-300"
			>
				<input type="radio" {name} value={option.value} bind:group={value} class="sr-only" />
				{option.label}
			</label>
		{/each}
	</div>
</fieldset>
