import Image from "next/image";
import Link from "next/link";

const Dedicated = () => {
    return (
        <div className="relative">

            {/* <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" /> */}

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/wessitepng.png" alt="man-icon" width={416} height={530} className=" rounded-full mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        {/* <Image src="images/dedicated/comma.svg" alt="Wesley rocha - professor de espanhol" width={200} height={106} className="absolute comma-pos hidden lg:block" /> */}
                        <p className="font-medium text-EmeraldGreen text-2xl mt-5 text-center lg:text-start">¡Hola! Soy Wesley, profesor de portugués especializado para hispanohablantes.</p>
                        <p className="font-medium text-EmeraldGreen text-2xl mt-5 text-center lg:text-start">Licenciado en Letras por la USP, cuento con la certificación DELE C1 del Instituto Cervantes y experiencias académicas en la Universidad de Chile y la Universidad Nacional Mayor de San Marcos, lo que ha enriquecido mi comprensión cultural y lingüística.</p>
                        <p className="font-medium text-EmeraldGreen text-2xl mt-5 text-center lg:text-start">Mi trayectoria incluye la enseñanza en escuelas regulares y centros de idiomas, así como proyectos de educación inclusiva y enseñanza de portugués para migrantes, siempre con un enfoque práctico y cercano.</p>
                        <p className="font-medium text-EmeraldGreen text-2xl mt-5 text-center lg:text-start">Ofrezco clases personalizadas para que alcances tus objetivos con el español, ya sea para viajes, trabajo o crecimiento personal. ¡Comienza tu aprendizaje del español conmigo!</p>
                        <h2 className="text-2xl text-transparent  lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Professora online de portugués</h2>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> </p> */}
                    </div>
                    <div className='flex gap-4 lg:mt-20'>
                            <div className='footer-icons'>
                                <Link href="https://www.linkedin.com/in/wesley-santos-rocha-171603ab/"><Image src={'images/footer/linkdin.svg'} alt="facebook" width={20} height={20} /></Link>
                            </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
