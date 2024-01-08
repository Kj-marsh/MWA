let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");

var expect = chai.expect;
var should = chai.should();
chai.use(chaiHttp);

describe("Unit testing for FutbolSearch Web App", () => {
  //Testing the GET endpoint
  describe("GET endpoint", () => {
    it("It should GET all player records", (done) => {
      chai
        .request(server)
        .get("/players")
        .end((err, response) => {
          response.should.have.status(200); //Testing for pass
          response.body.should.be.a("array");
          response.body.length.should.be.greaterThan(0); //Players should be passed through JSON payload
          done();
        });
    });

    it("It should GET all team records", (done) => {
      chai
        .request(server)
        .get("/teams")
        .end((err, response) => {
          response.should.have.status(200); //Testing for pass
          response.body.should.be.a("array");
          response.body.length.should.be.eq(6); //JSON payload should contain all 6 teams
          done();
        });
    });
  });

  describe("Test the GetById Function for players and teams", () => {
    it("it should get a player by their ID", (done) => {
      const player_id = 3;
      chai
        .request(server)
        .get("/players/" + player_id)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          //These are the properties that should be showing for Paul Pogba when selected by ID
          response.body.should.have.property("playerName");
          response.body.should.have.property("image");
          response.body.should.have.property("shirtNum");
          response.body.should.have.property("description");
          response.body.should.have.property("team_id").eq(1);
          done();
        });
    });

    it("it should get a team by their ID", (done) => {
      const teamId = 1;
      chai
        .request(server)
        .get("/teams/" + teamId)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          //These are the properties that should be showing for Manchester United when selected by ID
          response.body.should.have.property("team_name");
          response.body.should.have.property("image");
          response.body.should.have.property("description");
          done();
        });
    });
  });

  describe("Testing the Create function of players", () => {
    it("It should create and POST a player record", (done) => {
      const player = {
        playerName: "David de Gea",
        shirtNum: 1,
        image: "image.jpg",
        description: "Goalie for Mufc",
        team_id: 1,
      };

      chai
        .request(server)
        .post("/players")
        .send(player)
        .end((err, response) => {
          response.should.have.status(201); //Testing for creation and POST
          response.body.should.be.a("object");
          response.body.should.have.property("playerName").eq("David de Gea");
          response.body.should.have.property("image").eq("image.jpg");
          response.body.should.have.property("shirtNum").eq(1);
          response.body.should.have
            .property("description")
            .eq("Goalie for Mufc");
          response.body.should.have.property("team_id").eq(1);
          done();
        });
    });

    it("It should not create the player as the description field is missing, causing an error 400", (done) => {
      const player = {
        playerName: "David de Gea",
        shirtNum: 1,
        image: "image.jpg",
        team_id: 1,
      };

      chai
        .request(server)
        .post("/players")
        .send(player)
        .end((err, response) => {
          response.should.have.status(400); //Testing for creation and POST
          done();
        });
    });
  });

  describe("Testing the Update function of players", () => {
    it("It should update Bruno Fernandes to David de Gea", (done) => {
      const player = {
        id: 2,
        playerName: "David de Gea",
        shirtNum: 1,
        image: "image.jpg",
        description: "Goalie for Mufc",
        team_id: 1,
      };

      chai
        .request(server)
        .put("/players")
        .send(player)
        .end((err, response) => {
          response.should.have.status(200); //Testing for successfull Update
          response.body.should.be.a("object");
          response.body.should.have.property("playerName").eq("David de Gea");
          response.body.should.have.property("image").eq("image.jpg");
          response.body.should.have.property("shirtNum").eq(1);
          response.body.should.have
            .property("description")
            .eq("Goalie for Mufc");
          response.body.should.have.property("team_id").eq(1);
          done();
        });
    });
  });

  describe("Testing the delete function of players from their Id", () => {
    it("It should delete paul pogba", (done) => {
      const playerId = { id: 3 };

      chai
        .request(server)
        .delete("/players/")
        .send(playerId)
        .end((err, response) => {
          response.should.have.status(200); //Testing for a successful deletion
          done();
        });
    });
  });
});
