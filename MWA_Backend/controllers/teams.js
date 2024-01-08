const router = require("../routes/teams");
const utilities = require("../utilities/utility");
const db = require("../models");
const Team = db.team;

//this function gets all team records from the teams table.
getAll = async (req, res) => {
  const team = await Team.findAll();
  res.status(200).json(team);
};
//used to get a specifc record from the teams table by name

getByName = async (req, res) => {
  const teamName = req.params.value;
  try {
    const team_name = await Team.findAll({ where: { team_name: teamName } });
    if (team_name.length == 0) {
      throw new Error("Unable to find Team with the requested name " + team_name);
    }
    res.status(200).json(team_name);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

//used to get a specific team record by their unique id
getById = async (req, res) => {
  const team_id = req.params.id;
  try {
    const team = await Team.findByPk(team_id);
    if (team == null || team.length == 0) {
      throw new Error("Unable to find Team with id " + team_id);
    }
    res.status(200).json(team);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

//this specific line of code is used in order to export all of the required functions so that they can be accessed and used when required.
module.exports = { getAll, getByName, getById };
