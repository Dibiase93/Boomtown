const styles = theme => ({
  NavBar: {
    width: "96%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  headerContainer: {
    backgroundColor: "#f9a825",
    width: "100%"
  },
  NavBarList: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    justifySelf: "flex-end"
  },
  LogoLink: {
    borderRadius: "25px",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  },
  fab: {
    backgroundColor: "#f9a825",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.1)"
    }
  },

  AddIcon: {
    backgroundColor: "black",
    color: "#f9a825",
    borderRadius: "25px",
    marginRight: "20px"
  },
  headerIcon: {
    marginRight: "20px"
  },
  popUpNavLink: {
    listStyle: "none",
    flexWrap: "wrap",
    flexDirection: "row"
  },
  popUpNavText: {
    width: "50%"
  }
});

export default styles;
