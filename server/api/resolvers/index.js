const { ApolloError } = require("apollo-server-express");
const jwt = require("jsonwebtoken");
const authMutations = require("./auth");

const { DateScalar } = require("../custom-types");

module.exports = app => {
  return {
    // Date: DateScalar,

    Query: {
      viewer(parent, args, context, info) {
        if (context.token) {
          console.log(jwt.decode(context.token, app.get("JWT_SECRET")));
          return jwt.decode(context.token, app.get("JWT_SECRET"));
        } else {
          return null;
        }
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
          const items = await pgResource.getItems(filter);
          return items;
        } catch (error) {
          throw new ApolloError(error);
        }
      },
      async tags(parent, { args }, { pgResource }, info) {
        try {
          const tags = await pgResource.getTags(args);
          return tags;
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
    },

    Mutation: {
      ...authMutations(app),
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
      }
    }
  };
};
