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

const BrowseBooksUnauthenticated: React.FC = () => {
  const [activeContent, setActiveContent] = useState(0);
  const [book, setBook] = useState();
  const [showBookCollection, setShowBookCollection] = useState(true);

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

      {activeContent === 4 && (
        <>
          <ContactUsModal
            overlayFunctionality={() => {
              setActiveContent(0);
            }}
          />
        </>
      )}

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
