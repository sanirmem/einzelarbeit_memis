<script>
  import DriverCard from '$lib/components/DriverCard.svelte';
  let { data } = $props();
  let team = data.team;
  let drivers = data.drivers;
</script>

<a href="/teams" class="btn btn-secondary mb-3">← Back to Teams</a>

<h1>{team.name}</h1>

<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src={team.poster} alt={team.name} />
  </div>

  <div class="col">
    <p><strong>Country:</strong> {team.country}</p>
    <p><strong>Founded:</strong> {team.founded}</p>
    <p><strong>Engine:</strong> {team.engine}</p>

    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={team._id}>
      <button class="btn btn-danger">Delete Team</button>
    </form>
  </div>
</div>

<h2 class="mt-5">Drivers</h2>

<a class="btn btn-success mb-3" href={`/teams/${team._id}/add-driver`}>+ Add Driver</a>

{#if drivers.length > 0}
  <div class="row">
    {#each drivers as driver}
      <div class="col-md-3 mb-4">
        <DriverCard {driver} />
      </div>
    {/each}
  </div>
{:else}
  <p>No drivers assigned to this team.</p>
{/if}
