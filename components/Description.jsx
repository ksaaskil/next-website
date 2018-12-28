import React from 'react'
import '../css/bootstrap.weber.css'
import '../css/custom.css'
import '../css/fx.css'
import '../css/magnific-popup.css'

const Description = () => (<section id="desc-text-4" className="pt-75 pb-75 pt-md-150 pb-md-150 text-center dark spr-edit-el spr-oc-show spr-wout">
    <div className="container" >
        <div className="row">
            <div className="col-lg-6 ml-auto mr-auto">
                <h3 className="mb-20"><strong>Kimmo Sääskilahti Photography</strong></h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 40 20" width="40" className="mb-30 svg-secondary" src="images/gallery/decor/line-h-1.svg" alt="sep"><path d="m0 8h40v4h-40z" fillRule="evenodd"></path></svg>
                <p className="mb-50">Love the nature.</p>
                {/*<a className="btn btn-secondary" href="#">Details</a>*/}
            </div>
        </div>
    </div>
    <div className="bg-wrap" >
        <div className="bg" style={{backgroundImage: `url(${require("../images/bear.jpg")})`, backgroundPosition: "center center", backgroundSize: "cover"}}></div>
    </div>
</section>)

export default Description

