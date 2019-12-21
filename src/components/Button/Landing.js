import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  label: {
    color: 'orange'
  }
}));

export default function GroupSizesColors(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        {
          props.buttons.map(button => (
            <Button className={classes.label} key={button.id} href={button.path}>{button.label}</Button>
          ))
        }
      </ButtonGroup>
    </div>
  );
}
