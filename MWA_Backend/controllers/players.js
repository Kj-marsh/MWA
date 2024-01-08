const router = require("../routes/players");
const utilities = require("../utilities/utility");
const db = require("../models");
const team = require("../models/team");
const Player = db.player;
const Team = db.team;


//this function gets all player records from the players table.
getAll = async (req, res) => {
  const player = await Player.findAll();

  res.status(200).json(player);
};

//used to get a specifc record from the players table by name
getByName = async (req, res) => {
  const name = req.params.value;
  try {
    const player = await Player.findAll({
      where: {
        playerName: name,
      },
    });
    if (player.length == 0) {
      throw new Error("Unable to find Player with the requested name " + name);
    }
    res.status(200).json(player);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

//used to get a specific player record by their unique id
getById = async (req, res) => {
  const id = req.params.id;
  try {
    const player = await Player.findByPk(id);
    if (player == null || player.length == 0) {
      throw new Error("Unable to find Player with id " + id);
    }
    res.status(200).json(player);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

//this function is essential in creating a player, checking to see if any required data has not been inputted and subsequently creating the player or causing a 400 error.

create = async (req, res) => {
  const player = {
    playerName: req.body.playerName,
    image: req.body.image,
    shirtNum: req.body.shirtNum,
    description: req.body.description,
    team_id: req.body.team_id,
  };

  try {
    if (
      player.playerName == null ||
      player.image == null ||
      player.shirtNum == null ||
      player.description == null ||
      player.team_id == null
    ) {
      throw new Error("Essential Fields Missing");
    }
    await Player.create(player);
    res.status(201).json(player);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

// conversely to the create function, the deleting function looks for a specific id in the table before deleting the player, or if the id cannot be found generates a 404 error.

deleting = async (req, res) => {
  const id = req.body.id;
  try {
    const deleted = await Player.destroy({ where: { id: id } });

    if (deleted == 0) {
      throw new Error("Id not found");
    }
    res.status(200).send("Player deleted");
  } catch (error) {
    utilities.formatErrorResponse(res, 404, error.message);
  }
};

// this function searches for a player through their unique id, which if found checks that new information has been appropriately entered before changing the record in question or if an issue is found, denying the request and posting a 400 error.
update = async (req, res) => {
  const id = req.body.id;

  const player = {
    playerName: req.body.playerName,
    image: req.body.image,
    shirtNum: req.body.shirtNum,
    description: req.body.description,
    team_id: req.body.team_id,
  };

  try {
    if (
      player.playerName == null ||
      player.image == null ||
      player.shirtNum == null ||
      player.description == null ||
      player.team_id == null
    ) {
      throw new Error("Essential Fields Missing");
    }

    await Player.update(player, { where: { id: id } });
    res.status(200).json(player);
  } catch (error) {
    utilities.formatErrorResponse(res, 400, error.message);
  }
};

//this specific line of code is used in order to export all of the required functions so that they can be accessed and used when required.
module.exports = { create, deleting, update, getAll, getByName, getById };
