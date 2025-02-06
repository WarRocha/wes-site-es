"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const FAQ = () => {
    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-24 lg:px-8 bg-treetop rounded-2xl my-16 faq-bg'>
            {/* <h3 className='text-xl font-normal text-white text-center mb-6'>FAQ</h3> */}
            <h3 className='text-4xl lg:text-6xl font-semibold text-center text-white'>PERGUNTAS FREQUENTES</h3>
            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Não sei nada de espanhol. Posso começar do zero?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sim, claro! As aulas são totalmente personalizadas. Podemos começar do zero, avançando no seu ritmo. Adapto o conteúdo de acordo com o seu nível e objetivos, para garantir que você compreenda e absorva o idioma de forma eficaz.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Preciso comprar materiais?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    A compra de materiais não é obrigatória, mas recomendo alguns livros e gramáticas conforme a necessidade individual de cada estudante. Todo o material essencial para as aulas, como apostilas digitais, exercícios interativos e atividades complementares, será fornecido gratuitamente.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Como funcionam as aulas online?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    As aulas acontecem por meio de plataformas como Zoom ou Google Meet. Durante as aulas, você praticará conversação, esclarecerá dúvidas de gramática e realizará atividades interativas, tudo de forma dinâmica e personalizada.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>E se eu tiver dificuldades com a tecnologia durante as aulas online?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    As aulas acontecem por meio de plataformas como Zoom ou Google Meet. Durante as aulas, você praticará conversação, esclarecerá dúvidas de gramática e realizará atividades interativas, tudo de forma dinâmica e personalizada.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Posso agendar aulas em horários flexíveis?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sim! As aulas são adaptáveis à sua rotina. Podemos agendar de acordo com sua disponibilidade, garantindo flexibilidade para conciliar o aprendizado com outros compromissos.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>



                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>O que acontece se eu perder uma aula?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Caso precise faltar, avise com antecedência. Podemos reagendar a aula ou fornecer materiais de apoio para que você continue seu aprendizado de forma autônoma.

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Posso trocar o horário das aulas?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sim! Se precisar alterar o horário das aulas, avise com antecedência. Farei o possível para acomodar a mudança, conforme a disponibilidade.

                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Qual é a taxa de matrícula?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Não há taxa de matrícula. O pagamento é feito exclusivamente pela mensalidade, que varia conforme o número de aulas e pacotes escolhidos. Para mais detalhes sobre valores, entre em contato comigo.


                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Há uma aula experimental disponível?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sim! Oferecemos uma aula avulsa a um preço acessível, para que você conheça o método de ensino, discuta seus objetivos e veja como funciona o formato das aulas antes de decidir pelo curso completo.



                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Quanto tempo leva para aprender espanhol?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    O tempo de aprendizado depende do seu nível inicial, esforço e dedicação. Para alcançar um nível básico (A1), com aulas regulares e prática constante, você pode esperar cerca de 6 meses. Para atingir a fluência completa (nível B2 ou C1), o curso pode levar de 1 a 2 anos. Estimar 3 anos é ideal para alcançar um nível avançado (C1 ou C2) no espanhol, seguindo a progressão do Quadro Europeu Comum de Referência para as Línguas


                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Qual é a duração do curso?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    A duração do curso depende dos seus objetivos e ritmo de aprendizado. O curso pode ser planejado para cerca de 1 a 3 anos, cobrindo os 6 níveis do Quadro Europeu de Referência para as Línguas. Cada nível é abordado em um semestre, mas o tempo de aprendizado pode ser ajustado conforme o seu progresso.


                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>


                <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                                    <span>Eu recebo um certificado ao final do curso?
                                    </span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                                    Sim! Ao concluir o curso, você receberá um certificado de conclusão, com a carga horária e o nível alcançado, para comprovar seu aprendizado.


                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>

            </div>
        </div>
    )
}

export default FAQ;