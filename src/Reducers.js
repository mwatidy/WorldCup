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
      console.log("hey there");
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src =
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=210151409797846&autoLogAppEvents=1";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");

      window.fbAsyncInit = function() {
        FB.init({
          appId: "362073350865440",
          cookie: true,
          xfbml: true,
          version: "v3.0"
        });

        FB.AppEvents.logPageView();
        FB.getLoginStatus(function(response) {
          if (response.status == "connected") {
            console.log("Welcome " + response.authResponse.userID);
          } else {
            console.log("user not logged in");
          }
        });
      };

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
