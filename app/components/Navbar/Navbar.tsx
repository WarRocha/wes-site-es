"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Sobre', href: 'https://warrocha.github.io/wes-site-es/#aboutus-section', current: false },
    { name: 'Serviços', href: 'https://warrocha.github.io/wes-site-es/#services-section', current: false },
    { name: 'Dúvidas', href: 'https://warrocha.github.io/wes-site-es/#faq-section', current: false }
    // { name: 'Blog', href: '#blog-section', current: false },
    // { name: 'Testimonial', href: '#testimonial-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-col justify-center flex-shrink-0  border-right">
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-treetop'>
                                   Hablas Espanhol
                                </Link>
                                <h2 className='text-sm  text-treetop'>
                                    Wesley Rocha - professor de espanhol
                                </h2>
                            </div>

            

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'font-blue hover:text-black',
                                                'px-3 py-4 rounded-md text-lg font-normal text-treetop'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-treetop hover:text-white'>
                                <Link
                                  href={'/hispanohablantes'}
                                  >
                                   hispanohablantes
                                </Link>
                            </button>
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
