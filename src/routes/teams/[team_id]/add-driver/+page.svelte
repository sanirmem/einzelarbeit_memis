<script>
  let { data } = $props();
  let team = data.team;
</script>

<a href={`/teams/${team._id}`} class="btn btn-secondary mb-3">← Back to Team</a>

<h1>Add Driver to {team.name}</h1>

<form method="POST" class="row g-3 mt-3">
  <input type="hidden" name="team" value={team.name} />

  <div class="col-md-6">
    <label class="form-label" for="name">Name</label>
    <input class="form-control" id="name" name="name" required>
  </div>
  <div class="col-md-6">
    <label class="form-label" for="nationality">Nationality</label>
    <input class="form-control" id="nationality" name="nationality" required>
  </div>
  <div class="col-md-6">
    <label class="form-label" for="birthdate">Birthdate</label>
    <input class="form-control" id="birthdate" type="date" name="birthdate" required>
  </div>
  <div class="col-md-3">
    <label class="form-label" for="points">Points</label>
    <input class="form-control" id="points" type="number" name="points" value="0">
  </div>
  <div class="col-md-3">
    <label class="form-label" for="championships">Championships</label>
    <input class="form-control" id="championships" type="number" name="championships" value="0">
  </div>
  <div class="col-12">
    <button class="btn btn-primary">Add Driver</button>
  </div>
</form>
