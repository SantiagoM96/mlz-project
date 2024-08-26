import article from "../assets/icons/footer/article.svg"
import whatsapp from "../assets/icons/footer/whatsapp.svg"
import logo_footer from "../assets/logo_footer.svg"
import { iconsFooter, utilsPhones } from "../constants"


const Footer = () => {
    return (
        <>
            <div className="flex items-center flex-col bg-[#236999] py-8 text-white h-full">
                <footer className="flex justify-center flex-col gap-6 w-full max-w-[1232px] px-4">
                    <img src={logo_footer} alt="" className="w-[200px]" />
                    <p className="heading2 ">Centro de Atención Vecinal</p>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex items-center text-[18px] px-6 gap-4 bg-[#2ABB5B] h-12 rounded cursor-pointer">
                            <img src={whatsapp} alt="" className="h-6 w-6" />
                            <button>Escribinos por <strong>Whatsapp</strong></button>
                        </div>
                        <div className="flex items-center text-[18px] px-6  gap-4 bg-[#358DC2] h-12 rounded cursor-pointer">
                            <img src={article} alt="" className="h-6 w-6" />
                            <button className="font-bold">Formulario de Consultas</button>
                        </div>
                    </div>
                    <div className="flex flex-col md:items-center md:flex-row">
                        <p className="heading1">0800-666-6666</p>
                        <span className="text-2xl px-4 hidden sm:inline">|</span>
                        <p className="heading1 ">0800-122-5662</p>
                    </div>
                    <div className="flex items-center gap-4 md:gap-0">
                        <p>Newsletter</p>
                        <span className="text-2xl px-4 hidden sm:inline">|</span>
                        <p >Boletín Oficial</p>
                        <span className="text-2xl px-4 hidden sm:inline">|</span>
                        <p>HCD</p>
                    </div>
                    <p className="heading2">¡Seguinos en nuestras redes!</p>
                    <div className="flex-center gap-4 px-4 py-2 h-12 bg-white max-w-[256px] rounded">
                        {iconsFooter.map(icon => (
                            <img src={icon.icon} alt="" className="cursor-pointer" />
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row text-[18px] gap-4">
                        {utilsPhones.map(phone => (
                            <p><strong>{phone.number}</strong> {phone.label}</p>
                        ))}
                    </div>
                    <div className="border-t-[2px]"></div>
                    <div className="flex items-center">
                        <p>© Municipio Lomas de Zamora | Todos los derechos reservados 2024.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer