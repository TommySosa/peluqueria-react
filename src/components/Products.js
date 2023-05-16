function Products({nombre, precio}) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div>

            </div>
            <img src="https://lissgold.com/wp-content/uploads/2021/12/IMG_20220401_131809576-300x300.jpg" class="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-start">{nombre}</h5>
                <p className="card-text d-flex justify-content-start">${precio}</p>
                <a href="#" class="btn btn-dark">Agregar al carrito</a>
            </div>
        </div>
    );
}

export default Products;