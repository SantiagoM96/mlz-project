import foundation from "../assets/icons/municipio/foundation.svg"
import directions_bus from "../assets/icons/municipio/directions_bus.svg"
import directions_subway from "../assets/icons/municipio/directions_subway.svg"
import chevron_right from "../assets/icons/municipio/chevron_right.svg"
import bookmark from "../assets/icons/municipio/bookmark.svg"
import { Link } from "react-router-dom"
import { municipioSections } from "../constants"

const Municipio = () => {
    return (
        <main className="flex justify-center w-full py-8">
            <div className="main__container relative">
                <h1 className="heading1 text-[#236999]">
                    Municipio
                </h1>
                
                <div className="flex flex-col-reverse md:flex-row gap-6">
                    <section className="content">
                        <h2 className="heading2 text-[#236999]" id="historia">
                            Historia del municipio
                        </h2>
                        <p className="paragraph">
                            Lomas de Zamora fue fundado el <strong>10 de septiembre de 1861</strong> con el nombre de <strong>Pueblo de la Paz</strong>. Su escudo oficial está conformado por tres elementos: la rueda del trabajo, la pluma de la cultura y la paloma de la paz.
                        </p>
                        <p className="paragraph">
                            Tenemos una población que ronda los 700 mil habitantes y nuestro distrito presenta una extensión de 89 km2 en la que están distribuidas 14 localidades con sus respectivos barrios.
                        </p>
                        <img src="tren_blanco_negro.png" alt="" />
                        <p className="paragraph">
                            Además, en nuestro territorio hay seis arroyos y está emplazada la Reserva Natural Provincial de Santa Catalina, el mayor pulmón verde de nuestra ciudad y uno de los más relevantes de la Provincia, con presencia de bosques nativos, humedales y pastizales.
                        </p>
                        <p className="paragraph">
                            Tenemos establecimientos educativos de todos los niveles y la primera Universidad Nacional del Conurbano bonaerense, fundada en 1972. Contamos con el Teatro del Municipio, centros culturales, y una red de salas e instituciones independientes de gran trayectoria en el ámbito cultural, y un sistema de salud pública con diversas especializaciones y complejidad.
                        </p>
                        <h2 className="heading2 text-[#236999]" id="camino-bicentenario">
                            Camino al Bicentenario
                        </h2>
                        <p className="paragraph">
                            Hoy empezamos a transitar el “Camino al Bicentenario de Lomas”, un programa participativo que busca construir con nuestra historia, el futuro de toda la comunidad. Y en ese sentido, la historia ocupa un lugar central, es una identidad que nosotros queremos recuperar: los pioneros que formaron el municipio de Lomas de Zamora que hoy habitamos con orgullo y ese municipio en el cual queremos construir un futuro mejor.
                        </p>
                        <p className="paragraph">
                            Junto al Instituto Histórico Municipal, a todos los historiadores, historiadoras de Lomas de Zamora llevamos adelante una serie de actividades que vamos a impulsar en toda la comunidad de Lomas de Zamora para poder construir un futuro en donde Lomas de Zamora definitivamente sea ese Pueblo de la Paz que soñaron los primeros habitantes.
                        </p>
                        <h2 className="heading2 text-[#236999]" id="palacio-municipal">
                            Palacio Municipal
                        </h2>
                        <img src="/palacio_blanco_negro.png" alt="" />
                        <p className="paragraph">
                            En febrero de 1862, se constituyó la primera Municipalidad bajo la forma organizativa de “Corporación Municipal”, cuyo presidente era a la vez Juez de Paz. Al no contar con un edificio propio, las autoridades desarrollaban sus tareas en un despacho ubicado en el edificio Las Tres Esquinas, Avda. H. Yrigoyen y Pereyra Lucena.
                        </p>
                        <p className="paragraph">
                            El Palacio Municipal, fue construido en la parcela ubicada sobre Sáenz, Manuel Castro y Azara, donada por Don Victorio Grigera en 1875.
                        </p>
                        <p className="paragraph">
                            Tras la donación de los terrenos, la Provincia de Buenos Aires destinó al Gobierno local $60.000 para ayudar a la construcción de la Casa Municipal. A mediados de 1876 se formó una comisión integrada por Rafael Portela, Victorio Grigera, Adolfo Olivares, Pedro Rosende y Antonio Arregui, para darle curso al proyecto. En octubre de ese año, se compraron los materiales y comenzó la obra, finalmente dirigida por el arquitecto Alberto J. Bogani, vecino de Banfield y destacado profesional lomense, mientras que la empresa encargada de concretarlo fue Pío Ricagno e hijos.
                        </p>
                        <p className="paragraph">
                            Luego de años de construcción, <strong>el 22 de diciembre de 1938 fue inaugurado el Palacio Municipal.</strong>
                        </p>
                        <article className="outstanding">
                            <div className="flex gap-4">
                                <img src={foundation} alt="" />
                                <h2 className="heading2 text-[#236999]" id="sobre-arquitectura">
                                    Sobre su arquitectura
                                </h2>
                            </div>
                            <p className="paragraph">
                                De inspiración francesa, por sus dimensiones, escala y simbolismo, el Palacio Municipal de Lomas de Zamora es uno de los edificios más emblemáticos del área urbana local. Su diseño de líneas Art-Decó y racionalistas reflejan el momento en que fue construido. Por su parte, su altura y monumentalidad, junto a la torre del reloj, le asignan un rol protagónico dentro del paisaje del centro cívico lomense. Los materiales nobles que utilizó Bogani en el diseño original, sus paredes revestidas en mármol travertino, la escalera señorial con sus barandas de bronce y los pisos en roble de Eslavonia (este de Croacia) y boiserie de nogal, lo convirtieron en una edificación de gran valor y belleza para la época.
                            </p>
                        </article>
                        <p className="paragraph">
                            En 2004, mediante el Decreto Presidencial 1020, <strong>fue declarado “Monumento Histórico Nacional”</strong>, declaratoria que además protegió la Catedral, la Escuela Nº1, la Plaza Grigera y el Monumento Ecuestre a San Martín, y que fue ampliada en 2007 mediante el Decreto 216 para crear un “Área de Amortiguación Visual” con la intención de resguardar su entorno.
                        </p>
                        <article className="outstanding">
                            <h2 className="heading2 text-[#236999]" id="como-llegar">
                                Como llegar
                            </h2>
                            <div className="flex gap-2">
                                <img src={directions_bus} alt="" />
                                <h3 className="heading3 text-[#236999]">
                                    Líneas de Colectivos
                                </h3>
                            </div>
                            <h4 className="heading4 text-[#236999]">Líneas Comunales</h4>
                            <p className="paragraph">
                                532-540-541-542-543-544-548-549-550-551-552-553-561-562-564
                            </p>
                            <h4 className="heading4 text-[#236999]">Líneas Intercomunales Provinciales</h4>
                            <p className="paragraph">
                                239-247-266-271-277-278-298-299-306-318-323-338-403-421-426-403-435
                            </p>
                            <h4 className="heading4 text-[#236999]">Líneas Nacionales</h4>
                            <p className="paragraph">
                                51-74-79-160-164
                            </p>
                            <div className="flex gap-2">
                                <img src={directions_subway} alt="" />
                                <h3 className="heading3 text-[#236999]">
                                    Ferrocarriles
                                </h3>
                            </div>
                            <p className="paragraph">
                                La línea Gral. Roca, en sus Ramales Plaza Constitución - Ezeiza, A. Korn y Bosques vía Temperley, une al Partido de Lomas de Zamora con la Ciudad Autónoma de Buenos Aires. Pasa por las estaciones: Banfield, Lomas de Zamora, Turdera, Temperley y Llavallol.
                            </p>
                            <p className="paragraph">
                                El Ramal Temperley - Haedo une al Partido de Lomas de Zamora con el Partido de Morón, con paradas en: Hospital Español, Santa Catalina y KM 34.
                            </p>
                        </article>
                    </section>
                    <aside className="flex flex-col gap-6 w-full h-full md:w-1/3 md:sticky top-[24px]">
                        <div className="outstanding">
                            <h2 className="heading2 text-[#236999]">
                                Intendente
                            </h2>
                            <p>
                                Bio de Federico Otermín
                            </p>
                            <Link to={"/intendente"} className="flex items-center gap-2 text-[#236999] font-bold">
                                <button className="text-[18px]">Ver más</button>
                                <img src={chevron_right} alt="" />
                            </Link>
                        </div>
                        <div className="outstanding">
                            <h2 className="heading2 text-[#236999]">
                                Contenido
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {municipioSections.map(section => (
                                    <li key={section.label}>
                                        <a href={section.url} className="flex gap-2">
                                            <img src={bookmark} alt="" />
                                            <h4 className="heading4 text-[#236999]">{section.label}</h4>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default Municipio