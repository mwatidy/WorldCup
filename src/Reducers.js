import { getLeader } from "./Actions";

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
  loggedIn: "TOKEN_NUMBER",
  referrerName: "Getting Name .. ",
  referrerAvatar: "G"
};

const game = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LEADER":
      return {
        ...state,
        referrerName: action.payload.name,
        referrerAvatar: action.payload.avatar
      };
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
