import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Conversação",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Começamos com atividades focadas na comunicação oral, como diálogos, simulações de situações cotidianas e discussões sobre temas atuais. Este é o momento para ganhar confiança e fluência na fala. (Aqui você pratica!)',
        link: ''
    },
    {
        heading: "Gramática aplicada",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Em seguida, trabalhamos a gramática de forma prática, conectada ao uso real do idioma. A gramática é explicada de maneira clara e aplicada em contextos do dia a dia, para que você saiba como usá-la efetivamente. (Aqui o aprendizado se fixa!)',
        link: ''
    },
    {
        heading: "Atividades práticas",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Resumo: Realizamos exercícios interativos, como interpretação de textos, audições e tarefas criativas, além de explorar aspectos culturais com materiais autênticos, promovendo o contato com o espanhol real e diverso. (Aqui você aprende temas novos!)',
        link: ''
    },
]


const Levels: datatype[] = [
    {
        heading: "A1-A2 equivalente ao nível  “básico”",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Para quem está começando a aprender o idioma ou possui conhecimentos iniciais.',
        link: ''
    },
    {
        heading: "B1-B2 equivalente ao nível “intermediário”",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Para quem já possui alguma fluência e deseja expandir vocabulário, melhorar a compreensão e a expressão.',
        link: ''
    },
    {
        heading: "C1-C2 equivalente ao nível “avançado”",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Para quem busca um domínio mais profundo da língua, com fluência em diversos contextos, incluindo comunicação complexa.',
        link: ''
    },
    {
        heading: "Conversação",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Foco na prática oral para melhorar a fluência e a confiança ao falar, em diversos contextos',
        link: ''
    },
    {
        heading: "Espanhol para Objetivos Específicos",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Aulas direcionadas a viagens, negócios, entre outros, com foco na comunicação para situações específicas.',
        link: ''
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-treetop text-4xl tracking-widest'>Meu método</h3>
                <p className='text-center text-2xl lg:text-24xl  text-treetop'>Meu método une prática comunicativa, gramática aplicada e imersão cultural para um aprendizado ágil e eficiente. Aulas personalizadas, com materiais autênticos—vídeos, músicas, textos—e exercícios adaptados ao seu nível, oferecendo uma experiência dinâmica e resultados rápidos.</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group mb-5'>
                            <h4 className='text-4xl font-semibold  text-treetop mb-5 group-hover:text-white'>{item.heading}</h4>
                            {/* <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" /> */}
                            <p className='text-lg font-normal text-treetop group-hover:text-offwhite mb-5'>{item.paragraph}</p>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-treetop hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link> */}
                        </div>
                    ))}
                </div>

                <h3 className='text-center text-treetop text-4xl tracking-widest'>Níveis</h3>
                <p className='text-center text-2xl lg:text-24xl  text-treetop'>O Plano Curricular segue os padrões de proficiência do Quadro Europeu Comum de Referência para as Línguas (QECR).</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Levels.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-10 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-3xl font-semibold  text-treetop mb-5 group-hover:text-white'>{item.heading}</h4>
                            {/* <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" /> */}
                            <p className='text-lg font-normal text-treetop group-hover:text-offwhite mb-5'>{item.paragraph}</p>
                            {/* <Link href="#" className='text-lg font-semibold group-hover:text-white text-treetop hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;