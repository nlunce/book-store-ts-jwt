import React, { useState } from "react";
import {
  BrowseBooksPageAuthenticated as BrowseBooksAuth,
  BookActionCardCollection,
  CloseBar,
  ProductDetail,
} from "../ui-components";

import {
  navbarAuthenticatedOverrides as navbarAuthenticatedOverridesImported,
  footerOverrides,
} from "../stylingOverrides.js";

import { LogoComponent } from "../images";
import { ContactUsModal, RedeemCodeModal } from "../modals";

const BrowseBooksAuthenticated: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [book, setBook] = useState();
  const [showBookCollection, setShowBookCollection] = useState(true);

  const browseBooksAuthOverrides = {
    BrowseBooksPageAuthenticated: {
      width: "100%",
    },

    // Overrides for the authenticated Navbar component.
    NavbarAuthenticated: {
      overrides: {
        ...navbarAuthenticatedOverridesImported,
        Home: {
          // Define behavior for the "Home" button in the Navbar.
          ...navbarAuthenticatedOverridesImported["Home"],
          onClick: () => {
            setActiveContent(0);
            setShowBookCollection(true);
          },
        },

        Books: {
          // Define behavior for the "Books" button in the Navbar.
          ...navbarAuthenticatedOverridesImported["Books"],
          onClick: () => {
            setActiveContent(0);
            setShowBookCollection(true);
          },
        },

        "Contact us": {
          // Define behavior for the "Contact us" button in the Navbar.
          ...navbarAuthenticatedOverridesImported["Contact us"],
          onClick: () => {
            setActiveContent(4);
          },
        },

        "Redeem Code": {
          // Define behavior for the "Redeem Code" button in the Navbar.
          ...navbarAuthenticatedOverridesImported["Redeem Code"],
          onClick: () => {
            setActiveContent(3);
          },
        },

        "Your Books": {
          // Define behavior for the "Your Books" button in the Navbar.
          ...navbarAuthenticatedOverridesImported["Your Books"],
          onClick: () => {
            setActiveContent(5);
          },
        },
      },
      logoSlot: <LogoComponent />,
    },

    // Overrides for the Footer component.
    Footer: { overrides: footerOverrides },
  };

  return (
    <>
      <BrowseBooksAuth
        overrides={browseBooksAuthOverrides}
        bookCollectionSlot={
          showBookCollection ? (
            <BookActionCardCollection
              overrideItems={({ item, index }) => ({
                overrides: {
                  // Define behavior for other elements in the book collection.
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

      {/* Render the RedeemCodeModal when activeContent is 3. */}
      {activeContent === 3 && (
        <>
          <RedeemCodeModal
            overlayFunctionality={() => {
              setActiveContent(0);
            }}
          />
        </>
      )}

      {/* Render the ContactUsModal when activeContent is 4. */}
      {activeContent === 4 && (
        <>
          <ContactUsModal
            overlayFunctionality={() => {
              setActiveContent(0);
            }}
          />
        </>
      )}
    </>
  );
};

export default BrowseBooksAuthenticated;
