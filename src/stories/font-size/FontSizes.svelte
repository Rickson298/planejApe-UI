<script>
	import { FONT_SIZES } from '../../shared/tokens/font';
</script>

<div class="font-sizes__container">
	{#each FONT_SIZES as fontSize}
		<span style:font-size={fontSize}>{fontSize}</span>
	{/each}
</div>

<style lang="scss">
	.font-sizes__container {
		display: flex;
		flex-direction: column;
		color: rgb(119, 119, 119);
	}
</style>
