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
        <p><span className="label">Id</span>: {product._id}</p>
        <p><span className="label">Nom</span>: {product.name}</p>
        <p><span className="label">Prix</span>: {product.price} €</p>
        <p><span className="label">Créer le</span>: {product.created_at}</p>
        <p><span className="label">Dernière mise à jour</span>: {product.updated_at}</p>
        <Link to='/products'>Retour à la liste</Link>
    </>
}

export default ProductScreen