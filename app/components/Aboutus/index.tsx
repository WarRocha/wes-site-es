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
        heading: "Gramática Aplicada",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'A gramática é trabalhada de forma prática, sempre conectada a situações do cotidiano. As explicações são claras e aplicadas de maneira que você possa usá-la de forma eficaz no uso real do idioma.',
        link: ''
    },
    {
        heading: "Atividades Práticas",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'São realizados exercícios interativos, como interpretação de textos, audições e tarefas criativas, além da exploração de aspectos culturais por meio de materiais autênticos. Isso permite o contato com o espanhol real e diversificado.',
        link: ''
    },
    {
        heading: "Conversação",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'As atividades focam na comunicação oral por meio de diálogos, simulações de situações cotidianas e discussões sobre temas atuais. O objetivo é desenvolver confiança e fluência na fala, garantindo uma prática dinâmica e eficaz.',
        link: ''
    },
]


const Levels: datatype[] = [
    {
        heading: "A1: Nível Iniciante",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Ideal para quem está começando a aprender o idioma. A ênfase está em comunicar-se de forma simples em situações cotidianas, utilizando expressões básicas e vocabulário essencial.',
        link: ''
    },
    {
        heading: "A2: Nível Pré-Intermediário",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: ' Para quem já possui conhecimentos iniciais e deseja ampliar o vocabulário. A prática se concentra em interações sobre rotinas e contextos familiares, desenvolvendo a habilidade de se expressar de forma mais confiante.',
        link: ''
    },
    {
        heading: "B1: Nível Intermediário",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Voltado a quem busca melhorar a fluência e a compreensão. As atividades incluem discussões sobre temas cotidianos e pessoais, facilitando uma comunicação mais natural e articulada.',
        link: ''
    },
    {
        heading: "B2: Nível Intermediário Avançado",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Para quem deseja aperfeiçoar a precisão ao se comunicar. A prática envolve debates sobre questões sociais e culturais, permitindo a argumentação mais detalhada e a expressão de opiniões mais elaboradas.',
        link: ''
    },
    {
        heading: "C1: Nível Avançado",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Indicado para quem já domina o idioma e quer refiná-lo. As atividades envolvem debates sobre tópicos complexos, com foco em expressar ideias de maneira clara e aprofundada.',
        link: ''
    },
    {
        heading: "C2: Nível Proficiente",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Para quem tem total fluência e busca manter a comunicação com naturalidade em qualquer contexto. A prática aborda discussões abstratas e técnicas com alta sofisticação.',
        link: ''
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-treetop text-4xl tracking-widest'>Método</h3>
                <p className='text-center text-2xl lg:text-24xl  text-treetop'>Aulas personalizadas com prática comunicativa, gramática aplicada e imersão cultural, usando materiais autênticos (vídeos, músicas, textos) para um aprendizado dinâmico e eficiente.</p>
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

                <h3 className='text-center text-treetop text-4xl tracking-widest'>Níveis de Ensino</h3>
                <p className='text-center text-2xl lg:text-24xl  text-treetop'>O Plano Curricular segue os níveis de proficiência do Quadro Europeu Comum de Referência para as Línguas (QECR), garantindo um aprendizado progressivo e eficaz em cada etapa.</p>
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