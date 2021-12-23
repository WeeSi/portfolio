import React from 'react'

const Footer = () => {
    return (
        <section className="section-row lets-talk lets-talk-2019">
            <div className="screen-padding content-container z-10 relative justify-between flex items-center">
                <div className="text-content">
                    <h4 className="wow fadeInUp font-bold">Intéressé par une collaboration?</h4>
                    <p className="wow fadeInUp text-xl" >Mettez-moi au défi pour créer vos nouveaux projets innovants.</p>
                </div>
                <button className="btn btn-default btn-foot wow fadeInUp flex justify-between items-center"><span>Parlons</span> <i class="fa fa-chevron-right"></i></button>
            </div>
            <div style={{ paddingTop: "100px" }} className="screen-padding z-10">
                <div class="footer content-container relative z-10">
                    <div class="grid grid-cols-3">
                        <div class="col-sm-6 col-xs-6 foot-contact">
                            <a class="navbar-brand" href="https://sebostudio.com"></a>
                            <div class="contact-items">
                                <div class="contact-item">
                                    <label>E.</label>
                                    <a href="mailto:franckehuipro@gmail.com">franckehuipro@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-2 col-xs-6 foot-about">
                            <h5 className="text text-sm uppercase font-bold">A propos</h5>
                            <ul class="menu">
                                <li><a href="https://sebostudio.com/about/" class="menu-item">A Propos</a></li>
                                <li><a href="https://sebostudio.com/what-we-do/" class="menu-item">Mes Compétences</a></li>
                                <li><a href="https://sebostudio.com/projects/" class="menu-item">Mes projets</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2 col-xs-6 foot-social">
                            <h5 className="text text-sm uppercase font-bold">Me Suivre</h5>
                            <ul class="menu">
                                <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/sebostudio">Github</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/sebostudio/">Instagram</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://dribbble.com/sebostudio">Dribbble</a></li>
                                <li><a rel="noreferrer" target="_blank" href="https://www.behance.net/sebostudio">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="screen-padding">
                <div class="copyright">2021 © Franck Ehui. All rights reserved.</div>
            </div>
        </section>
    )
}

export default Footer
