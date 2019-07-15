function tagsQueryString(tags, itemId) {
  const parts = tags.map((tag, i) => `($${i + 1}, ${itemId})`);
  return parts.join(",") + ";";
}

module.exports = postgres => {
  return {
    async createUser({ fullname, email, password }) {
      const newUserInsert = {
        text: "", // @TODO: Authentication - Server
        values: [fullname, email, password]
      };
      try {
        const user = await postgres.query(newUserInsert);
        return user.rows[0];
      } catch (e) {
        switch (true) {
          case /users_fullname_key/.test(e.message):
            throw "An account with this username already exists.";
          case /users_email_key/.test(e.message):
            throw "An account with this email already exists.";
          default:
            throw "There was a problem creating your account.";
        }
      }
    },
    async getUserAndPasswordForVerification(email) {
      const findUserQuery = {
        text: "", // @TODO: Authentication - Server
        values: [email]
      };
      try {
        const user = await postgres.query(findUserQuery);
        if (!user) throw "User was not found.";
        return user.rows[0];
      } catch (e) {
        throw "User was not found.";
      }
    },
    async getUserById(id) {
      const findUserQuery = {
        text: "SELECT * FROM users WHERE id = $1 LIMIT 1;", // @TODO: Basic queries
        values: [id] //
      };
      try {
        const user = await postgres.query(findUserQuery);
        return user.rows[0];
      } catch (e) {
        throw "User can't be found";
      }
    },
    async getItems(idToOmit) {
      const items = await postgres.query({
        text: `SELECT * FROM items WHERE ownerid != $1;`,
        values: idToOmit ? [idToOmit] : []
      }); //done
      try {
        return items.rows;
      } catch (e) {
        throw "Items can't be found";
      }
    },
    async getItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT *
        FROM items
        WHERE ownerid = $1
        `,
        values: [id]
      });
      try {
        return items.rows;
      } catch (e) {
        throw "Items can't be found";
      }
    },
    async getBorrowedItemsForUser(id) {
      const items = await postgres.query({
        text: `SELECT * 
        FROM items
        WHERE borrowerid = $1
        `,
        values: [id]
      });
      try {
        return items.rows;
      } catch (e) {
        throw "Items can't be found";
      }
    },
    async getTags() {
      const tags = await postgres.query(`select * from tags`);
      try {
        return tags.rows;
      } catch (e) {
        throw "Tags can't be found";
      }
    },
    async getTagsForItem(id) {
      const tagsQuery = {
        text: `SELECT * 
        FROM tags 
        INNER JOIN itemtags
        ON tags.id = itemtags.tagid
        WHERE itemtags.itemid= $1`,
        values: [id]
      };
      try {
        const tags = await postgres.query(tagsQuery);
        return tags.rows;
      } catch (e) {
        throw "Tags can't be found";
      }
    },
    async saveNewItem({ item, user }) {
      return new Promise((resolve, reject) => {
        postgres.connect((err, client, done) => {
          try {
            client.query("BEGIN", async err => {
              const { title, description, tags } = item;

              const newItem = await postgres.query({
                text: `INSERT INTO items ( title, description, ownerid)
                VALUES ($1, $2, $3)
                RETURNING *`,
                values: [title, description, user]
              });

              const itemId = newItem.rows[0].id;
              const tagId = tags.map(tag => tag.id);
              console.log(itemId);
              console.log(tagId);

              const newItemTag = await postgres.query({
                text: `INSERT INTO itemtags (tagid, itemid)
                VALUES ${tagsQueryString([tags], itemId)}`,
                values: tagId
              });

              client.query("COMMIT", err => {
                if (err) {
                  throw err;
                }
                done();
                resolve(newItem.rows[0]);
              });
            });
          } catch (e) {
            client.query("ROLLBACK", err => {
              if (err) {
                throw err;
              }
              done();
            });
            switch (true) {
              default:
                throw e;
            }
          }
        });
      });
    }
  };
};
