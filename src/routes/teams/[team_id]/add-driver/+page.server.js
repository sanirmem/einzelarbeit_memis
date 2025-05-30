import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const team = await db.getTeam(params.team_id);
    return { team };
}

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const driver = {
            name: data.get("name"),
            nationality: data.get("nationality"),
            birthdate: data.get("birthdate"),
            points: Number(data.get("points")),
            championships: Number(data.get("championships")),
            team: data.get("team")
        };
        await db.createDriver(driver);
        throw redirect(303, `/teams/${params.team_id}`);
    }
};
