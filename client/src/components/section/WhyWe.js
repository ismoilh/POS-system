import React, { Component } from 'react';
import WhyWeItem from '../section-item/WhyWeItem';
import SectionHeader from './SectionHeader';

class WhyWe extends Component {
    render() {
        return (
            <div className="why-we">
                <div className="container">
                    <div className="row">
                        <SectionHeader info="Lieferando.de" title="Deine Zeit." />
                    </div>

                    <div className="row">
                        <WhyWeItem icon="fa-shopping-bag" title="Deine Extras" step={["Unser Prämienshop: jede Menge großartiger Gutscheine und Rabatte", "Sammle Stempel und erfahre mehr über Gewinnspiele, Rabatte, Neuigkeiten und mehr über unsere Newsletter und Sozialen Medien"]} />
                        <WhyWeItem icon="fa-crown" title="Deine Garantie" step={["Exzellenter Service umsonst", "Authentische Nutzerbewertungen", "Preisgarantie : Du bezahlst genauso viel für dein geliefertes Essen, wie wenn Du direkt beim Restaurant bestellst"]} />
                        <WhyWeItem icon="fa-badge-check" title="Deine Vorteile" step={["22.500+ Lieferservices bieten Dir die größte Auswahl an Essen", "Bezahle bar oder bargeldlos", "Bestelle wo und wann Du willst mit jedem Gerät"]} />
                    </div>
                </div>
            </div>
        );
    }
}

export default WhyWe;
