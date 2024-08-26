import { Links } from "../interfaces/navLinks.interface"
import source_environment from "../assets/icons/nav/source_environment.svg"
import receipt from "../assets/icons/nav/receipt.svg"
import things_to_do from "../assets/icons/nav/things_to_do.svg"
import account_box from "../assets/icons/nav/account_box.svg"
import facebook from "../assets/icons/footer/facebook.svg"
import instagram from "../assets/icons/footer/instagram.svg"
import tiktok from "../assets/icons/footer/tiktok.svg"
import x from "../assets/icons/footer/x.svg"
import youtube from "../assets/icons/footer/youtube.svg"
import { UtilPhones } from "../interfaces/utilsPhones.interface"

const navLinks: Links[] = [
    {
        label: 'Municipio', url: '/municipio', icon: things_to_do
    },
    {
        label: 'Gestión', url: '/', icon: receipt, subItems: [
            { label: 'Trámites', url: 'gestion/tramites' },
            { label: 'Turnos', url: '/' },
            { label: 'Trámites', url: '/' },
            { label: 'Turnos', url: '/' },
            { label: 'Trámites', url: '/' },
            { label: 'Turnos', url: '/' },
        ]
    },
    { label: 'Trámites', url: '/', icon: source_environment },
    { label: 'Turnos', url: '/', icon: account_box }
]

const municipioSections: Links[] = [
    { label: 'Historia del municipio', url: '#historia' },
    { label: 'Camino al Bicentenario', url: '#camino-bicentenario' },
    { label: 'Palacio municipal', url: '#palacio-municipal' },
    { label: 'Sobre su arquitectura', url: '#sobre-arquitectura' },
    { label: 'Cómo llegar', url: '#como-llegar' },
]

const iconsFooter = [
    { icon: instagram, url: 'https://www.instagram.com' },
    { icon: facebook, url: 'https://www.facebook.com' },
    { icon: tiktok, url: 'https://www.tiktok.com' },
    { icon: x, url: 'https://www.x.com' },
    { icon: youtube, url: 'https://www.youtube.com' },
]

const utilsPhones: UtilPhones[] = [
    { number: "100", label: "Bomberos" },
    { number: "103", label: "Defensa Civil" },
    { number: "107", label: "Emergencias" },
    { number: "911", label: "Policía" },
    { number: "147", label: "Seguridad Lomas" },
    { number: "144", label: "Violencia de Género" },
]

export {
    navLinks,
    municipioSections,
    iconsFooter,
    utilsPhones
}