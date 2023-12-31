/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBook = /* GraphQL */ `subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
  onCreateBook(filter: $filter) {
    id
    title
    author
    description
    bookCover
    price
    ISBN10
    stock
    available
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBookSubscriptionVariables,
  APITypes.OnCreateBookSubscription
>;
export const onUpdateBook = /* GraphQL */ `subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
  onUpdateBook(filter: $filter) {
    id
    title
    author
    description
    bookCover
    price
    ISBN10
    stock
    available
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBookSubscriptionVariables,
  APITypes.OnUpdateBookSubscription
>;
export const onDeleteBook = /* GraphQL */ `subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
  onDeleteBook(filter: $filter) {
    id
    title
    author
    description
    bookCover
    price
    ISBN10
    stock
    available
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBookSubscriptionVariables,
  APITypes.OnDeleteBookSubscription
>;
