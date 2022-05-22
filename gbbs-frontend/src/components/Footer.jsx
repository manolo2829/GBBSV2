import '../styles/styles.scss'


import Etec from '../img/etec.png'
import Um from '../img/um.png'

const Footer = () => {
    return (  
        <footer id="footer">
            <div className="container-lg py-5">
                <div className="row footerContainer justify-content-center align-items-center">
                    <div className="col-lg-4 col-8 footerMap">
                        <iframe src="https://maps.google.com/maps?q=colegio%20tecnico%20de%20la%20univrsidad%20de%20mend&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                    </div>
                    <div className="col-lg-4 col-6 footerTitle py-3">
                        <h6 className='text-center text-light h4'>ETec GBBS</h6>
                    </div>
                    <div className="col-lg-4 col-6 footerLinks py-3">
                        <div className="row">
                            <img className='col-6' src={Etec} alt="" />
                            <img className='col-6' src={Um} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

 
export default Footer;