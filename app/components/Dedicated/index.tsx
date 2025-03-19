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
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Olá! Sou Wesley, professor de espanhol especializado para falantes de português.</p>
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Formado em Letras pela USP, tenho certificação DELE C1 pelo Instituto Cervantes e vivências acadêmicas na Universidad de Chile e na Universidad Nacional Mayor de San Marcos, que enriqueceram minha compreensão cultural e linguística.</p>
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Minha experiência inclui o ensino em escolas regulares e centros de idiomas, além de projetos de educação inclusiva e ensino de português para migrantes, sempre com uma abordagem prática e acolhedora.</p>
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Ofereço aulas personalizadas para que você alcance seus objetivos com o espanhol, seja para viagens, trabalho ou desenvolvimento pessoal. Comece sua jornada no espanhol comigo.</p>
                        <h2 className="text-2xl text-transparent  lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Professora online de espanhol</h2>
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
