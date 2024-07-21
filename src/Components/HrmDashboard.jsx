import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EditNoteIcon from "@mui/icons-material/EditNote";
import GroupsIcon from "@mui/icons-material/Groups";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import LogoutIcon from "@mui/icons-material/Logout";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import logo from "../assets/logo.png";
import DashBoardpage from "../HRM/DashBoardpage";
import EmpInfo from "../HRM/EmpInfo";
import TimeSheet from "../HRM/TimeSheet";
import Recruitment from "../HRM/Recruitment";
import Claim from "../HRM/Claim";
import Newsfeed from "../HRM/Newsfeed";
import Documents from "../HRM/Documents";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const LogoutContainer = styled("div")({
  marginTop: "auto",
});

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedContent, setSelectedContent] = React.useState("Dashboard");
  const navigate = useNavigate();

  const handleListItemClick = (text) => {
    setSelectedContent(text);
    handleDrawerClose();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "Dashboard":
        return <DashBoardpage />;
      case "Documents":
        return <Documents />;
      case "EmpInfo":
        return <EmpInfo />;
      case "Timesheet":
        return <TimeSheet />;
      case "Recruitment":
        return <Recruitment />;
      case "Claim":
        return <Claim />;
      case "Newsfeed":
        return <Newsfeed />;
      default:
        return null;
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <div style={{ flexGrow: 1, textAlign: "left" }}>
            <img
              src={logo}
              alt="Logo"
              className="logo"
              style={{ maxWidth: "100%" }}
            />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Dashboard", "EmpInfo", "Timesheet", "Documents"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(text)}>
                <ListItemIcon>
                  {text === "Dashboard" ? (
                    <DashboardIcon />
                  ) : text === "Documents" ? (
                    <AccountTreeIcon />
                  ) : text === "EmpInfo" ? (
                    <GroupsIcon />
                  ) : text === "Timesheet" ? (
                    <CalendarMonthIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Recruitment", "Claim", "Newsfeed"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(text)}>
                <ListItemIcon>
                  {text === "Recruitment" ? (
                    <SavedSearchIcon />
                  ) : text === "Claim" ? (
                    <EditNoteIcon />
                  ) : text === "Newsfeed" ? (
                    <ConnectWithoutContactIcon />
                  ) : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <LogoutContainer>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </LogoutContainer>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {renderContent()}
      </Main>
    </Box>
  );
}
