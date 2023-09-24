<script>
	import { THEME_COLORS } from '../../shared/tokens';
	import { darken, getContrast } from 'polished';

	const ARRAY_COLORS = Object.entries(THEME_COLORS);
</script>

<div class="colors__container">
	{#each ARRAY_COLORS as color}
		{@const [colorName, variant] = color[0].split('-')}
		{@const darkenColor = darken(0.5, color[1])}
		{@const isDarkBackground = getContrast(color[1], '#000') < 5}

		<div class="colors__item" style:background="linear-gradient({color[1]}, {color[1]}99)">
			<span class="color-name" style="color:{isDarkBackground ? 'white' : darkenColor}">
				{colorName}
			</span>
			<span class="color-variant" style="color:{isDarkBackground ? 'white' : darkenColor}">
				{variant || ''}
			</span>
		</div>
	{/each}
</div>

<style lang="scss">
	.colors__container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		padding: 1rem;

		.colors__item {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100px;
			border-radius: 0.5rem;
			flex-direction: column;

			.color-name {
				font-size: 1.25rem;
				font-weight: 500;
				text-transform: capitalize;
			}
		}
	}
</style>
