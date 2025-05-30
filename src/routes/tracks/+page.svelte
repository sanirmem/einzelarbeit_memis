<script>
  import TrackCard from '$lib/components/TrackCard.svelte';

  const { data } = $props();
  const tracks = data.tracks;
  let search = $state('');
</script>

<h1 class="mb-4">F1 Tracks</h1>

<a href="/tracks/add" class="btn btn-success mb-4">+ Add Track</a>

<div class="mb-4">
  <input
    type="text"
    class="form-control"
    placeholder="Search tracks by name or location..."
    bind:value={search}
  />
</div>

<div class="row">
  {#each tracks.filter(track =>
    track.name.toLowerCase().includes(search.toLowerCase()) ||
    track.location.toLowerCase().includes(search.toLowerCase())
  ) as track}
    <div class="col-md-4 mb-4">
      <TrackCard {track} />
    </div>
  {/each}
</div>
