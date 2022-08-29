import React from 'react';
import "../../styles/Navigation.css";
import {NavLink} from "react-router-dom";

const Navigation = () => {

    return (
        <header className={"header"}>
            <div className={"logo"}>Great Quotes</div>
            <nav className={"nav"}>
                <ul>
                    <li>
                        <NavLink to='/quotes' className={(navData) => navData.isActive ? "active" : ""}>
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/new-quote' className={(navData) => navData.isActive ? "active" : ""}>
                            New Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default React.memo(Navigation);
