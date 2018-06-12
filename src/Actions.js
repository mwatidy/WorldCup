export const haveCookie = () => {
  return {
    type: "HAVE_COOKIE"
  };
};

export const logIn = () => {
  return {
    type: "LOGIN"
  };
};

export const getLeader = (name, avatar) => {
  return {
    type: "GET_LEADER",
    payload: {
      name,
      avatar
    }
  };
};

export const approveMembers = members => {
  return {
    type: "APPROVE_MEMBERS",
    members
  };
};

export const inviteMembers = ref => {
  return {
    type: "INVITE_MEMBERS",
    response
  };
};

export const getFriends = fbId => {
  return {
    type: "GET_FRIENDS",
    fbId
  };
};

export const getAnnouncements = fbId => {
  return {
    type: "GET_ANNOUNCEMENTS",
    fbId
  };
};

export const getTopTeams = () => {
  return {
    type: "GET_TOP_TEAMS"
  };
};

export const getTeamScores = referral => {
  return {
    type: "GET_TEAM_SCORES",
    referral
  };
};

export const getChallenge = () => {
  return {
    type: "GET_CHALLENGE"
  };
};

export const addPoints = fbId => {
  return {
    type: "ADD_POINTS",
    fbId
  };
};

export const nextQuestion = questionIndex => {
  return {
    type: "NEXT_QUESTION",
    questionIndex
  };
};

export const checkWinner = (user1Score, user2Score) => {
  return {
    type: "ADD_POINTS",
    user1Score,
    user2Score
  };
};

export const updateFinalScore = user => {
  return {
    type: "NEXT_QUESTION",
    user
  };
};
