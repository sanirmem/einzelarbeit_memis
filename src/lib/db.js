import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("F1DB");

// -------- Teams --------
async function getTeams() {
  try {
    const teams = await db.collection("teams").find({}).toArray();
    return teams.map(t => ({ ...t, _id: t._id.toString() }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getTeam(id) {
  try {
    const team = await db.collection("teams").findOne({ _id: new ObjectId(id) });
    return team ? { ...team, _id: team._id.toString() } : null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function createTeam(team) {
  team.poster = "/images/placeholder.png";
  try {
    const result = await db.collection("teams").insertOne(team);
    return { ...team, _id: result.insertedId.toString() };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function deleteTeam(id) {
  try {
    const result = await db.collection("teams").deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0 ? id : null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

// -------- Drivers --------
async function getDriversByTeam(teamName) {
  try {
    const drivers = await db.collection("drivers").find({ team: teamName }).toArray();
    return drivers.map(d => ({ ...d, _id: d._id.toString() }));
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function getDriver(id) {
  try {
    const driver = await db.collection("drivers").findOne({ _id: new ObjectId(id) });
    return driver ? { ...driver, _id: driver._id.toString() } : null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function createDriver(driver) {
  driver.poster = "/images/placeholder.png";
  try {
    const result = await db.collection("drivers").insertOne(driver);
    return { ...driver, _id: result.insertedId.toString() };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

async function deleteDriver(id) {
  try {
    const result = await db.collection("drivers").deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount > 0 ? id : null;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

// -------- Tracks --------
async function getTracks() {
  try {
    const tracks = await db.collection("tracks").find({}).toArray();
    return tracks.map(t => ({ ...t, _id: t._id.toString() }));
  } catch (error) {
    console.log("Error loading tracks:", error.message);
    return [];
  }
}

async function createTrack(track) {
  try {
    const result = await db.collection("tracks").insertOne(track);
    return { ...track, _id: result.insertedId.toString() };
  } catch (error) {
    console.log("Error creating track:", error.message);
    return null;
  }
}

async function deleteTrack(id) {
  try {
    const result = await db.collection("tracks").deleteOne({ _id: new ObjectId(id) });
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
  deleteTeam,
  getDriversByTeam,
  getDriver,
  createDriver,
  deleteDriver,
  getTracks,
  createTrack,
  deleteTrack
};
