import React, { Component } from 'react';

class OurApp extends Component {
    render() {
        return (
            <div className="our-app">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="our-app-left">
                                <div>
                                    <h4>Die Lieferando.de App herunterladen</h4>
                                </div>
                                <div>
                                    <h4>immer und überall bestellen!</h4>
                                </div>
                                <div className="apps-store">
                                    <img src="https://ilmihaloku.com/static/media/storebutton.dffd25fb.svg" alt="our app" />
                                    <img src="https://akademikhijyen.com.tr/wp-content/uploads/revslider/slider-1/Download-On-The-App-Store-PNG-Image.png" alt="our app" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="our-app-right">
                                <img src="https://mypizza-assets-production.imgix.net/mobile-devices.png" alt="our app" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OurApp;
