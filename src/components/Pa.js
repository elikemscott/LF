import React from 'react';
import image1 from '../Images/image_1.jpeg';
import image2 from '../Images/image_2.jpeg';
import image3 from '../Images/image_3.jpeg';
import image4 from '../Images/image_4.jpeg';
import image5 from '../Images/image_5.jpeg';
import image6 from '../Images/image_6.jpeg';
import image7 from '../Images/image_7.jpeg';
import image8 from '../Images/markus.jpg';
import image9 from '../Images/melinda.jpg';
import image10 from '../Images/scott.jpg';
import image11 from '../Images/cytonn.jpg'

export default function Pa() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7 pa-col"><img className="pa-image" src={image7} height="283" width="424"/></div>
                    <div className="col-12 col-md-5 pa-text">
                        <h4>Cooperate Finance and Securities</h4>
                        <p> Examples of my extensive experience in corporate finance and securities include: <br/> <br/>
      * Equity and debt issues, investment banking, public offering and private placements of securities by local and foreign issuers.<br/> <br/>
      * Due diligence reports for a myriad of prospective investors internationally.<br/> <br/>
      *Advising a leading international financial institution on the relevant American law in the floating of exchangeable bonds on the London Stock Exchange.<br/>
      *Advising clients on floated convertible bonds on the London and New York Stock Exchanges.<br/> <br/>
      * Advising on mergers, reconstructions and restructuring of financial businesses.<br/> <br/>
      * Providing advice on American law in relation to foreign ownership of securities, local market practice governing trading and settlement of securities.<br/> <br/>
      *Advising on gold mining concessions including the raising of capital from a syndicate of lenders from the United Kingdom.<br/> <br/>
      * Advising on legal and regulatory environment and local licensing requirements for the issuance of debt securities in America</p>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-5 pa-text-left investment-mobile-text">
                        <h4>Investment Law</h4>
                        <p>Because of a more realistic and market determined exchange rate, privatisation of state-owned companies,
     liberalisation of trade and relaxation of controls, America’s investment climate is very congenial to both 
     local and foreign investors.I represents investors in obtaining the appropriate licences from the  Investment 
     Promotion Centre  and other governmental agencies I have been instrumental in and has been an industry leader in 
     thesetting up of major investment companies in the areas of:Cellular telecommunications network in America;A major explosives 
     factory;The setting up of a medical laboratory and clinical pathology company; and,The shipping and mercantile business.
     I have also played a leading role in the setting up of other major companies in mining, leasing and finance, security services, 
     construction, television and film production.</p>
                    </div>
                    <div className="col-12 col-md-7 pa-col-right investment-mobile-image"> <img className="pa-image-right" src={image10} height="322" width="480"/> </div>
                </div>
            </div>
            <hr/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7 pa-col"><img className="pa-image" src={image8} height="283" width="424"/></div>
                    <div className="col-12 col-md-5 pa-text">
                        <h4>Taxation</h4>
                        <p>  I have a wide-range of expertise in tax matters and offers advice on tax liabilities, incentives and exemptions for old, 
      new and investing companies.i regularly advise on various tax structures, taking advantage of the fiscal and tax incentives 
      incorporated in the Minerals and Mining Law. </p>
                    </div>
                </div>
            </div> <hr/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 pa-text-left probate-mobile-text">
                        <h4>Administration of Estate and Probate</h4>
                        <p> In addition to providing legal representation and advice in this area of practice, 
    I have legal expertise in matters pertaining to testate and intestate succession.
    My expertise covers drafting of wills, legal representation in court for the grant and resealing of Letters of Administration, 
    Probate, registration of Probate granted outside the jurisdiction and litigation arising therefrom as well as administration of estat</p>
                    </div>
                    <div className="col-md-7 pa-col-right probate-mobile-image"><img className="pa-image-right" src={image9} height="322" width="480"/> </div>
                </div>
            </div> <hr/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 pa-col"><img className="pa-image" src={image11} height="283" width="424"/></div>
                    <div className="col-12 col-md-5 pa-text">
                        <h4>Privitasation and Diversiture</h4>
                        <p> As one of the lawyers  acting as legal consultants to the Divestiture Implementation Committee in America,
       I have assisted in the structuring and accelerated divestiture of Government interest in state-owned enterprises.
       Experience in this area includes conducting legal and corporate due diligence and preparing related reports for the 
       Government to divest its shares in certain state-owned enterprises.I have also acted as legal advisers to several institutional
        investors in the USA, Japan and Malaysia in their bid to purchase Government interest state-owned enterprises engaged in diverse 
        business activities ranging from film production and exhibition to construction, transport and banking.As legal advisers to a UK 
        statutory corporation focused on investment in developing countries, i assisted in structuring financial packages for a glass manufacturing 
        state-owned enterprise when theGovernment divested its interest; the financing and the establishment of Tetrapak facilities and the expansion
        of business activities of two fruit processing companies.</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
