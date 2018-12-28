
import React from 'react'
import '../css/bootstrap.weber.css'
import '../css/custom.css'
import '../css/fx.css'
import '../css/magnific-popup.css'

const Background = require("../images/thunder.jpg")

const Header = () => (<header id="header-text-2" className="pt-75 pb-75 pt-lg-200 pb-lg-200 dark spr-edit-el spr-oc-show spr-wout">
    <div className="container">
        <div className="row">
            <div className="col-lg-12" align="center">
                {/*<img className="mb-75" alt="sign" src="images/gallery/logo-3.png" height="120">*/}
                <h3><strong>Kimmo Sääskilahti Photography</strong></h3>
                <h4><strong>Love the Nature.</strong></h4>
            </div>
        </div>
    </div>
    <div className="bg-wrap">
        <div className="bg" style={{backgroundImage: `url(${Background})`, backgroundPosition: "center center", backgroundSize: "cover"}}></div>
    </div>
    </header>
)

export default Header