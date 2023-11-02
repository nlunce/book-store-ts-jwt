import React, { useState } from "react";
import {
  BrowseBooksPage as BrowseBooks,
  BookActionCardCollection,
  CloseBar,
  ProductDetail,
} from "../ui-components";

import {
  navbarOverrides as navbarOverridesImported,
  footerOverrides,
} from "../stylingOverrides.js";

import { LogoComponent } from "../images";

import { AuthenticatorModal, ContactUsModal } from "../modals";

// Define a functional component for the main Browse Books page.
const BrowseBooksUnauthenticated: React.FC = () => {
  // Initialize state variables using the useState hook.
  const [activeContent, setActiveContent] = useState(0);
  const [book, setBook] = useState();
  const [showBookCollection, setShowBookCollection] = useState(true);

  // Define overrides for styling and behavior of various components within this page.
  const browseBooksOverrides = {
    BrowseBooksPage: {
      width: "100%",
    },
    Navbar: {
      overrides: {
        ...navbarOverridesImported,

        Home: {
          ...navbarOverridesImported["Home"],
          onClick: () => {
            setActiveContent(0);
            setShowBookCollection(true);
          },
        },
        Books: {
          ...navbarOverridesImported["Books"],
          onClick: () => {
            setActiveContent(0);
            setShowBookCollection(true);
          },
        },
        "Contact us": {
          ...navbarOverridesImported["Contact us"],
          onClick: () => {
            setActiveContent(4);
          },
        },
        Button39493466: {
          onClick: () => {
            setActiveContent(8);
          },
        },
        Button39493467: {
          onClick: () => {
            setActiveContent(9);
          },
        },
      },
      logoSlot: <LogoComponent />,
    },

    Footer: { overrides: footerOverrides },
  };

  return (
    <>
      {/* Render the main Browse Books page with specified overrides. */}
      <BrowseBooks
        overrides={browseBooksOverrides}
        bookCollectionSlot={
          showBookCollection ? (
            <BookActionCardCollection
              overrideItems={({ item, index }) => ({
                overrides: {
                  image: {
                    style: { cursor: "pointer" },
                    onClick: () => {
                      setBook(item);
                      setShowBookCollection(false);

                      window.scrollTo(0, 0);
                    },
                  },

                  Title: {
                    style: { cursor: "pointer" },
                    onClick: () => {
                      setBook(item);
                      setShowBookCollection(false);

                      window.scrollTo(0, 0);
                    },
                  },
                },
              })}
            />
          ) : (
            <>
              {/* Render a close bar and book details when a specific book is selected. */}
              <CloseBar
                width={"100%"}
                height={"50px"}
                overrides={{
                  MyIcon: {
                    style: { cursor: "pointer" },
                    onClick: () => {
                      setActiveContent(0);
                      setShowBookCollection(true);
                    },
                  },
                }}
              />

              <ProductDetail book={book} />
            </>
          )
        }
      />

      {/* Conditional rendering of ContactUsModal based on the activeContent state. */}
      {activeContent === 4 && (
        <>
          <ContactUsModal
            overlayFunctionality={() => {
              setActiveContent(0);
            }}
          />
        </>
      )}

      {/* Conditional rendering of AuthenticatorModal based on the activeContent state. */}
      {(activeContent === 8 || activeContent === 9) && (
        <>
          <AuthenticatorModal
            overlayFunctionality={() => {
              setActiveContent(0);
            }}
            initialState={activeContent === 9 ? "signUp" : undefined}
          />
        </>
      )}
    </>
  );
};

export default BrowseBooksUnauthenticated;
