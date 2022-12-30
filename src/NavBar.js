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
import { useState } from "react";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const reportes = [
        {
            title: "Dashboard",
            Icon: FiHome,
            url: "https://www.figma.com/proto/CeOGr90oIW1xfVW3O9DsCs/Quasar%2FDashboard?page-id=0%3A1&node-id=22%3A3&viewport=942%2C750%2C0.29&scaling=min-zoom&starting-point-node-id=22%3A3",
        },
        {
            title: "Campañas",
            Icon: FiCalendar,
            url: "https://www.figma.com/proto/ALmWw4QB27ar8XZ1aUA1Eb/Quasar%2FCampa%C3%B1a%2FProceso?page-id=0%3A1&node-id=1%3A2&viewport=120%2C194%2C0.13&scaling=min-zoom&starting-point-node-id=1%3A2",
        },
        {
            title: "Inventarios",
            Icon: MdOutlineInventory2,
            url: "https://www.figma.com/proto/3ccTyvEYriw2CY0Zk5oXd4/Quasar%2FInventarios?page-id=0%3A1&node-id=51%3A38&viewport=1033%2C352%2C0.11&scaling=min-zoom&starting-point-node-id=51%3A38",
        },
        {
            title: "Notificaciones",
            Icon: BiBell,
            url: "https://www.figma.com/proto/afo3nKwwNUzJuI40pZ0o9Y/Quasar%2FTodas-las-Notificaciones?page-id=0%3A1&node-id=1%3A27&viewport=795%2C800%2C0.76&scaling=min-zoom",
        },
        {
            title: "Pendientes",
            Icon: MdPendingActions,
            url: "https://www.figma.com/proto/YB5Q8ZWaUo6kma88WXr6yF/Quasar%2FPendientes?page-id=0%3A1&node-id=36%3A131&viewport=525%2C341%2C0.07&scaling=min-zoom&starting-point-node-id=36%3A131&show-proto-sidebar=1",
        },
        {
            title: "Incidencias",
            Icon: RiErrorWarningLine,
            url: "https://www.figma.com/proto/MGHSRMTcx6iMCjWL46gN2d/Quasar%2FIncidencias?page-id=0%3A1&node-id=4%3A173&viewport=1291%2C518%2C0.43&scaling=min-zoom&starting-point-node-id=4%3A173",
        },
        {
            title: "Rutas",
            Icon: TbRoute,
            url: "https://www.figma.com/proto/HUsWlQmM1AThXr1E53a100/Quasar%2FRutas-Reportes?page-id=0%3A1&node-id=1%3A52&viewport=414%2C87%2C0.07&scaling=min-zoom&starting-point-node-id=1%3A52&show-proto-sidebar=1",
        },
    ];
    const modulos = [
        {
            title: "Mantenimientos",
            Icon: BsTools,
            sublist: [
                {
                    subtitle: "Lista de Mantenimientos",
                    url: "https://www.figma.com/proto/lfmKbn8DFUzIrAlXKzUhT6/Quasar%2FLista-de-Mantenimientos?page-id=0%3A1&node-id=2%3A39&viewport=286%2C130%2C0.32&scaling=min-zoom&starting-point-node-id=2%3A39",
                },
                {
                    subtitle: "Solicitud de Mantenimiento",
                    url: "https://www.figma.com/proto/76H2CjDe1TOTHPl5IAMLsV/Quasar%2FSolicitud-de-Mantenimientos?page-id=0%3A1&node-id=1%3A41&viewport=692%2C403%2C0.19&scaling=min-zoom&starting-point-node-id=1%3A41",
                },
            ],
        },
        {
            title: "No Quasar",
            Icon: TbBuildingWarehouse,
            url: "https://www.figma.com/proto/PZFK0WfEqJCZdNC02RkdvS/Quasar%2FNo-Quasar?page-id=0%3A1&node-id=25%3A13&viewport=533%2C324%2C0.09&scaling=min-zoom&starting-point-node-id=25%3A13",
        },
        {
            title: "Transporte",
            Icon: BsTruck,
            sublist: [
                {
                    subtitle: "Solicitudes de Transporte",
                    url: "https://www.figma.com/proto/9GjLnFsuh1oNr4PgkemuCp/Quasar%2FTransporte?page-id=0%3A1&node-id=1%3A2&viewport=491%2C412%2C0.15&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
                {
                    subtitle: "Rutas Generadas",
                    url: "https://www.figma.com/proto/9GjLnFsuh1oNr4PgkemuCp/Quasar%2FTransporte?page-id=0%3A1&node-id=1%3A2&viewport=491%2C412%2C0.15&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
                {
                    subtitle: "Busqueda",
                    url: "https://www.figma.com/proto/9GjLnFsuh1oNr4PgkemuCp/Quasar%2FTransporte?page-id=0%3A1&node-id=1%3A2&viewport=491%2C412%2C0.15&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
                {
                    subtitle: "Solicitar Transporte",
                    url: "https://www.figma.com/proto/BdZnSzX7ykRxcQ4w8lLEt3/Quasar%2FTransporte%2FSolicitar-Transporte?page-id=0%3A1&node-id=1%3A21&viewport=718%2C477%2C0.21&scaling=min-zoom",
                },
            ],
        },
        {
            title: "Producción",
            Icon: FiBox,
            url: "https://www.figma.com/proto/mSeXVsscWJbCeWKanmmQKd/Quasar%2FProducci%C3%B3n?page-id=0%3A1&node-id=1%3A164&viewport=402%2C265%2C0.14&scaling=min-zoom&starting-point-node-id=1%3A164&show-proto-sidebar=1",
        },
        {
            title: "Reposiciones",
            Icon: TbReplace,
            url: "https://www.figma.com/proto/JLkzuCeh64jdq8vkXoM0EI/Quasar%2FReposiciones?page-id=0%3A1&node-id=13%3A2&viewport=733%2C552%2C0.1&scaling=min-zoom&starting-point-node-id=13%3A2",
        },
        {
            title: "Desinstalaciones",
            Icon: CgExtensionRemove,
            url: "https://www.figma.com/proto/ZDe5lI8NeKidGorveuQz7S/Quasar%2FDesinstalaciones?page-id=0%3A1&node-id=1%3A3&viewport=-68%2C124%2C0.27&scaling=min-zoom&starting-point-node-id=1%3A3",
        },
        {
            title: "Almacen",
            Icon: FaWarehouse,
            url: "https://www.figma.com/proto/Ywdo442bm6gGxiN1ngHaUD/Quasar%2FAlmacen?page-id=0%3A1&node-id=1%3A94&viewport=725%2C494%2C0.42&scaling=min-zoom&starting-point-node-id=1%3A94",
        },
        {
            title: "Relevamientos",
            Icon: TfiRulerAlt,
            url: "https://www.figma.com/proto/4g4qQAL7pX0Q2kSD9PtZdH/Quasar%2FRelevamientos?page-id=0%3A1&node-id=9%3A454&viewport=544%2C465%2C0.09&scaling=min-zoom&starting-point-node-id=9%3A454",
        },
    ];
    const administracion = [
        {
            title: "Crear Campaña",
            Icon: FiCalendar,
            sublist: [
                {
                    subtitle: "Lista",
                    url: "https://www.figma.com/proto/eAuVK5oKSxQdCOByUpFvPF/Quasar%2FCampa%C3%B1a%2FLista?page-id=0%3A1&node-id=145%3A289&viewport=445%2C322%2C0.16&scaling=min-zoom&starting-point-node-id=145%3A289",
                },
                {
                    subtitle: "Crear Campaña",
                    url: "https://www.figma.com/proto/8gzsZGygHuD4f3ny6wGHEU/Quasar%2FCampa%C3%B1a%2FCrear-Campa%C3%B1a?page-id=0%3A1&node-id=1%3A150&viewport=794%2C532%2C0.22&scaling=min-zoom&starting-point-node-id=1%3A150",
                },
            ],
        },
        {
            title: "Notificaciones",
            Icon: BiBell,
            url: "https://www.figma.com/proto/ISfMVe40E8w7FOPLx4pr1y/Quasar%2FAdministrar-Notificaciones?page-id=0%3A1&node-id=2%3A8&viewport=529%2C658%2C0.26&scaling=min-zoom&starting-point-node-id=2%3A8",
        },
        {
            title: "Roles",
            Icon: FiUser,
            url: "https://www.figma.com/proto/8xoVBEeTqECt5pmLDHCDcR/Quasar%2FGestionar-Roles?page-id=0%3A1&node-id=1%3A137&viewport=358%2C121%2C0.34&scaling=min-zoom&starting-point-node-id=1%3A137",
        },
    ];
    const dataBase = [
        {
            title: "Tiendas",
            Icon: FiShoppingCart,
            sublist: [
                {
                    subtitle: "Grupo Económico",
                    url: "https://www.figma.com/proto/Nt0fSwRDzFIfGAu8EFaxxp/Quasar%2FTiendas%2FGrupo-Economico?page-id=0%3A1&node-id=1%3A3&viewport=-17%2C-3436%2C2.13&scaling=min-zoom&starting-point-node-id=1%3A3",
                },
                {
                    subtitle: "Cadenas",
                    url: "https://www.figma.com/proto/cLmPhTCpSAOG2ruhOeLivL/Quasar%2FTiendas%2FCadenas?page-id=0%3A1&node-id=1%3A2&viewport=728%2C134%2C0.17&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
                {
                    subtitle: "Formato de Tienda",
                    url: "https://www.figma.com/proto/QZFrTm22DM5IzEHWqs5SrB/Quasar%2FTiendas%2FFormato-de-Tienda?page-id=0%3A1&node-id=1%3A306&viewport=631%2C-26%2C0.39&scaling=min-zoom&starting-point-node-id=1%3A306",
                },
                {
                    subtitle: "Tienda",
                    url: "https://www.figma.com/proto/4B0hvJWCKNWjGt0QeGHps9/Quasar%2FTiendas%2FTienda?page-id=0%3A1&node-id=0%3A1&viewport=867%2C-407%2C0.41&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
            ],
        },
        {
            title: "Usuarios",
            Icon: FiUsers,
            url: "https://www.figma.com/proto/aIWzrz7plNXBM1TSjPEQ9Q/Quasar%2FUsuarios?page-id=0%3A1&node-id=2%3A12&viewport=248%2C308%2C0.35&scaling=min-zoom&starting-point-node-id=2%3A12",
        },
        {
            title: "Categorias",
            Icon: BiCategory,
            sublist: [
                {
                    subtitle: "Categoría Master",
                    url: "https://www.figma.com/proto/0tNj9PLqLdPpnepH98lTyC/Quasar%2FCategor%C3%ADas?page-id=0%3A1&node-id=43%3A86&viewport=1615%2C1246%2C0.39&scaling=min-zoom&starting-point-node-id=43%3A86",
                },
                {
                    subtitle: "Categoría Padre",
                    url: "https://www.figma.com/proto/0tNj9PLqLdPpnepH98lTyC/Quasar%2FCategor%C3%ADas?page-id=0%3A1&node-id=43%3A86&viewport=1615%2C1246%2C0.39&scaling=min-zoom&starting-point-node-id=43%3A86",
                },
                {
                    subtitle: "Categoria",
                    url: "https://www.figma.com/proto/0tNj9PLqLdPpnepH98lTyC/Quasar%2FCategor%C3%ADas?page-id=0%3A1&node-id=43%3A86&viewport=1615%2C1246%2C0.39&scaling=min-zoom&starting-point-node-id=43%3A86",
                },
            ],
        },
        {
            title: "Clientes",
            Icon: FaUsers,
            url: "https://www.figma.com/proto/dZkt8XN9yBClYzKXDCQ8Ua/Quasar%2FClientes?page-id=0%3A1&node-id=2%3A148&viewport=400%2C515%2C0.44&scaling=min-zoom&starting-point-node-id=2%3A148",
        },
        {
            title: "Motivos y Submotivos",
            Icon: FiCheckCircle,
            url: "https://www.figma.com/proto/FBC2LeZVeHExUESfALUkmu/Quasar%2FMotivos-y-Submotivos?page-id=0%3A1&node-id=1%3A241&viewport=-2831%2C383%2C0.93&scaling=min-zoom&starting-point-node-id=1%3A241",
        },
        {
            title: "Proveedores",
            Icon: IoBusinessOutline,
            sublist: [
                {
                    subtitle: "Nombre",
                    url: "https://www.figma.com/proto/IhkRSihxQXMwdvf8sGH08N/Quasar%2FProveedores%2FNombe?page-id=0%3A1&node-id=1%3A2&viewport=694%2C579%2C0.71&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
                {
                    subtitle: "Usuarios",
                    url: "https://www.figma.com/proto/3GM2jAP5wiuddBXDCEnXcO/Quasar%2FProveedores%2FUsuarios?page-id=0%3A1&node-id=1%3A2&viewport=642%2C443%2C0.57&scaling=min-zoom&starting-point-node-id=1%3A2",
                },
            ],
        },
        {
            title: "Placas",
            Icon: IoBusinessOutline,
            url: "https://www.figma.com/proto/YJupVGMhpsw69FjplcLAzw/Quasar%2FTransporteBD?page-id=0%3A1&node-id=1%3A198&viewport=438%2C367%2C0.41&scaling=min-zoom&starting-point-node-id=1%3A198",
        },
        {
            title: "Elementos",
            Icon: FiPackage,
            url: "https://www.figma.com/proto/jco1OUTBeE9nzIa4Y7TlLI/Quasar%2FElementos?page-id=0%3A1&node-id=1%3A2&viewport=854%2C690%2C0.79&scaling=min-zoom",
        },
        {
            title: "No Quasar",
            Icon: TbBuildingWarehouse,
            url: "https://www.figma.com/proto/AiKnP7LASAsbnvIiRBZRmD/Quasar%2FNo-Quasar-BD?page-id=0%3A1&node-id=1%3A10&viewport=-209%2C412%2C0.68&scaling=min-zoom&starting-point-node-id=1%3A10",
        },
        {
            title: "Relevamientos",
            Icon: TfiRulerAlt,
            sublist: [
                {
                    subtitle: "Formularios",
                    url: "https://www.figma.com/proto/eaKVSceCGYmIW3i4NvqYpu/Quasar%2FRelevamientos%2FFormularios?page-id=0%3A1&node-id=2%3A2&viewport=693%2C477%2C0.55&scaling=min-zoom&starting-point-node-id=2%3A2",
                },
                {
                    subtitle: "Categorias",
                    url: "https://www.figma.com/proto/7s9LXhk1ZBNhCKASX5SwRc/Quasar%2FRelevamientos%2FCategor%C3%ADas(tren)?page-id=0%3A1&node-id=2%3A112&viewport=129%2C296%2C0.4&scaling=min-zoom&starting-point-node-id=2%3A112",
                },
                {
                    subtitle: "Tipo de Bandeja",
                    url: "https://www.figma.com/proto/45W1DfNxgAgt5oIwpauvMO/Quasar%2FRelevamientos%2FTipo-de-Bandeja?page-id=0%3A1&node-id=1%3A133&viewport=-645%2C160%2C0.74&scaling=min-zoom&starting-point-node-id=1%3A133",
                },
                {
                    subtitle: "Lista",
                    url: "https://www.figma.com/proto/hYWYAp7TvcIDrZm4ybVur7/Quasar%2FRelevamientos%2FLista?page-id=0%3A1&node-id=1%3A68&viewport=380%2C506%2C0.44&scaling=min-zoom&starting-point-node-id=1%3A68",
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
