'use client'
import { Card } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ProductsLoading from '../_pComponents/productsLoading';
import Loading from '../_pComponents/loading';

const Page = (props) => {

    const [product, setproduct] = useState([])
    const [category, setcategory] = useState([]);

    const productID = props.params.productID

    const getproduct = () => {
        useEffect(() => {
            fetch(`https://fakestoreapi.in/api/products/${productID}`)
                .then(res => res.json())
                .then(res => setproduct(res.product))
                .catch(err => console.log(err))
        }, [productID])
    }

    getproduct()



    useEffect(() => {
        const getproductCategory = async () => {
            fetch(`https://fakestoreapi.in/api/products/category?type=${product.category}`)
                .then(res => res.json())
                .then(res => setcategory(res.products))
                .catch(err => console.log(err))
        }
        getproductCategory()
    }, [product.category])



    return (
        <>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    {product ?
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto relative">
                                <img className="w-full dark:hidden" src={product.image} alt="" />
                                {product.popular ?
                                    <div className='absolute bg-primary text-white top-0 right-0 py-2 px-3 rounded-bl-3xl'>
                                        popular
                                    </div>
                                    : null}
                            </div>

                            <div className="mt-6 sm:mt-8 lg:mt-0">
                                <h1
                                    className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white"
                                >
                                    {product.title}
                                </h1>
                                <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                    <p
                                        className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                                    >
                                        {product.price}$
                                    </p>

                                    <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                        <div className="flex items-center gap-1">
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                />
                                            </svg>
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                                                />
                                            </svg>
                                        </div>
                                        <p
                                            className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                        >
                                            (5.0)
                                        </p>
                                        <a
                                            href="#"
                                            className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                        >
                                            345 Reviews
                                        </a>
                                        <p className='text-primary font-bold ml-4 uppercase'>{product.category}</p>
                                    </div>
                                </div>

                                <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                        role="button"
                                    >
                                        <svg
                                            className="w-5 h-5 -ms-2 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                            />
                                        </svg>
                                        Add to favorites
                                    </a>

                                    <a
                                        href="#"
                                        title=""
                                        className="btn-primryM mt-4 sm:mt-0 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                                        role="button"
                                    >
                                        <svg
                                            className="w-5 h-5 -ms-2 me-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                                            />
                                        </svg>

                                        Add to cart
                                    </a>
                                </div>

                                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                                <p className="mb-6 text-gray-500 dark:text-gray-400">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                        : <Loading />
                    }
                    <div className='pt-20'>
                        <h1 className=' text-2xl text-gray-600 dark:text-gray-400 font-bold'>
                            Related Products
                        </h1>
                        {category ?
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mt-16'>
                                {category?.map((item) => (
                                    <Link href={`/product/${item.id}`}
                                        key={item.id}
                                        className='flowbite-card'>
                                        <Card
                                            className="max-w-sm relative overflow-hidden"
                                            imgAlt={item.title.substring(0, 20)}
                                            imgSrc={item.image}
                                        >
                                            <Link href={`/product/${item.id}`}>
                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                                    {`${item.title.substring(0, 22)}...`}
                                                </h5>
                                            </Link>
                                            <div className="mb-5 mt-2.5 flex items-center justify-between">
                                                <div className='flex items-center'>
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                                                        5.0
                                                    </span>
                                                </div>
                                                <p className='text-gray-500 '>{item.category.toUpperCase()}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                                                <a
                                                    href="#"
                                                    className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#72229c] focus:outline-none"
                                                >
                                                    Add to cart
                                                </a>
                                            </div>
                                            {item.popular ?
                                                <div className='absolute bg-primary text-white top-0 right-0 py-2 px-3'>
                                                    popular
                                                </div>
                                                : null}
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                            : <ProductsLoading />
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Page;

