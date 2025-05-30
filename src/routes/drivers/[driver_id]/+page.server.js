import db from "$lib/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const driverId = params.driver_id;
    const driver = await db.getDriver(driverId);
    return {
        driver
    };
}
