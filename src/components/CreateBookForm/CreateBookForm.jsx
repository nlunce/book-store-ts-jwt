import React from "react";
import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import { getAuthToken } from "../../util/auth";
import classes from "./CreateBookForm.module.css";

export default function CreateBookForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input
          id="author"
          type="text"
          name="author"
          required
          defaultValue={event ? event.author : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <p>
        <label htmlFor="bookCover">Book Cover</label>
        <input
          id="bookCover"
          type="url"
          name="bookCover"
          required
          defaultValue={event ? event.bookCover : ""}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="float"
          name="price"
          required
          defaultValue={event ? event.price : ""}
        />
      </p>
      <p>
        <label htmlFor="ISBN10">ISBN10</label>
        <input
          id="ISBN10"
          type="text"
          name="ISBN10"
          required
          defaultValue={event ? event.ISBN10 : ""}
        />
      </p>
      <p>
        <label htmlFor="stock">Stock</label>
        <input
          id="stock"
          type="number"
          name="stock"
          required
          defaultValue={event ? event.stock : ""}
        />
      </p>

      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const method = "POST";
  const data = await request.formData();

  const bookData = {
    tableName: "Book-bdqngtw7rbcubg5djn65kaiddu-staging",
    __typename: "Book",
    title: data.get("title"),
    author: data.get("author"),
    description: data.get("description"),
    bookCover: data.get("bookCover"),
    price: parseFloat(data.get("price")),
    ISBN10: data.get("ISBN10"),
    stock: parseInt(data.get("stock")),
  };

  const url =
    "https://blwjixbd7b.execute-api.us-west-2.amazonaws.com/dev/create-book";
  const token = getAuthToken();
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "text/plain",
      Authorization: token,
    },
    body: JSON.stringify(bookData),
  });

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/books");
}
