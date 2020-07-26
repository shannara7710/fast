import React,{Fragment} from 'react';
import './style.css';
import NavBar from '../../components/Header';
import img from '../../img/illustration.png';
import fleche from '../../img/fehce5.png';
import FuncCard from '../../components/card';
import Partenaire from '../../components/partenaire/index';
import Lancer from '../../components/ButtonLnacer/index';
import Footer from '../../components/footer/index';

const Home = props =>{
    return (
        <div>
            <NavBar/>

            <Fragment>

            <div className="container">
             <div className="row">

                        <div className='col s6 '>
                            <h1>Lorem Ipsum is simply dummy text of the  <span className='vert'> printing</span> </h1>
                            <p className='paragraphe'> Lorem Ipsum has been the industry's standard dummy text  ever since the 1500s, when an unknown printer took a galley    Lorem Ipsum has been the industry's standard dummy text     ever since the 1500s, when an unknown printer took a galley</p>
                            <a className="waves-effect waves-light btn bgVert">Lancer vous</a>
                        </div>

                        <div className='col'>
                            <img src={img}  alt="mauvaise connexion" className="image"/>
                        </div>
             </div>
                    
                    <div className="fleche">
                            <img src={fleche} style={{width: "100px",}}/>
                        </div>

            <div className="div1">

                <h1 className="title1"> Effectuer une action sur FAST BUSINESS  </h1>
                <p className="paragrap1"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   an unknown printer took a galley </p>

                <FuncCard/>
            </div>

            <div className="div2">

                    <h1 className="title1"> Nos partenaires </h1>
                    <p className="paragrap1"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   an unknown printer took a galley </p>
                    <div className="partenaire">
                        <Partenaire nom="Partenaire"/>
                        <Partenaire nom="Partenaire"/>
                        <Partenaire nom="Partenaire"/>
                        <Partenaire nom="Partenaire"/>
                    </div>

             </div>

             <div className="div2">
                    <h1 className="title1"> Pret a vous lancer </h1>
                    <p className="paragrap1"> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   an unknown printer took a galley </p>
                    <Lancer nom='lancer'/>
            </div>
 
                </div>

                <Footer/>
             </Fragment>
        </div>
    )
}

export default Home;