<script lang="ts">
	let { href, text } = $props();
</script>

<a {href} class="mx-auto flex justify-center">
	<span class="border-black-400 w-64 rounded-sm border py-6 text-center">{text}</span>
</a>
