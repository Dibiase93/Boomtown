const { gql } = require("apollo-server-express");

module.exports = gql`
  scalar Date

  enum Role {
    VIEWER
  }

  directive @auth(requires: Role = VIEWER) on OBJECT | FIELD_DEFINITION

  type Item @auth(requires: VIEWER) {
    id: ID!
    title: String!
    imageurl: String
    description: String!
    itemowner: User!
    tags: [Tag!]
    created: String
    borrower: User
  }

  type User @auth(requires: VIEWER) {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    items: [Item]
    borrowed: [Item]
  }

  type Tag {
    id: ID!
    title: String!
  }

  input AssignedTag {
    id: ID!
    title: String!
  }

  input NewItemInput {
    title: String!
    description: String
    tags: [AssignedTag!]
  }

  type Query {
    user(id: ID!): User
    viewer: User
    items(filter: ID): [Item]
    tags: [Tag]
  }

  input SignupInput {
    fullname: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    login(user: LoginInput!): User!
    logout: Boolean!
    signup(user: SignupInput!): User!
    addItem(item: NewItemInput!): Item
  }
`;
