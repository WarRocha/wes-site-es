import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-5 px-6 lg:px-5'>
            <div className='grid justify-items-center grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    {/* <div className='py-3 text-center lg:text-start'>
                        <button className='text-treetop bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
                    </div> */}
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-70xl font-bold text-treetop'>
                            Aulas de espanhol online<br />
                        </h1>
                        <p className="font-medium text-treetop text-2xl mt-5 text-center lg:text-start">Chega de aulas gravadas sem interação! Aprenda espanhol ao vivo, com aulas personalizadas de acordo com suas necessidades: conversação, gramática ou leitura. Com experiência e conhecimento cultural, ensino de forma prática, dinâmica e eficiente. Seu aprendizado será sob medida, no seu ritmo e com total suporte. Experimente uma nova forma de aprender espanhol
</p>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-salmao text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-treetop bg-treetop'>
                        <a href="https://wa.me/5511949612697?text=Olá! Tenho interesse em saber mais sobre as aulas de espanhol. Poderia me fornecer mais informações, por favor?" target="_blank">
                        Comece agora mesmo
                        </a>
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className=' lg:pt-20 hidden lg:block'>
                    <Image src="images/banner/espa-banner.png" alt="Aulas de espanhol online" width={400} height={242} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
