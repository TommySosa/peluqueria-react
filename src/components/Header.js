import '../styles-css/header.css';
const logo = 'https://lissgold.com/wp-content/uploads/2021/03/Logo-web-color.png';

function Header() {
    return (
        <header>
            <div className="row apartados">
                <div className="col">
                    <img src={logo} alt="" width='150' />
                </div>
                <div className="col ">
                    <a href="" className='btn'>Inicio</a>
                </div>
                <div className="col">
                    <div class="dropdown">
                        <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Alisados</a></li>
                            <li><a class="dropdown-item" href="#">Rulos</a></li>
                            <li><a class="dropdown-item" href="#">Nutriciones</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col">
                    <a href="" className='btn'>Sobre nosotros</a>
                </div>
                <div className="col">
                    <input type="text" />
                </div>
            </div>
        </header>
    );
}

export default Header;