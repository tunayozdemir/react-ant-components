import React from 'react';
import { Link } from 'react-router-dom';
import './PageList.scss';
import routes from '../../Route';


function PagesList() {
  return (
    <ul className="pages">
      {routes.map((route, index) => {
        return (
          <li key={index}>
            <Link to={route.path} target="_blank">
              {route.path}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default PagesList;
