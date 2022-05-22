import Alien from '../img/alien.jpg'

import '../styles/styles.scss'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Foros = () => {

    const [recientes, setRecientes] = useState(false);
    const [favoritos, setFavoritos] = useState(false);
    const [creados, setCreados] = useState(false);
    const [foroNav, setForoNav] = useState(false);

    const navigate = useNavigate()


    const verForo = async() => {
        navigate('/objetoforo')
    }

    return (  
        <div id="foros">
            <div className="container-lg">
                <h2 className='text-light text-center forosTitle p-5'>El Global Bulletin Board System <br /><hr /><br /> GBBS</h2>
                <div className="row justify-content-center">
                    <ul className="forosNavbarPhone list-group d-lg-none col-11 p-0 mb-3 position-sticky">
                        <li className="list-group-item d-flex list-group-item-secondary justify-content-center align-items-center listInput">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2 list-group-item-secondary" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-secondary" type="submit">
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </button>
                            </form>
                            <button className="btn btn-outline-secondary barsInput" onClick={() => {setForoNav(!foroNav)}}>
                                <FontAwesomeIcon icon={faBars}/>
                            </button>

                        </li>
                        <ul className={`p-0 ${foroNav ? 'listCollapse--show' : 'listCollapse'}`}>
                            <li className={` list-group-item list-group-item-secondary justify-content-between align-items-center py-3`}>
                                Todos
                            </li>
                            <li className={` list-group-item list-group-item-secondary justify-content-between align-items-center py-3`}>
                                Destacados
                            </li>
                            <li className={`d-flex list-group-item list-group-item-secondary justify-content-between align-items-center py-3`} onClick={() => {setRecientes(!recientes)}}>
                                Recientes
                                <span className="badge bg-primary rounded-pill">
                                    <FontAwesomeIcon icon={ recientes ? faAngleDown : faAngleRight }/>
                                </span>
                            </li>
                            {
                                recientes ?(
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>

                                    </ul>

                                ):(
                                    <span className='d-none'></span>
                                )
                            }
                            <li className={` list-group-item list-group-item-secondary justify-content-between align-items-center py-3`}>
                                Nuevos
                            </li>
                            <li className="d-flex list-group-item list-group-item-secondary justify-content-between align-items-center py-3" onClick={(e) => {setFavoritos(!favoritos)}}>
                                Favoritos
                                <span className="badge bg-primary rounded-pill">
                                    <FontAwesomeIcon icon={ favoritos ? faAngleDown : faAngleRight }/>
                                </span>
                            </li>
                            {
                                favoritos ?(
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>

                                    </ul>

                                ):(
                                    <span className='d-none'></span>
                                )
                            }
                            <li className="d-flex list-group-item list-group-item-secondary justify-content-between align-items-center py-3" onClick={(e) => {setCreados(!creados)}}>
                                Creados
                                <span className="badge bg-primary rounded-pill">
                                    <FontAwesomeIcon icon={ creados ? faAngleDown : faAngleRight }/>
                                </span>
                            </li>
                            {
                                creados ?(
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>
                                        <li className="list-group-item list-group-item-dark">An item</li>

                                    </ul>

                                ):(
                                    <span className='d-none'></span>
                                )
                            }
                        </ul>
                    </ul>
                    <div className="col-lg-4 col-11 forosSidebarContainer">
                        <div className="position-sticky forosSidebar">
                            <ul className="list-group d-lg-block d-none">
                                <li className="list-group-item d-flex justify-content-center align-items-center listInput">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-primary" type="submit">
                                        <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                    </button>
                                </form>
                                </li>
                                <li className="d-lg-flex d-none list-group-item justify-content-between align-items-center py-3">
                                    Todos
                                </li>
                                <li className="d-lg-flex d-none list-group-item d-flex justify-content-between align-items-center py-3">
                                    Destacados
                                </li>
                                <li className="d-lg-flex d-none list-group-item d-flex justify-content-between align-items-center py-3" onClick={(e) => {setRecientes(!recientes)}}>
                                    Recientes
                                    <span className="badge bg-primary rounded-pill">
                                        <FontAwesomeIcon icon={ recientes ? faAngleDown : faAngleRight }/>
                                    </span>
                                </li>

                                {
                                    recientes ?(
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>

                                        </ul>

                                    ):(
                                        <span className='d-none'></span>
                                    )
                                }

                                <li className="list-group-item d-flex justify-content-between align-items-center py-3">
                                    Nuevos
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center py-3" onClick={(e) => {setFavoritos(!favoritos)}}>
                                    Favoritos
                                    <span className="badge bg-primary rounded-pill">
                                        <FontAwesomeIcon icon={ favoritos ? faAngleDown : faAngleRight }/>
                                    </span>
                                </li>

                                {
                                    favoritos ?(
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                            <li className="list-group-item list-group-item-primary">An item</li>
                                        </ul>

                                    ):(
                                        <span className='d-none'></span>
                                    )
                                }
                                <li className="list-group-item d-flex justify-content-between align-items-center py-3" onClick={(e) => {setCreados(!creados)}}>
                                    Creados
                                    <span className="badge bg-primary rounded-pill">
                                        <FontAwesomeIcon icon={ creados ? faAngleDown : faAngleRight }/>
                                    </span>
                                </li>
                                {
                                    creados ?(
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item list-group-item-primary">Crear un foro</li>
                                            <li className="list-group-item list-group-item-primary">Mi primer foro</li>
                                            <li className="list-group-item list-group-item-primary">Mi segundo foro</li>
                                        </ul>

                                    ):(
                                        <span className='d-none'></span>
                                    )
                                }
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-8 col-11 forosContent">
                        <div className="row">
                            <div className="col-12 card mb-3" onClick={verForo}>
                                <div className="row g-0 p-3">
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">¿Realmente estamos solos?</h5>
                                            <p className="card-text">Radioaficionados chilenos contactaron con tripulantes de un ovni. Esto me llevo a hacerme la siguiente pregunta ¿Realmente estamos solos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum!</p>
                                            <p className="card-text"><small className="text-muted">CREADOR: juanito123</small></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">21/05/2022</small>
                                        </div>
                                    </div>
                                    <div className="col-md-5 px-3">
                                        <img src={Alien} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mb-3" onClick={verForo}>
                                <div className="row g-0 p-3">
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">¿Realmente estamos solos?</h5>
                                            <p className="card-text">Radioaficionados chilenos contactaron con tripulantes de un ovni. Esto me llevo a hacerme la siguiente pregunta ¿Realmente estamos solos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum!</p>
                                            <p className="card-text"><small className="text-muted">CREADOR: juanito123</small></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">21/05/2022</small>
                                        </div>
                                    </div>
                                    <div className="col-md-5 px-3">
                                        <img src={Alien} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mb-3" onClick={verForo}>
                                <div className="row g-0 p-3">
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">¿Realmente estamos solos?</h5>
                                            <p className="card-text">Radioaficionados chilenos contactaron con tripulantes de un ovni. Esto me llevo a hacerme la siguiente pregunta ¿Realmente estamos solos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum!</p>
                                            <p className="card-text"><small className="text-muted">CREADOR: juanito123</small></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">21/05/2022</small>
                                        </div>
                                    </div>
                                    <div className="col-md-5 px-3">
                                        <img src={Alien} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 card mb-3" onClick={verForo}>
                                <div className="row g-0 p-3">
                                    <div className="col-md-7">
                                        <div className="card-body">
                                            <h5 className="card-title">¿Realmente estamos solos?</h5>
                                            <p className="card-text">Radioaficionados chilenos contactaron con tripulantes de un ovni. Esto me llevo a hacerme la siguiente pregunta ¿Realmente estamos solos? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, laborum!</p>
                                            <p className="card-text"><small className="text-muted">CREADOR: juanito123</small></p>
                                        </div>
                                        <div className="card-footer">
                                            <small className="text-muted">21/05/2022</small>
                                        </div>
                                    </div>
                                    <div className="col-md-5 px-3">
                                        <img src={Alien} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 


export default Foros;