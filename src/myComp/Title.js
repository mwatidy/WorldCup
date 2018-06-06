import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  introTitle: {
    padding: theme.spacing.unit,
    paddingBottom: "0px"
  },
  introParagraph: {
    padding: theme.spacing.unit,
    paddingTop: "20px",
    textAlign: "justify"
  },
  removeMargin: {
    marginBottom: "0px"
  },
  minMargin: {
    marginBottom: "-10px"
  }
});

class Title extends React.Component {
  constructor(props) {
    super();
    this.myAdjust(props);
  }

  myAdjust = props => {
    if (props.minMargin) {
      var myParagraph = props.classes.introParagraph;
      var myTitle = props.classes.introTitle + " " + props.classes.minMargin;
      this.state = {
        title: myTitle,
        paragraph: myParagraph
      };
    } else if (props.removeMargin) {
      var myParagraph =
        props.classes.introParagraph + " " + props.classes.removeMargin;
      var myTitle = props.classes.introTitle + " " + props.classes.removeMargin;
      this.state = {
        title: myTitle,
        paragraph: myParagraph
      };
    } else {
      var myParagraph = props.classes.introParagraph;
      var myTitle = props.classes.introTitle;
      this.state = {
        title: myTitle,
        paragraph: myParagraph
      };
    }
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Grid item xs={12}>
          <Typography
            variant="headline"
            component="h3"
            className={this.state.title}
          >
            {this.props.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            className={this.state.paragraph}
            variant="paragraph"
            component="p"
          >
            {this.props.description}
          </Typography>
        </Grid>
      </div>
    );
  }
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Title);
