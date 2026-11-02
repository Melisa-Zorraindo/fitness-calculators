<script lang="ts">
	type Variant = 'primary' | 'secondary';

	let {
		text,
		value,
		variant = 'secondary',
		class: className = ''
	}: {
		text: string;
		value: string | number;
		variant?: Variant;
		class?: string;
	} = $props();

	const variants = {
		primary: {
			container: 'col-span-full border-teal-300 bg-teal-200 px-1.5 py-4',
			title: 'text-xs',
			value: 'text-6xl font-extrabold'
		},
		secondary: {
			container: 'border-purple-200 bg-purple-100 p-1.5',
			title: 'text-xs',
			value: 'text-3xl font-bold'
		}
	} satisfies Record<Variant, Record<string, string>>;

	const v = $derived(variants[variant]);
</script>

<div class="rounded-sm border {v.container} {className}">
	<h2 class="tracking-wider text-mist-800 {v.title}">{text}</h2>
	<span class="tracking-tighter text-mist-950 {v.value}">{value}</span>
</div>
