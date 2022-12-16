import React from "react";
import Logo from "./assets/logo.png";
const NavBar = () => {
    const reportes = [
        "Dashboard",
        "Clientes-Campaña",
        "Inventarios",
        "Notificaciones",
        "Pendientes",
        "Incidencias",
        "Rutas",
    ];
    const modulos = [
        "Mantenimiento",
        "No Quasar",
        "Transporte",
        "Producción",
        "Reposiciones",
        "Desinstalaciones",
        "Almacen",
        "Relevamiento",
    ];
    return (
        <aside>
            <nav>
                <div className="logo">
                    <img
                        src={Logo}
                        alt="logo"
                    ></img>
                    <p>Quasar</p>
                </div>
                <div className="nav-section">
                    <p>REPORTE</p>
                    <ul>
                        {reportes.map((item) => (
                            <li className="list-item">
                                <div className="circle"></div> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-section">
                    <p>MODULOS</p>
                    <ul>
                        {modulos.map((item) => (
                            <li className="list-item">
                                <div className="circle"></div> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default NavBar;
