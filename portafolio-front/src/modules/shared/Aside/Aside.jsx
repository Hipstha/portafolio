import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
  render() {
    return (
      <>
        <aside>
          <div className="aside-content">
            <div className="aside-header">
              <div className="aside-header-content">

                <div className="aside-user">
                  <div className="aside-user-img">
                    <img src="me.jpg" alt="mi foto"/>
                  </div>
                  <div className="aside-info">
                    <div className="aside-name">
                      <p>Alejandro Cruz</p>
                    </div>
                    <div className="aside-data">
                      <p>Full Stack developer</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div className="aside-separator">
              <hr/>
            </div>

            <div className="aside-body">
                <div className="aside-body-content">

                  <div className="aside-menu">

                    <div className="aside-menu-title">
                      <h3>Opciones</h3>
                    </div>

                    <div className="aside-menu-options">

                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i className="fas fa-house-user"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>Home</p>
                        </div>
                      </div>
                      
                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i class="fas fa-briefcase"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>CV</p>
                        </div>
                      </div>
                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i class="fas fa-laptop-code"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>Proyectos</p>
                        </div>
                      </div>
                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i class="fas fa-info"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>Sobre mi</p>
                        </div>
                      </div>
                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i class="fas fa-user-tie"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>Mi vida profesional</p>
                        </div>
                      </div>
                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i class="fas fa-smile"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>Mi historia</p>
                        </div>
                      </div>
                      <div className="aside-menu-option">
                        <div className="aside-menu-icon">
                          <i class="fas fa-envelope"></i>
                        </div>
                        <div className="option-menu-text">
                          <p>Contácto</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </aside>
      </>
    );
  };
};

export default Aside;
