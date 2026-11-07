<script lang="ts">
	import { page } from '$app/state';

	let { href, text }: { href: string; text: string } = $props();

	const active = $derived(page.url.pathname === href);
</script>

<a
	{href}
	aria-current={active ? 'page' : undefined}
	class="flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-sm text-mist-800 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:outline-none aria-[current=page]:border-teal-300 aria-[current=page]:bg-teal-200 aria-[current=page]:font-semibold aria-[current=page]:text-mist-950"
>
	{text}
</a>
