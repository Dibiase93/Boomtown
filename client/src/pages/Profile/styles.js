const styles = theme => ({
  ItemCount: {
    fontWeight: "bold"
  },
  itemCountFont: {
    fontSize: "1.3125rem;"
  },
  UserContainer: {
    backgroundColor: "#212121",
    alignItems: "center",
    display: "flex",
    flexDirection: "column"
  },
  UserCard: {
    width: "92%",
    marginTop: "5%",
    padding: "60px"
  },
  CustomAvatarImage: {
    borderRadius: 30
  },
  UserNameContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px"
  },
  UserName: {
    fontSize: "2.8rem",
    marginLeft: "16px",
    color: "rgba(0, 0, 0, 0.54)"
  },
  UserContent: {
    padding: "48px",
    width: "100%"
  },
  UserBio: {
    marginBottom: "48px"
  },

  sharedTitle: {
    color: "#f9a825",
    padding: "12px",
    fontSize: "36px"
  },
  noItemContainer: {
    height: "350px",
    width: "92%",
    paddingTop: "100px",
    backgroundColor: "#212121"
  },
  noItemCount: {
    color: "white"
  }
});

export default styles;
