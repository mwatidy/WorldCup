import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Title from "./myComp/Title";
import Section from "./myComp/Section";
import CookieCheck from "./myComp/Cookie";

import api from "./api";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit
  },
  grid: {
    margin: theme.spacing.unit + 10
  }
});

class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teamName: null,
      error: null,
      friends: [
        {
          name: "Tommy Wiseau",
          pic:
            "https://pbs.twimg.com/profile_images/724965716932218880/wTyXplXm_400x400.jpg",
          inTeam: 0,
          approved: 0
        },
        {
          name: "George Greg",
          pic:
            "https://m.media-amazon.com/images/M/MV5BMjEzNTgyOTY4OV5BMl5BanBnXkFtZTgwMzY2MzEwMjE@._V1_UX214_CR0,0,214,317_AL_.jpg",
          inTeam: 1,
          approved: 1
        }
      ]
    };
  }

  componentDidMount = () => {
    window.me ? console.log(window.me) : console.log("no team");
    console.log(window.me);
    var data = {
      token: window.auth,
      data: "ac7f3"
    };
    api("TEAM", data, res => {
      console.log(res);
    });
    //get team name
  };
  ///api/v1/teams/023d0318-56bd-4fb1-acd3-8dedd3f6be4d

  handleToggle = value => () => {
    var newV = this.state.friends;
    newV[value].inTeam = !newV[value].inTeam;
    this.setState({ friends: newV });
  };

  selectToggle = value => () => {
    var newV = this.state.friends;
    newV[value].inTeam = !newV[value].inTeam;
    this.setState({ friends: newV });
  };

  handleChange = event => {
    if (event.target.value.match(/s/gi)) {
      this.setState({ ...this.state, teamName: event.target.value });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <CookieCheck />
        <Section>
          <Title
            title="Team Members"
            description="Please choose a name for your team and then invite your team members to join. Your team can have a maximum of 5 members. You have to select all the team members before you or they can start the challenge"
          />
          <Grid item xs={11}>
            <FormControl
              className={classes.formControl}
              aria-describedby="name-helper-text"
              fullWidth
              error={this.state.error}
            >
              {this.state.teamName ? null : (
                <InputLabel htmlFor="name-helper">Team Name</InputLabel>
              )}
              <Input
                id="name-helper"
                value={this.state.teamName}
                onChange={this.handleChange}
              />

              <FormHelperText id="name-helper-text">
                {this.state.teamName
                  ? "Your team name can't be modified "
                  : "Name should be letters and numbers without spaces"}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              onClick={() => this.createTeam(this.state.teamName)}
            >
              Save
            </Button>
          </Grid>
        </Section>
        {this.state.teamName ? (
          <Section>
            <Grid item xs={12}>
              <Title title="Accepted Invitations" />
              <List>
                {this.state.friends.length ? (
                  this.state.friends.map((friend, value) => (
                    <ListItem
                      key={value}
                      button={friend.approved ? null : true}
                      //disabled={friend.inTeam ? "approved" : ""}
                      className={classes.listItem}
                      onClick={
                        friend.approved ? null : this.selectToggle(value)
                      }
                    >
                      <Avatar alt="Remy Sharp" src={friend.pic} />
                      <ListItemText
                        primary={friend.name}
                        secondary={friend.approved ? "approved" : ""}
                      />
                      <ListItemSecondaryAction>
                        <Checkbox
                          disabled={friend.approved ? true : null}
                          checked={friend.inTeam}
                          onChange={this.handleToggle(value)}
                          //onClick = {!friend.inTeam}
                          //onChange = {this.handleToggle(value)}
                          //                  onChange={this.handleToggle(value)}
                          //                  checked={this.state.checked.indexOf(value) !== -1}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))
                ) : (
                  <ListItem>
                    <ListItemText primary="No one opened your invitation yet. " />
                  </ListItem>
                )}
              </List>
            </Grid>
            <Grid item xs={12}>
              {this.state.friends.length ? (
                <Button fullWidth>Approve Selected</Button>
              ) : (
                ""
              )}
              <hr />
              <Button fullWidth>Invite members</Button>
            </Grid>
          </Section>
        ) : null}
      </div>
    );
  }
}

Team.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Team);

//autoFocus={this.state.teamName ? null : true}
