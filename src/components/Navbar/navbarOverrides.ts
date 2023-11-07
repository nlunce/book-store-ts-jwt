import { NavbarOverridesProps } from "../../ui-components/Navbar";

const navbarOverrides: NavbarOverridesProps = {
  Navbar: {
    width: "100%",
  },
  "Frame 5": {
    // Customize Frame 5 properties if needed
  },

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
    onClick: () => {
      // Define the onClick behavior for "Contact us"
      alert("Contact us clicked"); // For example, show an alert
    },
  },
  "Frame 321": {
    // Customize Frame 321 properties if needed
  },
  MyIcon: {
    // Customize MyIcon properties if needed
  },
  actions: {
    // Customize actions properties if needed
  },
  Button39493466: {
    onClick: () => {
      // Define the onClick behavior for Button39493466
      alert("Button 39493466 clicked"); // For example, show an alert
    },
  },
  Button39493467: {
    onClick: () => {
      // Define the onClick behavior for Button39493467
      alert("Button 39493467 clicked"); // For example, show an alert
    },
  },
};

export default navbarOverrides;
