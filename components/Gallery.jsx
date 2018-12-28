
import React from 'react'
import '../css/bootstrap.weber.css'
import '../css/custom.css'
import '../css/fx.css'
import '../css/magnific-popup.css'

const Bear = require('../images/bear.jpg')
const ViviparousLizard = require('../images/sisilisko-skatta-1.jpg')
const Toyhtohyyppa = require('../images/toyhtohyyppa.jpg')
const Crow = require('../images/crow.jpg')

const Gallery = () => (<section id="gallery-2col" className="pt-75 pb-75 pt-md-150 pb-md-150 gallery light spr-edit-el spr-oc-show spr-wout">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="gallery-item gallery-style-5 mb-50 dark padding">
                    <img src={ViviparousLizard} alt="" className="item-img"/>
                    <div className="item-title"><p><strong>Viviparous Lizard, Skatanniemi, Helsinki</strong></p></div>
                    <div className="item-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" className="icon svg-default" src="images/gallery/icons/plus.svg" alt=""><path d="m9 7h7v2h-7v7h-2v-7h-7v-2h7v-7h2z" fillRule="evenodd"></path></svg></div>
                </div>
                <div className="gallery-item gallery-style-5 mb-50 dark padding">
                    <img src={Bear} alt="" className="item-img"/>
                    <div className="item-title"><p><strong>Brown bear, Kuusamo</strong></p></div>
                    <div className="item-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" className="icon svg-default" src="images/gallery/icons/plus.svg" alt=""><path d="m9 7h7v2h-7v7h-2v-7h-7v-2h7v-7h2z" fillRule="evenodd"></path></svg></div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="gallery-item gallery-style-5 mb-50 dark padding">
                    <img src={Toyhtohyyppa} alt="" className="item-img"/>
                    <div className="item-title"><p><strong>Northern Lapwing, Viikki, Helsinki</strong></p></div>
                    <div className="item-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" className="icon svg-default" src="images/gallery/icons/plus.svg" alt=""><path d="m9 7h7v2h-7v7h-2v-7h-7v-2h7v-7h2z" fillRule="evenodd"></path></svg></div>
                </div>
                <div className="gallery-item gallery-style-5 mb-50 dark padding">
                    <img src={Crow} alt="" className="item-img"/>
                    <div className="item-title"><p><strong>Hooded Crow, Arabianranta, Helsinki</strong></p></div>
                    <div className="item-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" className="icon svg-default" src="images/gallery/icons/plus.svg" alt=""><path d="m9 7h7v2h-7v7h-2v-7h-7v-2h7v-7h2z" fillRule="evenodd"></path></svg></div>
                </div>
            </div>
        </div>
    </div>
    <div className="bg-wrap">
        <div className="bg"></div>
    </div>
    </section>
)

export default Gallery
