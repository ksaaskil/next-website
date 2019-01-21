
import React from 'react'
import Head from 'next/head'
// import '../css/fonts.css'
import '../css/bootstrap.weber.css'
import '../css/fx.css'
import '../css/magnific-popup.css'
import '../css/custom.css'
import { Th } from 'glamorous';
// import '../css/index.css'

const title = ({body, withUpperSpace=false}) => (
    <div align="center">
        {withUpperSpace ?
            /*<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 40 20" width="40" class="mb-30 svg-secondary" src="images/gallery/decor/line-h-1.svg" alt="sep"><path d="m0 8h40v4h-40z" fillRule="evenodd"></path></svg>*/
            <br/>
            : null
        }
        <h3><strong>{body}</strong></h3>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 40 20" width="40" className="mb-30 svg-secondary" src="images/gallery/decor/line-h-1.svg" alt="sep"><path d="m0 8h40v4h-40z" fillRule="evenodd"></path></svg>
    </div>
)

const PUBLIC_ASSETS_PREFIX = "https://s3-eu-west-1.amazonaws.com/kimmo-public-assets/"

const ImageFromPublicAsset = (name, caption) => {
    const src= `${PUBLIC_ASSETS_PREFIX}${name}`
    return (
    <div className="gallery-item gallery-style-5 mb-50 dark padding">
        <a href={src} className="image-popup">
            <img src={src} alt="" className="item-img"/>
        </a>
        <div className="item-title"><p><strong>{caption}</strong></p></div>
        <div className="item-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 16 16" width="16" className="icon svg-default" src="images/gallery/icons/plus.svg" alt=""><path d="m9 7h7v2h-7v7h-2v-7h-7v-2h7v-7h2z" fillRule="evenodd"></path></svg></div>
    </div>)
}

export default class extends React.Component {

    componentDidMount() {
        console.log("Component mounted, running scripts.")
        function appendScriptWithSrc(src) {
            const script = document.createElement("script");
            script.src = src;
            script.async = true;
            document.body.appendChild(script);
        }
        appendScriptWithSrc("/static/js/custom.js")
        appendScriptWithSrc("/static/js/index.js")
    }

    render() {
        return (
            <div>
            <Head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
                <script src="/static/js/jquery-2.1.4.min.js"></script>
                <script src="/static/js/bootstrap.min.js"></script>
                <script src="/static/js/jquery.magnific-popup.min.js"></script>
                <script src="/static/js/jquery.masonryfilter.js"></script>
            </Head>
            <section id="gallery-2col" className="pt-75 pb-75 pt-md-150 pb-md-150 gallery light spr-edit-el spr-oc-show spr-wout">
            <div className="container">
                {title({body: "Wildlife"})}
                <div className="row">
                    <div className="col-12 col-md-6">
                        {ImageFromPublicAsset("20180821-IMG_9232.jpg", "Brown bear, Kuusamo")}
                        {ImageFromPublicAsset("IMG_6869-Edit-2.jpg", "Bumblebee, Hauho")}
                    </div>
                    <div className="col-12 col-md-6">
                        {ImageFromPublicAsset("IMG_7126-Edit-2.jpg", "Peacock, Hauho")}
                    </div>
                </div>
            </div>
            <div className="container">
                {title({body: "Landscapes", withUpperSpace: true})}
                <div className="row">
                    <div className="col-12 col-md-6">
                        {ImageFromPublicAsset("20180705-IMG_6200-Edit-Edit-Edit.jpg", "Mayrhofen, Austria")}
                    </div>
                    <div className="col-12 col-md-6">
                        {ImageFromPublicAsset("20180829-IMG_9945-Edit-Edit.jpg", "Urho Kekkonen National Park, Finland")}
                        {/*{ImageFromPublicAsset("20190121-IMG_2871.jpg", "Roihuvuori, Helsinki")}*/}
                    </div>
                </div>
            </div>
            <div className="bg-wrap">
                <div className="bg"></div>
            </div>
            <div className="modal-container"></div>
            </section>
            </div>
        )
    }
};
