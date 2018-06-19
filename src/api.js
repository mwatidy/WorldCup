const axios = require("axios");

function optionsCreator(fetch, data) {
  const domain = "https://game-demo.vpnmonster.co";
  const token = "Bearer " + data.token || null;

  switch (fetch) {
    case "LOGIN":
      // GET the ID & token from the response and save it in a cookie
      var options = {
        url: domain + "/api/v1/auth/login",
        method: "POST",
        data: data.data
      };
      break;

    case "ME":
      var options = {
        url: domain + "/api/v1/auth/profile",
        method: "GET",
        headers: { Authorization: token }
      };
      break;

    case "USER":
      // Get referral from response and save it
      // Check the team through[res.data.memberships[0].team]
      // SAMPLE INPUT "hasTEAM", "fefd90b3-a69e-461a-a832-b2a3af0f3c08"
      var options = {
        url: domain + "/api/v1/users/" + data.data,
        method: "GET",
        headers: { Authorization: token }
      };
      break;

    case "createTEAM":
      var options = {
        url: domain + "/api/v1/teams",
        method: "POST",
        headers: { Authorization: token },
        data: {
          name: data.data
        }
      };
      break;

    case "TEAM":
      var options = {
        url: domain + "/api/v1/referrals/" + data.data,
        method: "GET"
      };
      //"TEAM","416b2"
      break;

    case "joinTEAM":
      var options = {
        url: domain + "/api/v1/teams/" + data.data + "/join",
        method: "POST",
        headers: { Authorization: token }
      };
      //"joinTEAM", "d88210a8-e8a5-493e-8172-f61f647b6fdd"
      break;

    case "approveMEMBERS":
      // TEAM MEMBER ID
      var options = {
        url: domain + "/api/v1/teams/" + data.data.team + "/approve",
        method: "POST",
        headers: { Authorization: token },
        data: {
          ids: data.data.members
        }
      };
      /*
          data = {
              team: "d88210a8-e8a5-493e-8172-f61f647b6fdd",
              members: ["6b72832a-3edb-9838-4742-963765d8355a","58d40535-ce0e-7cb5-ec90-f7e4217039e6"] 
          }
       */
      break;

    case "createCHALLENGE":
      var options = {
        url: domain + "/api/v1/challenges",
        method: "POST",
        headers: { Authorization: token },
        data: {
          team_id: data.data
        } //
        //"createCHALLENGE", "f05e2785-6d81-4ae3-8446-85db8c0920de"
      };

      break;

    case "uploadCHALLENGE":
      var options = {
        url: domain + "/api/v1/challenges/" + data.challenge,
        method: "PUT",
        headers: { Authorization: token },
        data: {
          user_id: data.data.userID,
          score: data.data.score
        }
      };
      /*
          {
              challenge: '555d42c3-af91-475c-bacc-f954895372f1',
              userID: '2d3be17d-2901-4abe-b228-4b1e249af31e',
              score: 200
          }
          */
      break;

    case "DASHBOARD":
      var options = {
        url: domain + "/api/v1/rankings/" + data.data.team,
        method: "POST",
        headers: { Authorization: token },
        data: {
          fb_ids: data.data.friends
        }
      };
      /* {
              team: 'f05e2785-6d81-4ae3-8446-85db8c0920de',
              friends: []
          } */
      break;

    default:
      return connsole.log("Wrong fetch");
  }

  return options;
}

export default function api(type, data, callback) {
  axios(optionsCreator(type, data))
    .then(
      function(res) {
        callback(res.data);
      },
      function(err) {
        callback("err"); // + err.response.data
      }
    )
    .catch(function(ax) {
      callback(ax);
    });
}
