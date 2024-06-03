import Link from 'next/link';
import { FaCartShopping } from "react-icons/fa6";



const Header = () => {
    return (
        <>
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
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-gray-400 rounded-box w-52">
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
                                {
                                    fetch("https://fakestoreapi.in/api/products/category")
                                    .then(res => res.json())
                                    .then(res => {
                                        const categories = res.categories
                                        const categoriesList = categories.map((item) => (
                                            <li key={item} className='text-black hover:text-primary uppercase'><Link href={`/category/${item}`}>{item}</Link></li>
                                        ))
                                        return categoriesList
                                    })
                                }
                            </ul>
                        </details>
                    </li>
                    <li><a>About Us</a></li>
                </ul>
            </div>
        </>
    );
}

export default Header;
