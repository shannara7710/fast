import React from "react";
import "./style.css";

const Footer =()=>{

    return(
        <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 >Footer Content</h5>
              <p className="grey-text ">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 >Links</h5>
              <ul>
                <li><a className="grey-text " href="#!">Link 1</a></li>
                <li><a className="grey-text " href="#!">Link 2</a></li>
                <li><a className="grey-text " href="#!">Link 3</a></li>
                <li><a className="grey-text " href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 Copyright Text
          <a className=" right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )

}

export default Footer;