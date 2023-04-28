import Logo from "./assets/logo.png";
import NavSection from "./NavSection";
import { reportes, modulos, administracion, dataBase } from "./data";
import { AiOutlinePushpin } from "react-icons/ai";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const sortedDatabase = dataBase.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    return (
        <aside className={isMenuOpen ? "menu wrapped" : "menu"}>
            <AiOutlinePushpin
                className={isMenuOpen ? "hide hide-active" : "hide"}
                onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                }}
            />
            <nav className={isMenuOpen && "inactive"}>
                <div className="logo">
                    <img src={Logo} alt="logo"></img>
                    <h1>Quasar</h1>
                </div>
                <NavSection title={"REPORTES"} list={reportes} />
                <NavSection title={"MODULOS"} list={modulos} />
                <NavSection title={"ADMINISTRACIÓN"} list={administracion} />
                <NavSection title={"BASE DE DATOS"} list={sortedDatabase} />
            </nav>
        </aside>
    );
};

export default NavBar;
