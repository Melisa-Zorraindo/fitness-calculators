<script lang="ts">
	import NavigationButton from './NavigationButton.svelte';
</script>

<header class="mx-2 mt-2 mb-2.5 rounded-sm bg-gray-100 p-3">
	<div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
		<a
			href="/"
			class="flex items-center gap-2 rounded-sm text-lg font-bold tracking-tighter text-mist-950 focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:outline-none"
		>
			<span class="icon-[fa7-solid--zap] size-4 text-mist-800" aria-hidden="true"></span>
			<span>fitness calculators</span>
		</a>

		<!-- grid-cols-3 cuando /health este activa -->
		<nav aria-label="Main" class="grid grid-cols-2 gap-2 sm:w-80">
			<NavigationButton href="/" text="Lift" />
			<NavigationButton href="/nutrition" text="Eat" />
			<!-- <NavigationButton href="/health" text="Body" /> -->
		</nav>
	</div>
</header>
