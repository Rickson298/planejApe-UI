<script>
	import { THEME_COLORS } from '../shared/tokens';

	const ARRAY_COLORS = Object.entries(THEME_COLORS);
</script>

<div class="colors__container">
	{#each ARRAY_COLORS as color}
		<div class="colors__item" style="background-color:{color[1]};">{color[0]}</div>
	{/each}
</div>

<style lang="scss">
	.color__container {
		background: red;
	}
</style>
