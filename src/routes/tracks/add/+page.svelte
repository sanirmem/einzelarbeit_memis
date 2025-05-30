<script>
    const { data } = $props();
</script>

<a href="/tracks" class="btn btn-secondary mb-3">← Back to Tracks</a>

<h1>Add New Track</h1>

<form method="POST" class="row g-3">
  <div class="col-md-6">
    <label for="name" class="form-label">Name</label>
    <input name="name" id="name" class="form-control" required />
  </div>
  <div class="col-md-6">
    <label for="location" class="form-label">Location</label>
    <input name="location" id="location" class="form-control" required />
  </div>
  <div class="col-md-3">
    <label for="length_km" class="form-label">Length (km)</label>
    <input type="number" name="length_km" id="length_km" step="0.001" class="form-control" required />
  </div>
  <div class="col-md-3">
    <label for="laps" class="form-label">Laps</label>
    <input type="number" name="laps" id="laps" class="form-control" required />
  </div>
  <div class="col-md-3">
    <label for="first_gp" class="form-label">First GP</label>
    <input type="number" name="first_gp" id="first_gp" class="form-control" required />
  </div>
  <div class="col-md-6">
    <label for="image" class="form-label">Image Path</label>
    <input name="image" id="image" class="form-control" required />
  </div>
  <div class="col-12">
    <button class="btn btn-primary">Add Track</button>
  </div>
</form>
