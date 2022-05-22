
import { Link } from 'react-router-dom'

import '../styles/styles.scss'
import Etec from '../img/etec.png'
import Um from '../img/um.png'
import Luimum from '../img/Sin título-3.jpg'


const Home = () => {
    return (  
        <div id="home">
            <section id='inicio' className="header d-flex justify-content-center align-items-center">
                <div className="container-lg">
                    <div className="row flex-row justify-content-center align-items-center">
                        <div className='col-3 headerLogo d-flex justify-content-center align-items-center'>
                            <img src={Etec} alt="" />
                        </div>
                        <div className='headerBody col-6 d-flex flex-column justify-content-center align-items-center'>
                            <h2 className='h1 text-center text-light'>ETec GBBS</h2>
                            <Link to='/foros' className="btn btn-outline-light">Explorar Foros</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id='nosotros'>
                <div className="container-lg">
                    <h3 className='text-center text-light pt-5'>Sobre nosotros</h3>
                    <div className="row pt-3 pb-5 ">
                        <div className="col-12">
                            <h4 className='text-light text-start my-5'>Nuestra Misión</h4>
                            <p className='text-light text-center'>Ofrecer una mejor experiencia y servicio del GBBS para tratar de satisfacer a usuarios de menor edad (acostumbrados a nuevas tecnologías) y clientes de mayor edad que sean amantes de los antiguos sistemas BBS. </p>
                        </div>
                        <div className="col-12">
                            <h4 className='text-light text-end my-5'>Nuestra Visión</h4>
                            <p className='text-light text-center'>Ser líder en las plataformas web para radioaficionados, para poder generar valores económicos y sociales gestionando modelos de negocio innovadores.</p>
                        </div>
                        <div className="col-12">
                            <h4 className='text-light text-start py-5'>Nuestros Valores</h4>
                            <p className='text-light text-center'>Nuestros valores nos guían cada día para crecer más como personas y también como empresa empatizando con nuestros clientes expresando quienes somos y que creemos. Algunos de nuestros valores son: empatía, progreso, innovación, contribución y fiabilidad.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='organizaciones'>
                <div className="container-lg py-5">
                    <div className="row justify-content-center align-items-center py-5">
                        <div className="col-lg-6 col-12 organizacionesText">
                            <h5 className='text-center py-3'>Organizaciones relacionadas</h5>
                            <ol className="list-group list-group-numbered">
                                <li>Colegio tecnico ETec</li>
                                <li>Universidad de Mendoza</li>
                                <li>LU1MUM</li>

                            </ol>
                        </div>
                        <div className="col-lg-6 col-9 organizacionesImgs">
                            <div className="row">
                                <div className="col-6">
                                    <img src={Etec} alt="" />
                                </div>
                                <div className="col-6">
                                    <img src={Um} alt="" />
                                </div>
                                <div className="col-12">
                                    <img src={Luimum} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Home;