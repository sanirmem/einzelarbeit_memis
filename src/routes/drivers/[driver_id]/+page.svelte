<script>
  let { data } = $props();
  let driver = data.driver;
</script>

<button class="btn btn-secondary mb-3" onclick={() => history.back()}>
  ← Back
</button>

<h1>{driver.name}</h1>
<img src={driver.poster} alt={driver.name} width="200" class="img-fluid mb-3" />

<div style="max-width: 500px;">
  <ul class="list-group">
    <li class="list-group-item bg-dark text-white"><strong>Nationality:</strong> {driver.nationality}</li>
    <li class="list-group-item bg-dark text-white"><strong>Birthdate:</strong> {driver.birthdate}</li>
    <li class="list-group-item bg-dark text-white"><strong>Points:</strong> {driver.points}</li>
    <li class="list-group-item bg-dark text-white"><strong>Championships:</strong> {driver.championships}</li>
    <li class="list-group-item bg-dark text-white"><strong>Team:</strong> {driver.team}</li>
  </ul>
</div>
