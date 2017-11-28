import React from "react";
import { Link } from "react-router";

export const Header = () => (
    <header className="header">
        <div className="content-wrap">
            <div className="logo">
                <h1>
                    <Link to="/">Jesmo Drazik Blog</Link>
                </h1>
                <p className="description">Développeur web pour l'agence de production Wandi</p>
                <div className="find-me">
                    <a href="https://twitter.com/JesmoDrazik">Twitter</a>
                    <a href="https://github.com/drazik">GitHub</a>
                </div>
            </div>
        </div>
    </header>
);
