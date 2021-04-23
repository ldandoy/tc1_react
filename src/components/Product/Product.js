import styles from './Product.module.css'
import { Link } from 'react-router-dom'

export const ProductList = ({products}) => {
    return <ul>
        {products !== [] && products.map((product, index) => 
            <ProductItem key={`Product-${index}`} product={product} />
        )}
    </ul>
}

export const ProductItem = ({product}) => {
    return <li key={product._id}><Link to={`/products/${product._id}`}>{product._id}</Link>: {product.body}</li>
}
