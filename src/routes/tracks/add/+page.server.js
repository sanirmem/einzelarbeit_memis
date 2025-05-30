import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const track = {
      name: data.get("name"),
      location: data.get("location"),
      length_km: parseFloat(data.get("length_km")),
      laps: parseInt(data.get("laps")),
      first_gp: parseInt(data.get("first_gp")),
      image: data.get("image")
    };
    await db.createTrack(track);
    throw redirect(303, "/tracks");
  }
};
