import React from "react";
import { useIntl } from "react-intl";
import FactCheckScoreBar from "../overview/FactCheckScoreBar";
import FactCheckRatingBreakdown from "../user-rating/FactCheckRatingBreakdown";
import { makeStyles, createStyles, Theme, useTheme } from "@material-ui/core/styles";
import { Box, Typography, Paper, MobileStepper, Button, Link } from "@material-ui/core";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import iframePrts from "../../../static/data/fact-check-iframe-properties";
import { RatingOrigin } from "../../../static/enums";
import { formatAsDaysAgo } from "../../../utils/date-utils";
import { renderIframeElement } from "../../../extensions/iframe";

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center",
    wordWrap: "break-word",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  subbody: {
    flexGrow: 1,
    width: "100%",
  },
  scoreWrapper: {
    paddingBottom: theme.spacing(1),
  },
  ratingHeader: {
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  ratingContent: {
    padding: theme.spacing(1),
  },
  fullRatingText: {
    display: "block",
    margin: 0,
    paddingTop: theme.spacing(0.5),
  },
  stepper: {
    padding: 0,
  },
}));

const FactCheckWidget = ({ originUrl, content, maxRatings }) => {
  const theme = useTheme();
  const classes = useStyles();
  const intl = useIntl();

  return <Box component="div" border={1.5}></Box>;
};

export default FactCheckWidget;
