"use client"

import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from './cartContext';
import { useContext, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";



const Header = () => {
    const { itemsC, removeFromCart } = useContext(CartContext)

    const [categorys, setcategorys] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.in/api/products/category")
            .then(res => res.json())
            .then(res => setcategorys(res.categories)
            )
    }, []);


    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-white">
                <div className="flex-1">
                    <Link className="text-xl text-primary font-black ml-2 cursor-pointer" href='/'>Souq <span>Store</span></Link>
                </div>
                <div className="flex-none gap-2 md:gap-6 lg:gap-8">
                    <div className="form-control flex items-center flex-row">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                        <button className="btn btn-outline btn-primryM ml-2 ">Search</button>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="flex justify-center items-center flex-row flex-nowrap btn btn-outline btn-primryM">
                            <p className='sm:mr-4 lg:mr-6  text-[18px] hidden sm:block'>My Cart </p>
                            <FaCartShopping className='text-[18px]' />
                            <span className='bg-white rounded-full text-primary px-2 py-1'>{
                                itemsC ? itemsC.length : 0
                            }</span>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-gray-100 rounded-box w-80">
                            {itemsC.length > 0 ?
                                itemsC?.map((itemC => {
                                    itemsC.forEach((item, i) => {
                                        item.id = i + 1;
                                    })
                                    return (
                                        <li key={itemC.id} className='cursor-none'>
                                            <div className="flex items-center justify-between">
                                                <img src={itemC.item.image} className="w-12 h-12 rounded-full" />
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                        {`${itemC.item.title.substring(0, 18)}`}
                                                    </p>
                                                    <p className="text-sm text-primary">{itemC.item.price}$</p>
                                                </div>
                                                <button className="text-red-700 text-[24px] rounded-full bg-primary p-2"
                                                    onClick={() => removeFromCart(itemC.id)}><MdDelete />
                                                </button>
                                            </div>
                                        </li>
                                    )
                                }))
                                :
                                <p className="text-sm text-center font-bold text-[20px] my-2 text-gray-900 dark:text-white">
                                    No items in cart
                                </p>
                            }

                            <li>
                                <Link href={'/cart'} className='btn btn-outline btn-primryM'>
                                    <p className='mr-6 text-[18px] hidden sm:block'>My Cart </p>
                                    <FaCartShopping className='text-[18px]' />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar bg-primary mb-4">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link href={"/"} >Home</Link></li>
                    <li>
                        <details>
                            <summary>category</summary>
                            <ul className="p-2 z-20">
                                {categorys.map((item) => (
                                    <li key={item} className='text-black hover:text-primary uppercase'><Link href={`/category/${item}`}>{item}</Link></li>
                                ))
                                }
                            </ul>
                        </details>
                    </li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
