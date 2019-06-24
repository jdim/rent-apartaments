import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SiteNav.css';
import CompanyLogo from './CompanyLogo';
import classNames from 'classnames';
import ModalDialog from './ModalDialog';
import ContactMe from './ContactMe';

function SiteNav({ className, match }) {
  const [popupContactMe, setPopupContactMe] = useState(false);
  return (
    <>
      {popupContactMe && (
        <ModalDialog onClickClose={() => setPopupContactMe(false)}>
          <ContactMe />
        </ModalDialog>
      )}
      <nav className={classNames('SiteNav', className)}>
        <CompanyLogo className="SiteNav-Logo" />

        <ul className="SiteNav-Menu SiteNav-Menu_logoSpace">
          <li className="SiteNav-MenuItem">
            <NavLink
              to="/guides"
              className="SiteNav-Link"
              activeClassName="SiteNav-Link_active"
            >
              Travel Guides
            </NavLink>
          </li>
          <li className="SiteNav-MenuItem">
            <NavLink
              to="/rent"
              className="SiteNav-Link"
              activeClassName="SiteNav-Link_active"
            >
              Rent Apartments
            </NavLink>
          </li>
          <li className="SiteNav-MenuItem">
            <NavLink
              to="/ideas"
              className="SiteNav-Link"
              activeClassName="SiteNav-Link_active"
            >
              Holiday Ideas
            </NavLink>
          </li>
        </ul>

        <ul
          className="SiteNav-Menu"
          onClick={() => setPopupContactMe(true)}
          role="presentation"
        >
          <li className="SiteNav-MenuItem">
            <div className="SearchString">
              Search
              <i className="fas fa-search SearchString-Icon" />
            </div>
          </li>
          <li className="SiteNav-MenuItem">
            <div className="LangSelector">
              English
              <i className="fas fa-sort-down LangSelector-Icon" />
            </div>
          </li>
          <li className="SiteNav-MenuItem SiteNav-Login">
            <div className="Login">Login</div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SiteNav;
