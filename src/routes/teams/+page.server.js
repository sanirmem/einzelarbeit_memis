import db from "$lib/db.js";

export async function load() {
  return {
    teams: await db.getTeams()
  };
}
