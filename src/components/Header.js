import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>Book <strong>Management</strong></h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 links d-flex justify-content-center align-items-center mt-5">
            <div className="content d-flex justify-content-between align-items-center">
              <NavLink to="/" className="link btn btn-primary" role="button" activeClassName="active" exact>
                <span>Books List</span>
                <i className="bi bi-list-ul"></i>
              </NavLink>
              <NavLink to="/add" className="link btn btn-primary" role="button" activeClassName="active">
                <span>Add Book</span>
                <i className="bi bi-plus-circle"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;