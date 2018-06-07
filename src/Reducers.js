import { getLeader } from "./Actions";
import axios from "axios";

const initialState = {
  name: "hello",
  loggedIn: false
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
