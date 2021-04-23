import { Link, useParams } from 'react-router-dom'

const ProductEditScreen = () => {
    const { productId } = useParams()

    return <>
        <h1>Product Edit Screen</h1>
        
        <Link to={`/products/${productId}`}>Retour au produit</Link>
    </>
}

export default ProductEditScreen