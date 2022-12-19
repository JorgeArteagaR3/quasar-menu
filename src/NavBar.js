import React, { useState } from "react";
import Logo from "./assets/logo.png";
import NavSection from "./NavSection";
import {
    FiHome,
    FiBox,
    FiCalendar,
    FiShoppingCart,
    FiUsers,
    FiCheckCircle,
    FiPackage,
} from "react-icons/fi";
import { MdOutlineInventory2, MdPendingActions } from "react-icons/md";
import { BiBell, BiCategory } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbRoute } from "react-icons/tb";
import { BsTools, BsTruck } from "react-icons/bs";
import { TbBuildingWarehouse } from "react-icons/tb";
import { FaWarehouse, FaUsers } from "react-icons/fa";
import { TfiRulerAlt } from "react-icons/tfi";
import { IoBusinessOutline } from "react-icons/io5";

const NavBar = () => {
    const reportes = [
        { title: "Dashboard", Icon: FiHome },
        { title: "Inventarios", Icon: MdOutlineInventory2 },
        { title: "Pendientes", Icon: MdPendingActions },
        { title: "Incidencias", Icon: RiErrorWarningLine },
        { title: "Rutas", Icon: TbRoute },
    ];
    const modulos = [
        {
            title: "Mantenimientos",
            Icon: BsTools,
            sublist: ["Lista de Mantenimientos", "Solicitud de Mantenimiento"],
        },
        { title: "No Quasar", Icon: TbBuildingWarehouse },
        { title: "Transporte", Icon: BsTruck },
        { title: "Producción", Icon: FiBox },
        { title: "Almacen", Icon: FaWarehouse },
        { title: "Relevamientos", Icon: TfiRulerAlt },
    ];
    const administracion = [
        { title: "Campañas", Icon: FiCalendar },
        { title: "Notificaciones", Icon: BiBell },
    ];
    const dataBase = [
        { title: "Tiendas", Icon: FiShoppingCart },
        { title: "Usuarios", Icon: FiUsers },
        { title: "Categorias", Icon: BiCategory },
        { title: "Clientes", Icon: FaUsers },
        { title: "Motivos y Submotivos", Icon: FiCheckCircle },
        { title: "Proveedores", Icon: IoBusinessOutline },
        { title: "Elementos", Icon: FiPackage },
    ];
    return (
        <aside>
            <nav>
                <div className="logo">
                    <img
                        src={Logo}
                        alt="logo"
                    ></img>
                    <h1>Quasar</h1>
                </div>
                <NavSection
                    title={"REPORTES"}
                    list={reportes}
                />
                <NavSection
                    title={"MODULOS"}
                    list={modulos}
                />
                <NavSection
                    title={"ADMINISTRACIÓN"}
                    list={administracion}
                />
                <NavSection
                    title={"BASE DE DATOS"}
                    list={dataBase}
                />
            </nav>
        </aside>
    );
};

export default NavBar;
