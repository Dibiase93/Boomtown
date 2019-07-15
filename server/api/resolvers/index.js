/**
 *  @TODO: Handling Server Errors
 *
 *  Once you've completed your pg-resource.js methods and handled errors
 *  use the ApolloError constructor to capture and return errors from your resolvers.
 *
 *  Throwing ApolloErrors from your resolvers is a nice pattern to follow and
 *  will help you easily debug problems in your resolving functions.
 *
 *  It will also help you control th error output of your resource methods and use error
 *  messages on the client! (More on that later).
 *
 *  The user resolver has been completed as an example of what you'll need to do.
 *  Finish of the rest of the resolvers when you're ready.
 */
const { ApolloError } = require("apollo-server-express");

// @TODO: Uncomment these lines later when we add auth
// const jwt = require("jsonwebtoken")
// const authMutations = require("./auth")
// -------------------------------
const { DateScalar } = require("../custom-types");

module.exports = app => {
  return {
    // Date: DateScalar,

    Query: {
      viewer() {
        /**
         * @TODO: Authentication - Server
         *
         *  If you're here, you have successfully completed the sign-up and login resolvers
         *  and have added the JWT from the HTTP cookie to your resolver's context.
         *
         *  The viewer is what we're calling the current user signed into your application.
         *  When the user signed in with their username and password, an JWT was created with
         *  the user's information cryptographically encoded inside.
         *
         *  To provide information about the user's session to the app, decode and return
         *  the token's stored user here. If there is no token, the user has signed out,
         *  in which case you'll return null
         */
        return null;
      },

      async user(parent, { id }, { pgResource }, info) {
        try {
          const user = await pgResource.getUserById(id);
          return user;
        } catch (error) {
          throw new ApolloError(error);
        }
      },
      async items(parent, { filter }, { pgResource }, info) {
        try {
          const item = await pgResource.getItems(filter);
          return item;
        } catch (error) {
          throw new ApolloError(error);
        }
      },
      async tags(parent, { args }, { pgResource }, info) {
        try {
          const tag = await pgResource.getTags(args);
          return tag;
        } catch (error) {
          throw new ApolloError(error);
        }
      }
    },

    User: {
      async items({ id }, args, { pgResource }, info) {
        try {
          const item = await pgResource.getItemsForUser(id);
          return item;
        } catch (error) {
          throw new ApolloError(error);
        }
      },
      async borrowed({ id }, args, { pgResource }, info) {
        try {
          const borrowedItems = await pgResource.getBorrowedItemsForUser(id);
          return borrowedItems;
        } catch (error) {
          throw new ApolloError(error);
        }
      }
    },

    Item: {
      async itemowner({ ownerid }, args, { pgResource }, info) {
        try {
          const itemOwner = await pgResource.getUserById(ownerid);
          return itemOwner;
        } catch (error) {
          throw new ApolloError(error);
        }
      },
      async tags({ id }, args, { pgResource }, info) {
        try {
          const itemTag = await pgResource.getTagsForItem(id);
          return itemTag;
        } catch (error) {
          throw new ApolloError(error);
        }
      },
      async borrower({ borrowerid }, args, { pgResource }, info) {
        try {
          const itemBorrower = await pgResource.getUserById(borrowerid);
          return itemBorrower;
        } catch (error) {
          throw new ApolloError(error);
        }
      }
      // -------------------------------
    },

    Mutation: {
      // @TODO: Uncomment this later when we add auth
      // ...authMutations(app),
      // --------------------------------

      async addItem(parent, args, context, info) {
        try {
          const user = 1;
          const newItem = await context.pgResource.saveNewItem({
            item: args.item,
            image: undefined,
            user
          });
          return newItem;
        } catch (error) {
          throw new ApolloError(error);
        }

        // image = await image;
        // const user = await jwt.decode(context.token, app.get("JWT_SECRET"));
        // const newItem = await context.pgResource.saveNewItem({
        //   item: args.item,
        //   image: args.image,
        //   user
        // });
      }
    }
  };
};
