import React, { Component } from 'react';
import HowWeWorkItem from '../section-item/HowWeWorkItem';
import SectionHeader from './SectionHeader';

class HowWeWork extends Component {
    render() {
        return (
            <div className="how-we-work container">
                <div className="row">
                    <SectionHeader info="So funktioniert Lieferando.de" title="So einfach geht es!" />
                </div>
                <div className="row">
                    <HowWeWorkItem arrowIcon={true} step="1" icon="fa-map-marked-alt" title="Gib Deinen Standort an" info="Gib Deine Adresse ein oder lasse uns Deine Position bestimmen." />
                    <HowWeWorkItem arrowIcon={true} step="2" icon="fa-burger-soda" title="Restaurant und Speisen auf Lieferando.de auswählen" info="Was trifft Deinen Geschmack? Klicke Dich durch zahlreiche Menüs und Bewertungen." />
                    <HowWeWorkItem arrowIcon={false} step="3" icon="fa-truck-container" title="Bezahlen und liefern lassen" info="Bezahle bar oder online mit Kreditkarte, Klarna, PayPal, Bitcoin. Guten Appetit!" />
                </div>
            </div>
        );
    }
}

export default HowWeWork;
