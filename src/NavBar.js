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
    FiUser,
} from "react-icons/fi";
import { MdOutlineInventory2, MdPendingActions } from "react-icons/md";
import { BiBell, BiCategory } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { TbRoute } from "react-icons/tb";
import { BsTools, BsTruck } from "react-icons/bs";
import { TbBuildingWarehouse, TbReplace } from "react-icons/tb";
import { FaWarehouse, FaUsers } from "react-icons/fa";
import { TfiRulerAlt } from "react-icons/tfi";
import { IoBusinessOutline } from "react-icons/io5";
import { CgExtensionRemove } from "react-icons/cg";

const NavBar = () => {
    const reportes = [
        { title: "Dashboard", Icon: FiHome },
        {
            title: "Campañas",
            Icon: FiCalendar,
        },
        { title: "Inventarios", Icon: MdOutlineInventory2 },
        {
            title: "Notificaciones",
            Icon: BiBell,
        },
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
        {
            title: "No Quasar",
            Icon: TbBuildingWarehouse,
        },
        {
            title: "Transporte",
            Icon: BsTruck,
            sublist: [
                "Solicitudes de Transporte",
                "Rutas Generadas",
                "Busqueda",
            ],
        },
        { title: "Producción", Icon: FiBox },
        { title: "Reposiciones", Icon: TbReplace },
        { title: "Desinstalaciones", Icon: CgExtensionRemove },
        {
            title: "Almacen",
            Icon: FaWarehouse,
            sublist: ["Ingreso de Elementos", "POR DEFINIR"],
        },
        {
            title: "Relevamientos",
            Icon: TfiRulerAlt,
        },
    ];
    const administracion = [
        {
            title: "Crear Campaña",
            Icon: FiCalendar,
            sublist: ["Agregar Campaña", "Lista"],
        },
        {
            title: "Notificaciones",
            Icon: BiBell,
        },
        {
            title: "Roles",
            Icon: FiUser,
        },
        {
            title: "Asignación de Rutas",
            Icon: TbRoute,
        },
    ];
    const dataBase = [
        {
            title: "Tiendas",
            Icon: FiShoppingCart,
            sublist: [
                "Grupo Económico",
                "Cadena",
                "Tiendas",
                "Formato de Tienda",
            ],
        },
        { title: "Usuarios", Icon: FiUsers },
        {
            title: "Categorias",
            Icon: BiCategory,
            sublist: ["Categoría Master", "Categoría Padre", "Categoria"],
        },
        { title: "Clientes", Icon: FaUsers },
        { title: "Motivos y Submotivos", Icon: FiCheckCircle },
        {
            title: "Proveedores",
            Icon: IoBusinessOutline,
            sublist: ["Nombre", "Usuarios"],
        },
        {
            title: "Placas",
            Icon: IoBusinessOutline,
            sublist: ["Nombre", "Usuarios"],
        },
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
