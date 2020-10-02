<script>
    import { slide } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
    import Player from "./Components/Players.svelte";
    export let region;
    export let onClose;
    const players = region.players.sort((player1, player2) => {
        let player1Appearances = 0;
        let player2Appearances = 0;

        player1.seasons.forEach(
            (season) => (player1Appearances += season.appearances)
        );
        player2.seasons.forEach(
            (season) => (player2Appearances += season.appearances)
        );

        return player2Appearances - player1Appearances;
    });
</script>

<style>
    .modal-overlay {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: #333;
        opacity: 0.5;
        z-index: 5;
    }

    .container {
        position: fixed;
        z-index: 10;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .modal {
        padding: 10px;
        overflow-y: scroll;
        text-align: center;
        border-radius: 7px;
        background-color: #fff;
        box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
        height: 420px;
    }

    @media (min-width: 400px) {
        .modal {
            height: 520px;
        }
    }

    @media (min-width: 820px) {
        .container {
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;
        }
        .modal {
            width: 820px;
            height: 620px;
        }
    }

    .header {
        margin-bottom: 20px;
    }

    .header-back-button {
        position: absolute;
    }

    .header-back-button > button {
        width: 32px;
        height: 32px;
        padding: 0;
        background: #f5f5f5;
    }

    .header-title {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .header-title > h1 {
        margin: 0;
        font-size: 1.4em;
    }

    .body-players {
        display: flex;
        flex-direction: column;
    }

    .body-players > h2 {
        font-size: 1.2em;
    }
</style>

<p>this is the information for {region.name}</p>
<div class="modal-overlay" />

<section
    class="container"
    transition:slide={{ duration: 200, easing: quintInOut }}>
    <div class="modal">
        <header class="header" />
        <section class="body">
            {#if region.overallApearances > 0}
                <div class=" body-stats">
                    Number of appearances by players from this region during
                    winning seasons:
                    <b>{region.overallAppearances}</b>
                </div>
                <div class="body-players">
                    <h2>Players</h2>
                    {#each players as { name, seasons }}
                        <Player {name} {seasons} />
                    {/each}
                </div>
            {:else}
                <div class="body-stats">
                    this region hasn't contributed to the english premier league
                </div>
            {/if}
        </section>
    </div>
</section>
