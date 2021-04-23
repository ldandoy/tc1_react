import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { getProductById } from '../services/productsService'

const ProductScreen = () => {
    const [product, setProduct] = useState({
        _id: null,
        body: null,
        userId: null,
        created_at: null,
        updated_at: null
    })

    const { productId } = useParams()

    useEffect(() => {
        (async () => {
            setProduct(await getProductById(productId))
        })();
        
    }, [productId])

    const handlerDelete = (productId) => {
        console.log(`Suppression du produit d'Id ${productId}`)
    }

    return <>
        <h1>Product Screen</h1>
        <button onClick={handlerDelete(product._id)}>Supprimer</button> <Link to={`/products/${product._id}/edit`}>Mettre à jour</Link>
        <p>Id: {product._id}</p>
        <p>Body: {product.body}</p>
        <p>userId: {product.userId}</p>
        <p>Créer le: {product.created_at}</p>
        <p>Dernière mise à jour: {product.updated_at}</p>
        <Link to='/products'>Retour à la liste</Link>
    </>
}

export default ProductScreen