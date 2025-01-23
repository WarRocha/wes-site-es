import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-5 px-6 lg:px-5'>
            <div className='grid justify-items-center grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    {/* <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
                    </div> */}
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-70xl font-bold text-blue'>
                            Aulas de espanhol online<br />
                        </h1>
                        <p className="font-medium text-blue text-2xl mt-5 text-center lg:text-start">Você já se cansou de aulas gravadas, sem a oportunidade de interagir ao vivo com um professor? Eu estou aqui para mudar isso!
Com uma abordagem personalizada, meu objetivo é ajudar brasileiros a <strong>dominar o espanhol</strong> de forma prática e eficiente. Com ampla experiência no ensino de línguas e um profundo conhecimento das variantes culturais e linguísticas do espanhol, ofereço aulas ao vivo, adaptadas às suas necessidades e aos seus objetivos. Cada aula começa com uma análise do seu perfil, para que possamos focar no que você realmente precisa: seja comunicação, gramática, leitura ou exercícios específicos. Aqui, você é o centro da aprendizagem, e cada aula é feita sob medida para você.
</p>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                        <a href="https://wa.me/5511949612697" target="_blank">
                        Agende uma conversa
                        </a>
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className=' lg:pt-20 hidden lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={700} height={542} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
