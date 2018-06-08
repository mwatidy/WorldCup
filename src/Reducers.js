import { getLeader } from "./Actions";
import axios from "axios";

/*

hasTeam
LoggedIn
avatar
leaderName
referral
teamName
isLeader
team
teamMembers => name, avatar, approved, score
answeredQuestions
topTeams => []
otherFriends
score
challenge => { }
isWinner => Scores EveryQuestion

 */

const initialState = {
  name: "",
  loggedIn: "TOKEN_NUMBER"
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LEADER":
      axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
        console.log(res);
        console.log(state);
      });

    case "LOGIN":
    /*
    return Object.assign({}, state, {
          name: res
        });
    */

    default:
      return state;
  }
};

export default game;
