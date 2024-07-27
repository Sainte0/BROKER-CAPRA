// src/components/Breadcrumb.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './css/Breadcrumb.css'; // Opcional: Importa estilos CSS si los tienes

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div className="background">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/">HOME</Link>
                        </li>
                        {pathnames.map((pathname, index) => {
                            const isLast = index === pathnames.length - 1;
                            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                            return isLast ? (
                                <li
                                    key={to}
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    {pathname.toUpperCase()}
                                </li>
                            ) : (
                                <li key={to} className="breadcrumb-item">
                                    <Link to={to}>{pathname.toUpperCase()}</Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default Breadcrumb;
