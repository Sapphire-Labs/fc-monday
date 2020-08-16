import React from "react";
// import { useIntl } from "react-intl";
import FactCheckCard from "./FactCheckCard";
import Grid from "@material-ui/core/Grid";
import { SortableContainer } from "react-sortable-hoc";
import { chunk } from "lodash";

// const useStyles = makeStyles(theme => ({
//   title: {
//     paddingTop: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//     textAlign: "center",
//     wordWrap: "break-word",
//     backgroundColor: theme.palette.primary.dark,
//     color: theme.palette.common.white,
//   },
//   body: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: theme.spacing(1),
//   },
//   subbody: {
//     flexGrow: 1,
//     width: "100%",
//   },
//   scoreWrapper: {
//     paddingBottom: theme.spacing(1),
//   },
//   ratingHeader: {
//     padding: theme.spacing(0.5, 2),
//     backgroundColor: theme.palette.primary.light,
//     color: theme.palette.common.white,
//   },
//   ratingContent: {
//     padding: theme.spacing(1),
//   },
//   fullRatingText: {
//     display: "block",
//     margin: 0,
//     paddingTop: theme.spacing(0.5),
//   },
//   stepper: {
//     padding: 0,
//   },
// }));

const chunkSize = 3;

const FactChecks = SortableContainer(({ boardData, showImage }) => {
  // const classes = useStyles();
  // const intl = useIntl();

  return (
    <div style={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        {chunk(boardData, chunkSize).map((chunk, i1) =>
          chunk.map(({ boardId, boardItemId, url }, i2) => (
            <FactCheckCard
              key={`fact-check-card-${url}-${chunkSize * i1 + i2}`}
              index={chunkSize * i1 + i2}
              boardId={boardId}
              boardItemId={boardItemId}
              url={url}
              showImage={showImage}
            />
          ))
        )}
      </Grid>
    </div>
  );
});

export default FactChecks;
