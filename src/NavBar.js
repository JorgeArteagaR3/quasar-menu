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
        {
            title: "No Quasar",
            Icon: TbBuildingWarehouse,
            sublist: ["Proceso", "Base de Datos"],
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
        {
            title: "Almacen",
            Icon: FaWarehouse,
            sublist: ["Ingreso de Elementos", "POR DEFINIR"],
        },
        {
            title: "Relevamientos",
            Icon: TfiRulerAlt,
            sublist: ["Lista de Relevamientos", "Base de datos Tren"],
        },
    ];
    const administracion = [
        {
            title: "Campañas",
            Icon: FiCalendar,
            sublist: [
                "Agregar Campaña",
                "Lista",
                "Proceso",
                "Desinstalaciones",
            ],
        },
        {
            title: "Notificaciones",
            Icon: BiBell,
            sublist: ["Administrar Notificaciones", "Lista"],
        },
        {
            title: "Perfiles",
            Icon: FiUser,
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
