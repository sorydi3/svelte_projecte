<script>
	import regions from "./Data/regionPaths.js";
	import MapContainer from "./Components/MapContainer.svelte";
	import MapRegion from "./Components/MapRegion.svelte";
	import GetRegionData from "./Data/getRegionData";
	import getRegionData from "./Data/getRegionData";
	import RegionInformation  from "./Components/RegionInformation.svelte"
	let activeRegion = "no region selected";
</script>

<style>
	.app {
		display: flex;
	}

	.map-container {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		display: flex;
		justify-content: center;
	}

	@media (max-width: 860px) {
		.app {
			flex-direction: column;
		}

		.map-container {
			position: relative;
		}
	}
</style>

<main class="app">
	<h1>{activeRegion}</h1>
	<RegionInformation region = {getRegionData('Derbyshire')}/>
	<div class="map-container">
		<MapContainer>
			{#each regions as { name, svgPath }}
				<MapRegion
					{svgPath}
					fillColour={activeRegion === name ? '#333' : getRegionData(name).colour}
					strokeColour="white"
					strokeWidth="1px"
					on:click={() => {
						activeRegion = name;
						console.log(getRegionData(name));

					}} />
			{/each}
		</MapContainer>
	</div>
</main>
