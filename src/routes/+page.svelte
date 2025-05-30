<script>
  import { onMount } from 'svelte';

  let isMuted = $state(false);

  onMount(() => {
    if (!window.__f1theme) {
      window.__f1theme = new Audio('/sounds/f1_theme.mp3');
      window.__f1theme.volume = 0.05;
      window.__f1theme.loop = true;
      window.__f1theme.muted = false;

      const startOnInteraction = () => {
        window.__f1theme.play().catch((e) => {
          console.warn("Autoplay blocked:", e);
        });
        document.removeEventListener("click", startOnInteraction);
      };

      document.addEventListener("click", startOnInteraction);
    }

    isMuted = window.__f1theme.muted;
  });
</script>

<!-- Hero Section -->
<section class="row align-items-center mb-5">
  <div class="col-md-6">
    <h1 class="display-5 fw-bold">Welcome to the Formula 1 Explorer</h1>
    <p class="lead mt-3">
      Dive into the heart of Formula 1 – explore the latest teams, discover driver profiles, and relive every iconic track.
    </p>

  </div>
  <div class="col-md-6 text-center">
    <img src="/images/f1_header.jpg" alt="Formula 1 Header" class="img-fluid rounded shadow" />
  </div>
</section>

<hr class="my-5" />

<!-- Feature Cards -->
<section class="row text-center">
  <div class="col-md-4 mb-4">
    <div class="card h-100 bg-dark text-white shadow border-light">
      <div class="card-body">
        <h4 class="card-title">Teams</h4>
        <p class="card-text">View all constructors, their history, and engine details.</p>
        <a href="/teams" class="btn btn-outline-light">View Teams</a>
      </div>
    </div>
  </div>

  <div class="col-md-4 mb-4">
    <div class="card h-100 bg-dark text-white shadow border-light">
      <div class="card-body">
        <h4 class="card-title">Tracks</h4>
        <p class="card-text">Explore every Grand Prix circuit on the calendar.</p>
        <a href="/tracks" class="btn btn-outline-light">View Tracks</a>
      </div>
    </div>
  </div>
</section>

<p>
  This web application is your interactive gateway to the world of Formula 1. Whether you're a passionate motorsport fan, 
  a data enthusiast, or just curious about the drivers, teams, and circuits that define each season – you've come to the right place.
</p>

<p>
  <strong>F1 Explorer</strong> offers a clear and structured overview of all current Formula 1 teams, their drivers, and the official tracks featured on the Grand Prix calendar. 
  You can browse through each team and see detailed information about their history, engine suppliers, and country of origin.
  Likewise, you'll find comprehensive driver profiles including nationality, age, points, and career stats.
</p>

<p>
  Our track section features every race location, complete with layout data such as length, lap count, and first Grand Prix year.
  High-quality visuals accompany each entry to enhance your experience.
</p>

<p>
  The project is designed with a focus on usability, data integrity, and modern web technologies – making it ideal not only for fans, 
  but also as a technical prototype for learning and experimenting with web development and data management.
</p>

<p>
  Dive into the world of F1 now – explore the teams, discover your favorite driver, and get to know every twist and turn of each iconic circuit.
</p>