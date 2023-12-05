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

// CreateBookForm component for creating/editing book information
export default function CreateBookForm({ method, event }) {
  // Retrieve data from the current action
  const data = useActionData();
  // Functions to handle navigation
  const navigate = useNavigate();
  const navigation = useNavigation();

  // Check if the form is currently submitting
  const isSubmitting = navigation.state === "submitting";

  // Function to handle cancel button click
  function cancelHandler() {
    // Navigate back to the previous page
    navigate("..");
  }

  // JSX structure for the book creation/edit form
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

// Async function to handle the form submission action
export async function action({ request }) {
  // Set the HTTP method for the request
  const method = "POST";
  // Get form data from the request
  const data = await request.formData();

  // Create a data object with book details from the form
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

  // API endpoint URL for creating a new book
  const url =
    "https://blwjixbd7b.execute-api.us-west-2.amazonaws.com/dev/create-book";
  // Get the authentication token
  const token = getAuthToken();

  // Send a request to the API to create a new book
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "text/plain",
      Authorization: token,
    },
    body: JSON.stringify(bookData),
  });

  // If the response is not okay, throw an error with a message
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  // Redirect to the books page after successful book creation
  return redirect("/books");
}
