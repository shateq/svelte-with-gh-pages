<script>
	let count = 0;

	function inc() {
		count += 1;
	}
</script>

<h1>Hello there</h1>
<p>Your styling has been applied :)
	It IS svelte, seriously, just look at the button below
</p>
<a href="https://github.com/">github probably</a>

<button on:click={inc}>{count}</button>

<style>
	p {
		font-family: Arial, sans-serif;
	}
</style>
