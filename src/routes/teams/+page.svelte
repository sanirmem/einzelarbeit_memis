<script>
  import TeamCard from '$lib/components/TeamCard.svelte';
  let { data } = $props();
  let teams = data.teams;
</script>

<h1 class="mb-4">All Teams</h1>

<!-- Add Team Button -->
<a href="/teams/add" class="btn btn-success mb-4">+ Add Team</a>

<div class="row">
  {#each teams as team}
    <div class="col-md-4 mb-4">
      <TeamCard {team} />
    </div>
  {/each}
</div>
