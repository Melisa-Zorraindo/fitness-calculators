<script lang="ts">
	let { id, text, name, min, max, step, inputmode, placeholder } = $props();
</script>

<label for={id} class="text-sm tracking-tighter text-mist-800">{text}</label>
<input
	type="number"
	{id}
	{name}
	{min}
	{max}
	{step}
	{inputmode}
	{placeholder}
	class="h-12 w-full rounded-md border border-gray-300 bg-white px-3 text-base text-gray-900 tabular-nums placeholder:text-gray-400 focus:border-teal-300 focus:ring-1 focus:ring-teal-200/30 focus:outline-none"
/>
