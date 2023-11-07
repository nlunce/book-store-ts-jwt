type NavbarAuthOverrides = {
  Navbar: { width: string };
  Home: { style: { cursor: string } };
  Books: { style: { cursor: string } };
  "Contact us": { style: { cursor: string } };
};

const navbarAuthOverrides: NavbarAuthOverrides = {
  Navbar: { width: "100%" },
  Home: {
    style: {
      cursor: "pointer",
    },
  },
  Books: {
    style: {
      cursor: "pointer",
    },
  },
  "Contact us": {
    style: {
      cursor: "pointer",
    },
  },
};

export default navbarAuthOverrides;
