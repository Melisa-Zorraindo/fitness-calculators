<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import Header from '#lib/components/Header.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-dvh flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
