<script>
  const { data } = $props();
</script>

<a href="/teams" class="btn btn-secondary mb-3">← Back to Teams</a>

<h1>Add New Team</h1>

<form method="POST" class="row g-3 mt-3">
  <div class="col-md-6">
    <label class="form-label" for="name">Name</label>
    <input class="form-control" id="name" name="name" required />
  </div>
  <div class="col-md-6">
    <label class="form-label" for="country">Country</label>
    <input class="form-control" id="country" name="country" required />
  </div>
  <div class="col-md-6">
    <label class="form-label" for="founded">Founded</label>
    <input class="form-control" id="founded" name="founded" type="number" required />
  </div>
  <div class="col-md-6">
    <label class="form-label" for="engine">Engine</label>
    <input class="form-control" id="engine" name="engine" required />
  </div>
  <div class="col-12">
    <button class="btn btn-primary">Add Team</button>
  </div>
</form>
