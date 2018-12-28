import React from 'react'
import '../css/bootstrap.weber.css'
import '../css/custom.css'
import '../css/fx.css'
import '../css/magnific-popup.css'

const Footer = () => (<footer id="footer-logo-share" className="pt-50 pb-50 dark spr-edit-el spr-oc-show spr-wout">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-md order-md-2 text-lg-right">
            </div>
            <div className="col-md order-md-1 d-flex align-items-center">
                {/*<img className="mw-100 mr-30" src="images/gallery/logo-1-light.png" height="60px" alt="logo">*/}
                <p className="mb-0">© 2019 Kimmo Sääskilahti. <br/>All rights reserved.</p>
            </div>
        </div>
    </div>
    <div className="bg-wrap">
        <div className="bg"></div>
    </div>
    </footer>
)

export default Footer
