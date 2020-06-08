import React from 'react';
import './style.css';
// import tree from '../../../public/images/tree.svg';
import SimpleMap from './../../components/SimpleMap';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <nav>
        <h1>RECICLAMAT</h1>
        <p>Entrar</p>
      </nav>
      <div className="hero">
        <h1>DON’T throw it out, RECYCLE it!</h1>
        <button>Sign Up</button>
        <div className="black-image"></div>
      </div>
      <section className="info-section">
        <div className="info-box">
          <img src="" alt="" className="box-icon" />
          <p>Encontre pessoas que trabalham com materiais recicláveis</p>
        </div>
        <div className="info-box">
          <img src="./images/recycle.svg" alt="" className="box-icon" />
          <p>Recicle seu material doando-os a quem os utiliza</p>
        </div>
        <div className="info-box">
          <img src="../../images/tree.svg" alt="" className="box-icon" />
          <p>Localize ecopontos para descarte</p>
        </div>
        <hr />
      </section>
      <section className="social-section">
        <h3>Conheça o trabalho incrível de artesãos que utilizam materiais recicláveis!</h3>
        <div className="image-cards">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1544955404-085f528bc52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1534769549239-a38ef6ace900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
      <footer>@copyright</footer>
      <SimpleMap />
    </div>
  );
};

export default LandingPage;
