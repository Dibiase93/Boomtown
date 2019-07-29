import { NONAME } from "dns";

const styles = theme => ({
  NavBar: {
    backgroundColor: "#f9a825",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
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
  LinkItem: {
    paddingRight: "5px"
  }
});

export default styles;
