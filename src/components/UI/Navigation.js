import React from 'react';
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return(
        <header className={classes.header}>
            <div className={classes.logo}>Great Quotes</div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/quotes' className={(navData) => navData.isActive ? classes.active : ""}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' className={(navData) => navData.isActive ? classes.active : ""}>
                            New Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default Navigation;


/*
<header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>



 */