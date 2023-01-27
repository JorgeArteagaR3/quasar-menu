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
import { AiOutlinePushpin } from "react-icons/ai";
import { BsCardHeading } from "react-icons/bs";

import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const reportes = [
        {
            title: "Dashboard",
            Icon: FiHome,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCeOGr90oIW1xfVW3O9DsCs%2FQuasar%252FDashboard%3Fnode-id%3D22%253A3%26starting-point-node-id%3D22%253A3%26scaling%3Dscale-down",
        },
        {
            title: "Campañas",
            Icon: FiCalendar,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FALmWw4QB27ar8XZ1aUA1Eb%2FQuasar%252FCampa%25C3%25B1a%252FProceso%3Fnode-id%3D1%253A2%26starting-point-node-id%3D1%253A2%26scaling%3Dscale-down",
        },
        {
            title: "Inventarios",
            Icon: MdOutlineInventory2,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3ccTyvEYriw2CY0Zk5oXd4%2FQuasar%252FInventarios%3Fpage-id%3D0%253A1%26node-id%3D51%253A38%26viewport%3D1033%252C352%252C0.11%26scaling%3Dscale-down%26starting-point-node-id%3D51%253A38",
        },
        {
            title: "Notificaciones",
            Icon: BiBell,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fafo3nKwwNUzJuI40pZ0o9Y%2FQuasar%252FTodas-las-Notificaciones%3Fpage-id%3D0%253A1%26node-id%3D1%253A27%26viewport%3D795%252C800%252C0.76%26scaling%3Dscale-down",
        },
        {
            title: "Pendientes",
            Icon: MdPendingActions,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYB5Q8ZWaUo6kma88WXr6yF%2FQuasar%252FPendientes%3Fpage-id%3D0%253A1%26node-id%3D36%253A131%26viewport%3D525%252C341%252C0.07%26scaling%3Dscale-down%26starting-point-node-id%3D36%253A131%26show-proto-sidebar%3D1",
        },
        {
            title: "Incidencias",
            Icon: RiErrorWarningLine,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FMGHSRMTcx6iMCjWL46gN2d%2FQuasar%252FIncidencias%3Fpage-id%3D0%253A1%26node-id%3D4%253A173%26viewport%3D1291%252C518%252C0.43%26scaling%3Dcontain%26starting-point-node-id%3D4%253A173",
        },
        {
            title: "Rutas",
            Icon: TbRoute,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHUsWlQmM1AThXr1E53a100%2FQuasar%252FRutas-Reportes%3Fpage-id%3D0%253A1%26node-id%3D1%253A52%26viewport%3D414%252C87%252C0.07%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A52%26show-proto-sidebar%3D1",
        },
    ];
    const modulos = [
        {
            title: "Mantenimientos",
            Icon: BsTools,
            sublist: [
                {
                    subtitle: "Lista de Mantenimientos",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlfmKbn8DFUzIrAlXKzUhT6%2FQuasar%252FLista-de-Mantenimientos%3Fpage-id%3D0%253A1%26node-id%3D2%253A39%26viewport%3D286%252C130%252C0.32%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A39",
                },
                {
                    subtitle: "Solicitud de Mantenimiento",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F76H2CjDe1TOTHPl5IAMLsV%2FQuasar%252FSolicitud-de-Mantenimientos%3Fpage-id%3D0%253A1%26node-id%3D1%253A41%26viewport%3D692%252C403%252C0.19%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A41",
                },
            ],
        },
        {
            title: "No Quasar",
            Icon: TbBuildingWarehouse,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPZFK0WfEqJCZdNC02RkdvS%2FQuasar%252FNo-Quasar%3Fpage-id%3D0%253A1%26node-id%3D25%253A13%26viewport%3D533%252C324%252C0.09%26scaling%3Dscale-down%26starting-point-node-id%3D25%253A13",
        },
        {
            title: "Transporte",
            Icon: BsTruck,
            sublist: [
                {
                    subtitle: "Solicitudes de Transporte",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9GjLnFsuh1oNr4PgkemuCp%2FQuasar%252FTransporte%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D491%252C412%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2",
                },
                {
                    subtitle: "Rutas Generadas",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9GjLnFsuh1oNr4PgkemuCp%2FQuasar%252FTransporte%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D491%252C412%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2",
                },
                {
                    subtitle: "Busqueda",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9GjLnFsuh1oNr4PgkemuCp%2FQuasar%252FTransporte%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D491%252C412%252C0.15%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2",
                },
                {
                    subtitle: "Solicitar Transporte",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBdZnSzX7ykRxcQ4w8lLEt3%2FQuasar%252FTransporte%252FSolicitar-Transporte%3Fpage-id%3D0%253A1%26node-id%3D1%253A21%26viewport%3D718%252C477%252C0.21%26scaling%3Dscale-down",
                },
            ],
        },
        {
            title: "Producción",
            Icon: FiBox,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmSeXVsscWJbCeWKanmmQKd%2FQuasar%252FProducci%25C3%25B3n%3Fpage-id%3D0%253A1%26node-id%3D1%253A164%26viewport%3D402%252C265%252C0.14%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A164%26show-proto-sidebar%3D1",
        },
        {
            title: "Reposiciones",
            Icon: TbReplace,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJLkzuCeh64jdq8vkXoM0EI%2FQuasar%252FReposiciones%3Fpage-id%3D0%253A1%26node-id%3D13%253A2%26viewport%3D733%252C552%252C0.1%26scaling%3Dscale-down%26starting-point-node-id%3D13%253A2",
        },
        {
            title: "Desinstalaciones",
            Icon: CgExtensionRemove,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FZDe5lI8NeKidGorveuQz7S%2FQuasar%252FDesinstalaciones%3Fpage-id%3D0%253A1%26node-id%3D1%253A3%26viewport%3D-68%252C124%252C0.27%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3",
        },
        {
            title: "Almacen",
            Icon: FaWarehouse,

            sublist: [
                {
                    subtitle: "Pendientes de Ingreso",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYwdo442bm6gGxiN1ngHaUD%2FQuasar%252FAlmacen%3Fpage-id%3D0%253A1%26node-id%3D1%253A94%26viewport%3D725%252C494%252C0.42%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A94",
                },
                {
                    subtitle: "Inventario",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FKvdTUR9jCfD0nN3hcQ0zWd%2FQuasar%252FAlmacen%252FInventario%3Fpage-id%3D0%253A1%26node-id%3D1%253A58%26viewport%3D-1057%252C162%252C0.76%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A58",
                },
                {
                    subtitle: "Kardex",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fzio2Luvf6Sn98BtkGuKchb%2FQuasar%252FAlmacen%252FKardex%3Fpage-id%3D0%253A1%26node-id%3D0%253A172%26viewport%3D521%252C343%252C0.27%26scaling%3Dscale-down%26starting-point-node-id%3D0%253A172",
                },
                {
                    subtitle: "Status Proveedor",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FjzQUalUG5MV01xP4u2d3bH%2FQuasar%252FAlmacen%252FStatus-Proveedor%3Fpage-id%3D0%253A1%26node-id%3D1%253A271%26viewport%3D311%252C347%252C0.19%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A271",
                },
                {
                    subtitle: "Despacho de elementos",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVr42YGA8Xud77RCmq92kCg%2FQuasar%252FAlmacen%252FDespacho-de-Elementos%3Fpage-id%3D0%253A1%26node-id%3D3%253A211%26viewport%3D1496%252C459%252C0.56%26scaling%3Dscale-down",
                },
            ],
        },
        {
            title: "Relevamientos",
            Icon: TfiRulerAlt,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4g4qQAL7pX0Q2kSD9PtZdH%2FQuasar%252FRelevamientos%3Fpage-id%3D0%253A1%26node-id%3D9%253A454%26viewport%3D544%252C465%252C0.09%26scaling%3Dscale-down%26starting-point-node-id%3D9%253A454",
        },
    ];
    const administracion = [
        {
            title: "Crear Campaña",
            Icon: FiCalendar,
            sublist: [
                {
                    subtitle: "Lista",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeAuVK5oKSxQdCOByUpFvPF%2FQuasar%252FCampa%25C3%25B1a%252FLista%3Fpage-id%3D0%253A1%26node-id%3D145%253A289%26viewport%3D445%252C322%252C0.16%26scaling%3Dscale-down%26starting-point-node-id%3D145%253A289",
                },
                {
                    subtitle: "Crear Campaña",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8gzsZGygHuD4f3ny6wGHEU%2FQuasar%252FCampa%25C3%25B1a%252FCrear-Campa%25C3%25B1a%3Fpage-id%3D0%253A1%26node-id%3D1%253A150%26viewport%3D794%252C532%252C0.22%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A150",
                },
            ],
        },
        {
            title: "Notificaciones",
            Icon: BiBell,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FISfMVe40E8w7FOPLx4pr1y%2FQuasar%252FAdministrar-Notificaciones%3Fpage-id%3D0%253A1%26node-id%3D2%253A8%26viewport%3D529%252C658%252C0.26%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A8",
        },
        {
            title: "Roles",
            Icon: FiUser,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8xoVBEeTqECt5pmLDHCDcR%2FQuasar%252FGestionar-Roles%3Fpage-id%3D0%253A1%26node-id%3D1%253A137%26viewport%3D358%252C121%252C0.34%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A137",
        },
    ];
    const dataBase = [
        {
            title: "Tiendas",
            Icon: FiShoppingCart,
            sublist: [
                {
                    subtitle: "Grupo Económico",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FNt0fSwRDzFIfGAu8EFaxxp%2FQuasar%252FTiendas%252FGrupo-Economico%3Fpage-id%3D0%253A1%26node-id%3D1%253A3%26viewport%3D-17%252C-3436%252C2.13%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A3",
                },
                {
                    subtitle: "Cadenas",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FcLmPhTCpSAOG2ruhOeLivL%2FQuasar%252FTiendas%252FCadenas%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D728%252C134%252C0.17%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2",
                },
                {
                    subtitle: "Formato de Tienda",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQZFrTm22DM5IzEHWqs5SrB%2FQuasar%252FTiendas%252FFormato-de-Tienda%3Fpage-id%3D0%253A1%26node-id%3D1%253A306%26viewport%3D631%252C-26%252C0.39%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A306",
                },
                {
                    subtitle: "Tienda",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4B0hvJWCKNWjGt0QeGHps9%2FQuasar%252FTiendas%252FTienda%3Fnode-id%3D1%253A2%26starting-point-node-id%3D1%253A2%26scaling%3Dscale-down",
                },
            ],
        },
        {
            title: "Usuarios",
            Icon: FiUsers,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FaIWzrz7plNXBM1TSjPEQ9Q%2FQuasar%252FUsuarios%3Fpage-id%3D0%253A1%26node-id%3D2%253A12%26viewport%3D248%252C308%252C0.35%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A12",
        },
        {
            title: "Categorias",
            Icon: BiCategory,
            sublist: [
                {
                    subtitle: "Categoría Master",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0tNj9PLqLdPpnepH98lTyC%2FQuasar%252FCategor%25C3%25ADas%3Fpage-id%3D0%253A1%26node-id%3D43%253A86%26viewport%3D1615%252C1246%252C0.39%26scaling%3Dscale-down%26starting-point-node-id%3D43%253A86",
                },
                {
                    subtitle: "Categoría Padre",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0tNj9PLqLdPpnepH98lTyC%2FQuasar%252FCategor%25C3%25ADas%3Fpage-id%3D0%253A1%26node-id%3D43%253A86%26viewport%3D1615%252C1246%252C0.39%26scaling%3Dscale-down%26starting-point-node-id%3D43%253A86",
                },
                {
                    subtitle: "Categoria",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F0tNj9PLqLdPpnepH98lTyC%2FQuasar%252FCategor%25C3%25ADas%3Fpage-id%3D0%253A1%26node-id%3D43%253A86%26viewport%3D1615%252C1246%252C0.39%26scaling%3Dscale-down%26starting-point-node-id%3D43%253A86",
                },
            ],
        },
        {
            title: "Clientes",
            Icon: FaUsers,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdZkt8XN9yBClYzKXDCQ8Ua%2FQuasar%252FClientes%3Fpage-id%3D0%253A1%26node-id%3D2%253A148%26viewport%3D400%252C515%252C0.44%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A148",
        },
        {
            title: "Motivos y Submotivos",
            Icon: FiCheckCircle,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFBC2LeZVeHExUESfALUkmu%2FQuasar%252FMotivos-y-Submotivos%3Fpage-id%3D0%253A1%26node-id%3D1%253A241%26viewport%3D-2831%252C383%252C0.93%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A241",
        },
        {
            title: "Proveedores",
            Icon: IoBusinessOutline,
            sublist: [
                {
                    subtitle: "Nombre",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIhkRSihxQXMwdvf8sGH08N%2FQuasar%252FProveedores%252FNombe%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D694%252C579%252C0.71%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2",
                },
                {
                    subtitle: "Usuarios",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3GM2jAP5wiuddBXDCEnXcO%2FQuasar%252FProveedores%252FUsuarios%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D642%252C443%252C0.57%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A2",
                },
            ],
        },
        {
            title: "Placas",
            Icon: BsCardHeading,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FYJupVGMhpsw69FjplcLAzw%2FQuasar%252FPlacas%3Fpage-id%3D0%253A1%26node-id%3D1%253A198%26viewport%3D438%252C367%252C0.41%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A198",
        },
        {
            title: "Elementos",
            Icon: FiPackage,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fjco1OUTBeE9nzIa4Y7TlLI%2FQuasar%252FElementos%3Fpage-id%3D0%253A1%26node-id%3D1%253A2%26viewport%3D854%252C690%252C0.79%26scaling%3Dscale-down",
        },
        {
            title: "No Quasar",
            Icon: TbBuildingWarehouse,
            url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FAiKnP7LASAsbnvIiRBZRmD%2FQuasar%252FNo-Quasar-BD%3Fpage-id%3D0%253A1%26node-id%3D1%253A10%26viewport%3D-209%252C412%252C0.68%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A10",
        },
        {
            title: "Relevamientos",
            Icon: TfiRulerAlt,
            sublist: [
                {
                    subtitle: "Formularios",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FeaKVSceCGYmIW3i4NvqYpu%2FQuasar%252FRelevamientos%252FFormularios%3Fpage-id%3D0%253A1%26node-id%3D2%253A2%26viewport%3D693%252C477%252C0.55%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A2",
                },
                {
                    subtitle: "Categorias",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7s9LXhk1ZBNhCKASX5SwRc%2FQuasar%252FRelevamientos%252FCategor%25C3%25ADas(tren)%3Fpage-id%3D0%253A1%26node-id%3D2%253A112%26viewport%3D129%252C296%252C0.4%26scaling%3Dscale-down%26starting-point-node-id%3D2%253A112",
                },
                {
                    subtitle: "Tipo de Bandeja",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F45W1DfNxgAgt5oIwpauvMO%2FQuasar%252FRelevamientos%252FTipo-de-Bandeja%3Fpage-id%3D0%253A1%26node-id%3D1%253A133%26viewport%3D-645%252C160%252C0.74%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A133",
                },
                {
                    subtitle: "Lista",
                    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FhYWYAp7TvcIDrZm4ybVur7%2FQuasar%252FRelevamientos%252FLista%3Fpage-id%3D0%253A1%26node-id%3D1%253A68%26viewport%3D380%252C506%252C0.44%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A68",
                },
            ],
        },
    ];
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
