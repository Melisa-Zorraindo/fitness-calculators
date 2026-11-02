<script lang="ts">
	import NavigationButton from './NavigationButton.svelte';
</script>

<nav>
	<a href="./" class="flex">
		<!-- <span class="icon-[fa7-solid--zap]"></span> -->
		<span class="">fitness calculators</span>
	</a>
	<div class="mx-2 my-10 grid grid-cols-3 grid-rows-1 gap-1 rounded-sm bg-gray-100 p-3">
		<NavigationButton href="/" text="Lift" />
		<NavigationButton href="nutrition" text="Eat" />
		<NavigationButton href="health" text="Body" />
	</div>
</nav>
