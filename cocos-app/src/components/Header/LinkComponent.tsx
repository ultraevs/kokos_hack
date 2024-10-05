import React, { FC } from "react";

interface NavProps {
    link: string;
    content: string;
    classes?: string;
}

const NavElement: FC<NavProps> = ({ link, content, classes }) => {
    return (
        <a href={link} className={classes}>
            {content}
        </a>
    );
};

export default NavElement;
