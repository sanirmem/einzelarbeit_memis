import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const team = {
      name: data.get("name"),
      country: data.get("country"),
      founded: Number(data.get("founded")),
      engine: data.get("engine")
    };
    await db.createTeam(team);
    throw redirect(303, "/teams");
  }
};
