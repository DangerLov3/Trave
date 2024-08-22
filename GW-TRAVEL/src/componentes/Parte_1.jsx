import { Fragment } from "react";



function Parte_1(){
    return(
        <>
        <section className="Cabeza">   
        <header>
            <div id="cabecera">
                <a href="#">
                    <img className="" src="" alt=""/>
                    GW TRAVEL
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#">INICIO</a></li>
                    <li><a href="../Paginas/nosotros.html">NOSOTROS</a></li>
                    <li><a href="../Paginas/destino.html">DESTINOS</a>
                        <ul className="submenu">
                            <li><a href="../Paginas/costa.html">Costa</a></li>
                            <li><a href="../Paginas/sierra.html">Sierra</a></li>
                            <li><a href="../Paginas/selva.html">Selva</a></li>
                        </ul>
                    </li>
                
                    <li><a href="../Paginas/testimonios.html">TESTIMONIOS</a></li>
                    <li><a href="../Paginas/blog.html">BLOG</a></li>
                    <li><a href="../Paginas/contacto.html">CONTACTO</a></li>
                </ul>
            </nav>
        </header>
        <section className="banner">
            <h2>Descubre Tu Próxima Aventura</h2>
            <p>Explora destinos increíbles y reserva tu viaje hoy mismo</p>
        </section>
    </section>
        






        </>


    );





    
}
    export default Parte_1;

