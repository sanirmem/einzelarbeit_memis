<script>

    import { onMount } from 'svelte';

    let { children } = $props();
    let isMuted = $state(false);

    onMount(() => {
        if (window.__f1theme) {
            isMuted = window.__f1theme.muted;
        }
    });

    function toggleMute() {
        if (window.__f1theme) {
            window.__f1theme.muted = !window.__f1theme.muted;
            isMuted = window.__f1theme.muted;
        }
    }
</script>

<nav
    class="navbar navbar-expand-lg bg-body-tertiary bg-dark"
    data-bs-theme="dark"
>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Formula 1 Explorer</a>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/teams">Teams</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/tracks">Tracks</a>
                </li>
            </ul>
            <button class="btn btn-outline-light" onclick={toggleMute} title="Toggle Theme Sound">
                {#if isMuted}
                    🔈
                {:else}
                    🔇
                {/if}
            </button>
        </div>
    </div>
</nav>

<div class="container mt-3">
    {@render children()}
</div>
