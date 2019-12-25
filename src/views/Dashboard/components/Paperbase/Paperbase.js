import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Navigator from '../Navigator/Navigator';
import Content from '../Content/Content';
import Content2 from '../Content/Content2';
import Header from '../Header/Header';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="primary" href="">
        Motel System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

const styles = {
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  footer: {
    padding: theme.spacing(2),
    background: '#eaeff1',
  },
};

const tabLabels = [
  { id: 0, label: 'Users', content: <Content /> },
  { id: 1, label: 'Work Order', content: <Content2 /> },
  { id: 2, label: 'Purchase Order', content: <Content2 /> },
  { id: 3, label: 'Apporval', content: <Content2 /> },
]

const tabLabelsInspection = [
  { id: 0, label: 'Ins 1', content: 'Ins 1 - content' },
  { id: 1, label: 'Ins 2', content: 'Ins 2 - content' },
]


function Paperbase(props) {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [index, setIndex] = useState(0)
  const [labels, setLabels] = useState(
    { id: 0, label: 'Users', content: <Content /> },
    { id: 1, label: 'Work Order', content: <Content2 /> },
    { id: 2, label: 'Purchase Order', content: <Content2 /> },
    { id: 3, label: 'Apporval', content: <Content2 /> }
  )

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClickTab = (id) => {
    setIndex(id)
  }

  const setContent = (idx) => {
    const c = tabLabels.find(c => c.id === idx ? c.label : null)
    // const c = labels.find(c => c.id === idx ? c.label : null)
    return c.content
  }

  const handleClickChildren = (childId) => {
    console.log(childId)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              handlerChildrenClick={handleClickChildren}
            />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator 
              PaperProps={{ style: { width: drawerWidth } }} 
              handlerChildrenClick={handleClickChildren}
            />
          </Hidden>
        </nav>
        <div className={classes.app}>
          <Header 
            onDrawerToggle={handleDrawerToggle}
            tabLabels={tabLabels}
            index={index}
            handlerClickTab={handleClickTab}
          />
          <main className={classes.main}>
            { setContent(index) }
          </main>
          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

Paperbase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
