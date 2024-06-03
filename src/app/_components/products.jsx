'use client'

import React, { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import Link from 'next/link';
import ProductsLoading from '../product/_pComponents/productsLoading';


const Products = () => {

    const [data, setdata] = useState([])
    const [category, setcategory] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [fileredProductList, setFilteredProductList] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.in/api/products")
            .then(res => res.json())
            .then(res => setdata(res))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch("https://fakestoreapi.in/api/products/category")
            .then(res => res.json())
            .then(res => setcategory(res.categories))
            .catch(err => console.log(err))
    }, [])

    /////////////

    const removeCategorie = (category) => {
        if (selectedCategories.includes(category)) {
            const removedList = selectedCategories.filter((item) => (item !== category));
            setSelectedCategories(removedList);
        }
    }

    const addCategorie = (category) => {
        if (!selectedCategories.includes(category)) {
            setSelectedCategories(prev => ([category]))
        }
    }

    const resetCategory = () => { // this function will be used to clear the filter
        setSelectedCategories([]);
        // productFilterDiv[0].classList.add("hidden")
        // startItemDiv[0].classList.remove("hidden")

    }



    //////////
    useEffect(() => {
        async function onstart() {
            const productFilterDiv = document.querySelectorAll(".productFilter-div")
            const startItemDiv = document.querySelectorAll(".startItem-div ")

            if (selectedCategories.length === 0) {
                productFilterDiv[0].classList.add("hidden")
                startItemDiv[0].classList.remove("hidden")
            } else {
                productFilterDiv[0].classList.remove("hidden")
                startItemDiv[0].classList.add("hidden")
                setFilteredProductList(data.products.filter((item) => (selectedCategories.includes(item.category))));
            }
        }
        onstart();
    }, [selectedCategories])


    if (typeof window === 'object') {
        if (fileredProductList?.length === 0) {
            document.querySelectorAll(".noProduct").forEach(div => div.classList.remove("hidden"))
        } else {
            document.querySelectorAll(".noProduct").forEach(div => div.classList.add("hidden"))
        }
    }



    return (
        <div className='py-20'>
            <div className='container m-auto'>
                <h1 className='text-4xl text-black font-black mb-4'>Our Products</h1>

                <div className="btnCatgery flex items-center flex-col sm:flex-row justify-center mt-8 mb-4">
                    <button className='outline-primaryM mx-3 mb-2' onClick={resetCategory}>ALL</button>
                    {category.map((category) => (
                        <button className='outline-primaryM mx-3 mb-2' key={category} onClick={() => {
                            addCategorie(category);
                        }}>{category}</button>
                    ))}
                </div>
                {data ?
                    <div className='products-div'>
                        <div className='transition ease-in-out delay-150 productFilter-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mt-16'>
                            {fileredProductList?.map((item) => (
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
                                                {`${item.title.substring(0, 18)}...`}
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
                        <div className='startItem-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center mt-16'>
                            {data.products?.map((item) => (
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
                        <div className='hidden noProduct text-center font-bold text-2xl mt-10'>More products will be added soon</div>
                    </div>
                    : <ProductsLoading />
                }
            </div>
        </div >
    );
}

export default Products;
