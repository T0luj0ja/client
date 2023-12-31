import React, {useState, useEffect} from "react";  
import { ProductsPreviewCard  } from "./ProductPreviewCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ProductsPreview = () => {
    const [products, setProducts] = useState([]);
    

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };
        
    useEffect(() =>{
        //you should have connected to postman here, fix it
        fetch('http://localhost:8080/api/products')
        .then(response=> response.json( ))
        .then(data=> setProducts(data?.data))
        .catch(e => console.log(e))
    }, [])

    const onAddProduct = (product) => {
        console.log(product)
    }
    return (
        <div className="bg-black"> 
            <div className="container mx-full pb-4 w-2/3 text-white bg-black ">

                <Carousel responsive={responsive}>
                    {
                        products.length > 0 && products.map((product,index) => {
                            return (
                                <div className="w-full p-3">
                                    <ProductsPreviewCard key={index} product={product} onAddProduct={onAddProduct}/>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
        </div>
    )
}