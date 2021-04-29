import React from "react";

import "../styles/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div>
            <p>
              Designed with ❤ by{" "}
              <a href="https://www.twitter.com/isaiasfer4">Isaias Fernandez</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
