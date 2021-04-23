export const getProductById = async (productId) => {
    let product = {}
    const response = await fetch(`https://ldandoy-video-app.herokuapp.com/api/products/${productId}`);
    product = await response.json();
    return product
}

export const getAllProducts = async () => {
    let products = []
    const response = await fetch(`https://ldandoy-video-app.herokuapp.com/api/products`);
    products = await response.json();
    return products
}