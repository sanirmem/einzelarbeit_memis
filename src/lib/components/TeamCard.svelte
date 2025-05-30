<script>
  let { team } = $props();

  function playEngineSound() {
    const audio = new Audio('/sounds/f1_engine.wav');
    audio.volume = 0.6;
    audio.play();
  }
</script>

<a href={"/teams/" + team._id} onclick={playEngineSound} class="team-card">
  <img class="team-image" src={team.poster} alt={team.name} />

  <div class="overlay">
    <div class="title">{team.name}</div>
    <div>Country: {team.country}</div>
    <div>Founded: {team.founded}</div>
    <div>Engine: {team.engine}</div>
  </div>
</a>

<style>
  .team-card {
    position: relative;
    overflow: hidden;
    display: block;
    border: 1px solid #555;
    background-color: #222;
    color: white;
    height: 100%;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    transition: box-shadow 0.3s ease;
  }

  .team-card:hover {
    box-shadow: 0 0 12px rgba(255, 0, 0, 0.3);
  }

  .team-image {
    width: 100%;
    max-height: 160px;
    padding: 1rem;
    object-fit: contain;
    background-color: #111;
    border-radius: 0.25rem;
    transition: transform 0.3s ease;
  }

  .overlay {
    margin-top: 1rem;
    text-align: center;
  }

  .title {
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
</style>
