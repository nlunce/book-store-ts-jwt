/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  id?: string | null,
  title: string,
  author: Array< string >,
  description: string,
  bookCover: string,
  price: number,
  ISBN10: string,
  stock: number,
  available: boolean,
};

export type ModelBookConditionInput = {
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  description?: ModelStringInput | null,
  bookCover?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  ISBN10?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  available?: ModelBooleanInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Book = {
  __typename: "Book",
  id: string,
  title: string,
  author: Array< string >,
  description: string,
  bookCover: string,
  price: number,
  ISBN10: string,
  stock: number,
  available: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBookInput = {
  id: string,
  title?: string | null,
  author?: Array< string > | null,
  description?: string | null,
  bookCover?: string | null,
  price?: number | null,
  ISBN10?: string | null,
  stock?: number | null,
  available?: boolean | null,
};

export type DeleteBookInput = {
  id: string,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  author?: ModelStringInput | null,
  description?: ModelStringInput | null,
  bookCover?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  ISBN10?: ModelStringInput | null,
  stock?: ModelIntInput | null,
  available?: ModelBooleanInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  author?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  bookCover?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  ISBN10?: ModelSubscriptionStringInput | null,
  stock?: ModelSubscriptionIntInput | null,
  available?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      title: string,
      author: Array< string >,
      description: string,
      bookCover: string,
      price: number,
      ISBN10: string,
      stock: number,
      available: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    id: string,
    title: string,
    author: Array< string >,
    description: string,
    bookCover: string,
    price: number,
    ISBN10: string,
    stock: number,
    available: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
