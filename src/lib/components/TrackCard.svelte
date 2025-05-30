<script>
  let { track } = $props();
</script>

<div class="card h-100 shadow-sm">
  <img src={track.image} class="card-img-top" alt={track.name} />
  <div class="card-body">
    <h5 class="card-title">{track.name}</h5>
    <p class="card-text">{track.location}</p>
    <p class="card-text">
      <small>{track.length_km} km – {track.laps} laps</small><br />
      <small>First GP: {track.first_gp}</small>
    </p>
  </div>
  <div class="card-footer bg-transparent border-top-0">
    <form method="POST" action="?/delete_track" class="m-0">
      <input type="hidden" name="id" value={track._id} />
      <button class="btn btn-sm btn-outline-danger w-100">🗑 Delete</button>
    </form>
  </div>
</div>

<style>
  .card {
    height: 100%;
    background-color: #333;
    color: white;
    border: none;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .card-img-top {
    height: 200px;
    object-fit: contain;
    padding: 1rem;
    background-color: #333;
  }

  .card-body,
  .card-footer {
    background-color: #333;
  }

  .card-footer {
    padding: 0.5rem;
  }

  .btn-outline-danger {
    color: white;
    border-color: #dc3545;
  }

  .btn-outline-danger:hover {
    background-color: #dc3545;
    color: white;
  }
</style>
