<script>
  let { driver } = $props();
</script>

<div class="driver-card">
  <div>
    <img class="img-fluid" src={driver.poster} alt={driver.name} />
  </div>
  <div class="details">
    <div class="title">
      <a href={"/drivers/" + driver._id}>{driver.name}</a>
    </div>
    <div>Nationality: {driver.nationality}</div>
    <div>Birthdate: {driver.birthdate}</div>
    <div>Points: {driver.points}</div>
    <div>Championships: {driver.championships}</div>

    <form method="POST" action="?/delete_driver" class="mt-2">
      <input type="hidden" name="id" value={driver._id} />
      <button class="btn btn-sm btn-outline-danger w-100">🗑 Delete</button>
    </form>
  </div>
</div>

<style>
  .driver-card {
    border: 1px solid #555;
    height: 100%;
    background-color: #444;
    color: white;
    border-radius: 0.5rem;
  }

  .details {
    padding: 0.5em;
  }

  .title {
    font-weight: bold;
  }

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
  }

  button {
    margin-top: 0.5em;
  }

  .driver-card a {
    color: white;
    text-decoration: none;
  }

  .driver-card a:hover {
    color: #ccc;
  }
</style>
