<script lang="ts">
	type Option = { value: string; label: string };

	let {
		id,
		text,
		name,
		options,
		value = $bindable(options[0]?.value)
	}: {
		id: string;
		text: string;
		name: string;
		options: Option[];
		value?: string;
	} = $props();
</script>

<div class="flex flex-col gap-1.5">
	<label for={id} class="text-sm tracking-tighter text-mist-800">{text}</label>

	<select
		{id}
		{name}
		bind:value
		class="h-12 w-full cursor-pointer appearance-none rounded-md border border-gray-300 bg-white ps-3 pe-10 text-base text-gray-900 focus:border-teal-300 focus:ring-1 focus:ring-teal-200/30 focus:outline-none"
	>
		{#each options as option (option.value)}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</div>
