
/* "StAuth10244: I Nishkarsh Dubb, 000838587 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else." */

import React from "react";

// Create a Footer component
function Footer() {

    // Get the current year
    const year = new Date().getFullYear();
// Return the footer
  return (
    <footer>
      <p>Copyright &copy; Nishkarsh Dubb | 000838587- {year}</p>
    </footer>
  );
}

export default Footer;