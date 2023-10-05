<script>
	import Flex from './Flex.svelte';
</script>

<Flex height="300px" width="50vw" padding="1rem" class="flex__container" {...$$restProps}>
	<div class="flex__child 1">Item 1</div>
	<div class="flex__child 2">Item 2</div>
	<div class="flex__child 3">Item 3</div>
</Flex>

<style lang="scss">
	:global(.flex__container) {
		background: var(--blue-600);
		transition: all ease 0.2s;
		border-radius: 0.5rem;
		position: relative;
		overflow: hidden;

		&::after {
			content: '';
			position: absolute;
			height: 200px;
			width: 200px;
			background: var(--blue-500);
			top: -2rem;
			left: -2rem;
			z-index: 0;
			border-radius: 50%;
			filter: blur(15px);
		}
	}

	.flex__child {
		background: var(--blue-500);
		color: white;
		padding: 1rem 2rem;
		border: 2px solid var(--blue-400);
		border-radius: 0.5rem;
		position: relative;
		z-index: 1;
		overflow: hidden;
		box-shadow: 5px 0px 10px black;
		transition: all ease 0.2s;

		&:hover {
			box-shadow: 2px 0px 5px black;
			&::after {
				transform: translateX(50%);
				width: 100%;
			}
		}

		&:after {
			content: '';
			position: absolute;
			left: 0;
			background: rgba(25, 255, 255, 0.1);
			filter: blur(15px);
			top: 0;
			height: 100%;
			width: 50%;
			z-index: -1;
			transition: all ease 0.2s;
		}
	}
</style>
