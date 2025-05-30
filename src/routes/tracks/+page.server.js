import db from "$lib/db.js";

export async function load() {
  const tracks = await db.getTracks();
  return { tracks };
}

export const actions = {
  delete_track: async ({ request }) => {
    const data = await request.formData();
    await db.deleteTrack(data.get("id"));
    return { success: true };
  }
};
