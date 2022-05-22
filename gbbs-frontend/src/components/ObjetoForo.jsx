import { useState } from 'react';

import '../styles/styles.scss'

import Alien from '../img/alien.jpg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";


const ObjetoForo = () => {

    const [answerState, setAnswerState] = useState(false);

    return (  
        <div id="objetoForo">
            <div className="container-lg">
                <div className="row py-5 foroTitle">
                    <h2 className='text-center text-light py-3'>¿Realmente existen los alienigenas?</h2>
                </div>
                <div className="row foroMain">
                    <div className="col">
                        <div className="row justify-content-between align-items-center foroHeader pb-2">
                            <div className="col-6">
                                <FontAwesomeIcon className='pe-2' icon={faCircle}></FontAwesomeIcon>
                                Activos: 23
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <a href="#" className="link-light">Unirse</a>
                                <a href="#" className="link-light">Bloquear</a>
                            </div>
                        </div>
                        <div className="m-0 row justify-content-between align-items-center bg-light pb-4 mb-4 foroContent">
                            <div className="m-0 row justify-content-between align-items-center contentHeader py-3">
                                <h3 className='col-6 text-start fw-normal'>manolito123</h3>
                                <h4 className='col-6 text-end fw-normal'>20/03/2022 a las 13:00  </h4>
                            </div>
                            <div className="m-0 row contentMain">
                                <div className="col-lg-6 col-12 mainText px-4 mx-3">
                                    <h5>¿Existen los alienigenas?</h5>
                                    <p>Tengo pruebas de que los alienigenas son reales y estan entre nosotros smwoICV NVJ VCJSD VJ SCaso jdv sodv afod vasm vdvk sdvjmc sdjjjjjjjjjjjcna Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.1</p>

                                    <div className='d-flex align-items-center' onClick={() => {setAnswerState(!answerState)}}>
                                        <p className='mb-1 pe-2 text-primary'>Ver respuestas a este mensaje</p>
                                        <span className="badge bg-primary rounded-pill">
                                            <FontAwesomeIcon icon={ answerState ? faAngleDown : faAngleRight }/>
                                    </span>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-12 mainImg d-flex align-items-center pt-3">
                                    <img src={Alien} alt="" />
                                </div>
                            </div>
                        </div>

                        {
                            answerState ? (
                                <div className="m-0 row justify-content-between align-items-center bg-light pb-4 pt-4 mb-4 foroContentChild px-4">
                                    <div className="col-12 foroContainer">
                                        <div className="m-0 row justify-content-between align-items-center contentHeader py-3">
                                            <h3 className='col-6 text-start fw-normal'>valenGG responde a manolito123</h3>
                                            <h4 className='col-6 text-end fw-normal'>20/03/2022 a las 15:00  </h4>
                                        </div>
                                        <div className="m-0 row contentMain">
                                            <div className="col mainText">
                                                <h5>¿Existen los alienigenas?</h5>
                                                <p>Tengo pruebas de que los alienigenas son reales y estan entre nosotros smwoICV NVJ VCJSD VJ SCaso jdv sodv afod vasm vdvk sdvjmc sdjjjjjjjjjjjcna Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.1</p>

                                                <div className='d-flex align-items-center' onClick={() => {setAnswerState(!answerState)}}>
                                                    <p className='mb-1 pe-2 text-primary'>Ver respuestas a este mensaje</p>
                                                    <span className="badge bg-primary rounded-pill">
                                                        <FontAwesomeIcon icon={ answerState ? faAngleDown : faAngleRight }/>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ):(
                                <span className='d-none'></span>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ObjetoForo;