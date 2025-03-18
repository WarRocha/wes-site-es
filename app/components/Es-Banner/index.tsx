import Image from "next/image";

const EsBanner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-5 px-6 lg:px-5'>
            <div className='grid justify-items-center grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    {/* <div className='py-3 text-center lg:text-start'>
                        <button className='text-treetop bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>DESIGN AGENCY</button>
                    </div> */}
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-70xl font-bold text-EmeraldGreen'>
                           Portugués para Hispanohablantes<br />
                        </h1>
                        <p className="font-medium text-EmeraldGreen text-2xl mt-5 text-center lg:text-start">¿Eres hispanohablante y quieres aprender portugués? ¡Estás en el lugar correcto! Nuestro curso de Portugués para Hispanohablantes está diseñado especialmente para ti, aprovechando las similitudes entre ambos idiomas para que aprendas de manera rápida, práctica y efectiva.
</p>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-salmao text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-EmeraldGreen bg-EmeraldGreen'>
                        <a href="https://wa.me/5511949612697?text=Olá! Tenho interesse em saber mais sobre as aulas de espanhol. Poderia me fornecer mais informações, por favor?" target="_blank">
                        Programar una conversación
                        </a>
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className=' lg:pt-20 hidden lg:block'>
                    <Image src="images/banner/banner.svg" alt="Aulas de espanhol online" width={700} height={542} />
                </div>

            </div>
        </div>
    )
}

export default EsBanner;
