import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const team = await db.getTeam(params.team_id);
    const drivers = await db.getDriversByTeam(team.name);
    return { team, drivers };
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        await db.deleteTeam(data.get("id"));
        redirect(303, "/teams");
    },
    delete_driver: async ({ request }) => {
        const data = await request.formData();
        await db.deleteDriver(data.get("id"));
        redirect(303, request.url);
    }
};
