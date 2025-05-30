import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("F1DB");

//Get all teams
async function getTeams() {
    let teams = [];
    try {
        const collection = db.collection("teams");

        const query = {};

        teams = await collection.find(query).toArray();
        teams.forEach((team) => {
            team._id = team._id.toString();
        });
    } catch (error) {
        console.log(error);
    }
    return teams;
}

//Get Team by ID
async function getTeam(id) {
    let team = null;
    try {
        const collection = db.collection("teams");
        const query = { _id: new ObjectId(id) };
        team = await collection.findOne(query);

        if (!team) {
            console.log("No team with id " + id);
        } else {
            team._id = team._id.toString();
        }
    } catch (error) {
        console.log(error.message);
    }
    return team;
}

//Create Team
async function createTeam(team) {
    team.poster = "/images/placeholder.png";
    try {
        const collection = db.collection("teams");
        const result = await collection.insertOne(team);
        team._id = result.insertedId.toString();
        return team;
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

//Delete Driver
async function deleteDriver(id) {
    try {
        const collection = db.collection("drivers");
        const query = { _id: new ObjectId(id) };
        await collection.deleteOne(query);

        if (result.deletedCount === 0) {
            console.log("No driver with id " + id);
        } else {
            console.log("Driver with id " + id + " has been successfully deleted");
            return id;
    } 
} catch (error) {
        console.log(error.message);
    }
    return null;
}
//Delete Team
async function deleteTeam(id) {
    try {
        const collection = db.collection("teams");
        const query = { _id: new ObjectId(id) };
        await collection.deleteOne(query);

        if (result.deletedCount === 0) {
            console.log("No team with id " + id);
        } else {
            console.log("Team with id " + id + " has been successfully deleted");
            return id;
        }
    } catch (error) {
        console.log(error.message);
    }
    return null;
}

// Get all drivers for a specific team
async function getDriversByTeam(teamName) {
    let drivers = [];
    try {
        const collection = db.collection("drivers");
        const query = { team: teamName };
        drivers = await collection.find(query).toArray();
        drivers.forEach(driver => {
            driver._id = driver._id.toString();
        });
    } catch (error) {
        console.log(error.message);
    }
    return drivers;
}

async function getDriver(id) {
    try {
        const collection = db.collection("drivers");
        const query = { _id: new ObjectId(id) };
        const driver = await collection.findOne(query);
        if (driver) {
            driver._id = driver._id.toString();
        }
        return driver;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

async function createDriver(driver) {
    driver.poster = "/images/placeholder.png";
    try {
        const collection = db.collection("drivers");
        const result = await collection.insertOne(driver);
        driver._id = result.insertedId.toString();
        return driver;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

async function deleteDriver(id) {
    try {
        const collection = db.collection("drivers");
        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0 ? id : null;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

async function getTracks() {
  try {
    const collection = db.collection("tracks");
    const tracks = await collection.find().toArray();
    return tracks.map(t => ({ ...t, _id: t._id.toString() }));
  } catch (error) {
    console.log("Error loading tracks:", error.message);
    return [];
  }
}

async function createTrack(track) {
  try {
    const collection = db.collection("tracks");
    const result = await collection.insertOne(track);
    return { ...track, _id: result.insertedId.toString() };
  } catch (error) {
    console.log("Error creating track:", error.message);
    return null;
  }
}

async function deleteTrack(id) {
  try {
    const collection = db.collection("tracks");
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0 ? id : null;
  } catch (error) {
    console.log("Error deleting track:", error.message);
    return null;
  }
}

export default {
    getTeams,
    getTeam,
    createTeam,
    deleteDriver,
    deleteTeam,
    getDriversByTeam,
    getDriver,
    createDriver,
    deleteDriver,
    getTracks,
    createTrack,
    deleteTrack
};