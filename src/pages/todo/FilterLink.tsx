import React from 'react';
import { NavLink } from 'react-router-dom';

interface FilterLinkProps {
    filter: string;
}
const FilterLink: React.FC<FilterLinkProps> = ({ filter, children }) => {
    return (
        <NavLink
            to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
            activeStyle={{
                textDecoration: 'none',
                color: 'black',
            }}
        >
            {children}
        </NavLink>
    );
};

export default FilterLink;
