import { useEffect, useState } from "react";
import './Products.css'; // Asegúrate de que la ruta sea correcta

function Products() {
    const [products, setProducts] = useState<any[]>([]); // Especifica el tipo de los productos
    const [loading, setLoading] = useState<boolean>(true); // Especifica el tipo de loading

    const showProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products/");
        const result = await response.json();
        setProducts(result);
        setLoading(false);
        console.log(result);
    };

    useEffect(() => {
        showProducts();
    }, []);

    if (loading) return (
        <>
            <h1>Cargando datos...</h1>
            <button onClick={showProducts}>Consultar API</button>
        </>
    );

    // Products.tsx
return (
    <div className="container">
        <header>
            <h1>Tienda de Ropa</h1>
        </header>
        <div className="product-list">
            {products.map((item, index) => (
                <div className="card" key={index}>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <h4>${item.price}</h4>
                    <button>Añadir al Carrito</button>
                </div>
            ))}
        </div>
        <footer>
            <p>&copy; 2024 Tu Tienda de Ropa</p>
        </footer>
    </div>
);}
export default Products;