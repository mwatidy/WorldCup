import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Section from "./myComp/Section";
import Title from "./myComp/Title";

import CookieCheck from "./myComp/Cookie";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    maxWidth: "100%"
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

const data = [];

class Dashboard extends React.Component {
  state = {
    groupScore: 10,
    groupData: [
      {
        name: "mor",
        score: 10
      },
      {
        name: "mor",
        score: 10
      },
      {
        name: "mor",
        score: 10
      }
    ],
    friends: [
      {
        name: "Ahmed Mohamed",
        team: "Washingtons",
        score: 20
      },
      {
        name: "Ahmed ismael",
        team: "Wasps",
        score: 20
      },
      {
        name: "ismael ibrahim",
        team: "Brazaers",
        score: 20
      }
    ],
    teams: [
      {
        team: "Washingtons",
        score: 20
      },
      {
        team: "Wasps",
        score: 20
      },
      {
        team: "Brazaers",
        score: 20
      }
    ]
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <CookieCheck />
        <Section>
          <Title
            title="Dashboard"
            description="Latest announcements and news"
          />
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Round 2 Starts soon
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>
                Your team finished answering
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Your team has answered all the questions and you are now ready
                to start round 2 soon
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Section>
        <hr />
        <Section>
          <Button fullWidth>Start Game</Button>
        </Section>
        <hr />
        <Section>
          <Grid xs={12}>
            <Grid xs={12} className={classes.root}>
              <p>Your total group&apos;s score is: {this.state.groupScore}</p>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell numeric>Score</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.groupData.map(n => {
                    return (
                      <TableRow className={classes.row} key={n.id}>
                        <CustomTableCell component="th" scope="row">
                          {n.name}
                        </CustomTableCell>
                        <CustomTableCell numeric>{n.score}</CustomTableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Section>
        <hr />
        <Section>
          <Grid xs={12}>
            <Grid xs={12} className={classes.root}>
              <p>Top teams from all over the world</p>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Team</CustomTableCell>
                    <CustomTableCell numeric>Score</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.teams.map(n => {
                    return (
                      <TableRow className={classes.row} key={n.id}>
                        <CustomTableCell component="th" scope="row">
                          {n.team}
                        </CustomTableCell>
                        <CustomTableCell numeric>{n.score}</CustomTableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Section>
        <hr />
        <Section>
          <Grid xs={12}>
            <Grid xs={12} className={classes.root}>
              <p>Your friends from Facebook</p>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Name - Team</CustomTableCell>
                    <CustomTableCell numeric>Score</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.friends.map(n => {
                    return (
                      <TableRow className={classes.row} key={n.id}>
                        <CustomTableCell component="th" scope="row">
                          {n.name} - {n.team}
                        </CustomTableCell>
                        <CustomTableCell numeric>{n.score}</CustomTableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Section>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
