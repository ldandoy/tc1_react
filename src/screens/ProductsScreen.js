import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductList } from '../components/Product/Product'

import { getAllProducts } from '../services/productsService'

const ProductsScreen = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        (async () => {
            setProducts(await getAllProducts())
        })()
    }, [])

    return <>
        <h1>Products Screen</h1>
        <ProductList products={products} />
    </>
}

export default ProductsScreen