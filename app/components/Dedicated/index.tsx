import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="relative">

            {/* <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" /> */}

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/man.svg" alt="man-icon" width={416} height={530} className="mx-auto md:mx-0" />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" />
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Olá! Sou Wesley, formado em Letras pela USP, com foco no ensino de espanhol para falantes de português. Tenho certificação DELE C1 pelo Instituto Cervantes, que atesta minha proficiência avançada no idioma. Além disso, realizei intercâmbios na Universidad de Chile e na Universidad Nacional Mayor de San Marcos, o que me permitiu aprofundar minha compreensão das variantes linguísticas e culturais do espanhol.</p>
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Minha trajetória inclui experiências em escolas renomadas, no ensino de português para migrantes e no trabalho com educação inclusiva. Essas vivências fortaleceram minha abordagem prática, acolhedora e culturalmente rica.</p>
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Com aulas personalizadas, estou aqui para ajudar você a alcançar seus objetivos no espanhol, seja para viagens, trabalho ou desenvolvimento pessoal. Aprender um idioma abre portas para novas conexões e oportunidades. Vamos juntos nessa jornada?</p>
                        <h2 className="text-2xl text-transparent  lg:text-65xl pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">Professora online de espanhol</h2>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> </p> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
