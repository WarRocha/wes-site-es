import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "",
        link: ['Espanhol online', 'Aulas de espanhol',  'Aulas de espanhol ao vivo'],
    },
    {
        id: 2,
        section: "",
        link: ['Espanhol presencial', 'Aulas de espanhol para adultos', 'Aulas de espanhol para crianças']
    },
    {
        id: 3,
        section: "",
        link: ['Aulas de espanhol para iniciantes', 'Aulas de espanhol particular', 'Aulas de espanhol ao vivo', 'Professor de espanhol particular']
    }
]

const footer = () => {
    return (
        <div className="bg-blue -mt-10" id="first-section">
            <div className="mx-auto max-w-2xl pt-40 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-5 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4'>
                        <h3 className='text-white text-4xl font-semibold leading-9 mb-4'> Weslei Rocha</h3>
                        <span className='text-white text-2xl  leading-9 mb-4 lg:mb-20'>WhatsApp: (+55) 11 949612697</span>
                        <div className='flex gap-4 lg:mt-20'>
                            <div className='footer-icons'>
                                <Link href="https://www.linkedin.com/in/wesley-santos-rocha-171603ab/"><Image src={'/images/footer/linkdin.svg'} alt="facebook" width={20} height={20} /></Link>
                            </div>
                            {/* <div className='footer-icons'>
                                <Link href="https://wa.me/whatsappphonenumber"><Image src={'/images/footer/whatsapp-footer.svg'} alt="whatsapp" width={20} height={20} /></Link>
                            </div> */}
                            {/* <div className='footer-icons'>
                                <Link href="https://instagram.com"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
                            </div> */}
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                    {products.map((product) => (
                        <div key={product.id} className="group relative col-span-2">
                            <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
                            <ul>
                                {product.link.map((link: string, index: number) => (
                                    <li key={index} className='mb-5'>
                                        <p className="text-white text-lg font-normal mb-6 space-links">{link}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>

            {/* All Rights Reserved */}

            <div className="mx-auto max-w-2xl lg:max-w-7xl">
                <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
                    <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
                        <div>
                            <h3 className='text-center md:text-start text-offwhite text-lg'>@2025 - All Rights Reserved by <Link href="https://www.linkedin.com/in/warlei-rocha/" target="_blank"> warlei rocha</Link></h3>
                        </div>
                        {/* <div className="flex justify-center md:justify-end">
                            <Link href="/">
                                <h3 className="text-offwhite pr-6">Privacy policy</h3>
                            </Link>
                            <Link href="/">
                                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="z-50 fixed bottom-10 left-10 w-fit">
                    <a href="https://wa.me/5511949612697" target="_blank">
                    <Image
                        src="/images/footer/whatsapp.svg"
                        alt="WhatsApp Button"
                        width={50}
                        height={50}
                    />
                    </a>
            </div>




        </div>

    )
}

export default footer;
