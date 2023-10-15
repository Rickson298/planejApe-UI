<script>
	import Skeleton from './Skeleton.svelte';
</script>

<Skeleton isLoading>
	<div class="ball" />
</Skeleton>

<style lang="scss">
	.ball {
		border-radius: 50%;
		width: 100px;
		height: 100px;
	}
</style>
