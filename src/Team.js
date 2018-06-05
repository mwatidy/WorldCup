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
  state = {
    name: "",
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

  handleToggle = value => () => {
    var newV = this.state.friends;
    newV[value].inTeam = !newV[value].inTeam;
    this.setState({ friends: newV });

    /*
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
    */
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
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
            >
              <InputLabel htmlFor="name-helper">Team Name</InputLabel>
              <Input
                id="name-helper"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <FormHelperText id="name-helper-text">
                Choose a name for your team
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth>Save</Button>
          </Grid>
        </Section>
        <Section>
          <Grid xs={12}>
            <Title title="Accepted Invitations" />
            <List>
              {this.state.friends.map((friend, value) => (
                <ListItem
                  key={value}
                  button
                  disabled={friend.inTeam ? "approved" : ""}
                  className={classes.listItem}
                >
                  <Avatar alt="Remy Sharp" src={friend.pic} />
                  <ListItemText
                    primary={friend.name}
                    secondary={friend.approved ? "approved" : ""}
                  />
                  <ListItemSecondaryAction>
                    <Checkbox
                      disabled={friend.approved ? "1" : ""}
                      checked={friend.inTeam}
                      onChange={this.handleToggle(value)}
                      //onClick = {!friend.inTeam}
                      //onChange = {this.handleToggle(value)}
                      //                  onChange={this.handleToggle(value)}
                      //                  checked={this.state.checked.indexOf(value) !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid xs={12}>
            <Button fullWidth>Approve Selected</Button>
            <hr />
            <Button fullWidth>Invite new members</Button>
          </Grid>
        </Section>
      </div>
    );
  }
}

Team.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Team);
