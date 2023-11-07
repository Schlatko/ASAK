import React from "react";
import Loader from "../../../components/Loader/Loader";


const spritzdetail = () => (
  <Loader>
  
   

    <section className="pb-0 pt-20 dark-bg">
      <div className="container">
      <blockquote className="blockquote blockquote-custom">
        <div className="row mt-50">
          <div className="col-md-12 col-sm-12">
         
            <h3>Alle Details auf einen Blick</h3>
            
         
          </div>
          
        </div>
        <table className="customers">
        <tr>
    <th>Information</th>
    <th>Detail</th>
    
  </tr>
          <tr>
    <td>Abmessung / Werkzeug</td>
    <td>340x340mm Aufspannfläche</td>
   
  </tr>
  <tr>
    <td>Teilegewicht</td>
    <td>Varriiert je nach Werkstoff und Bauteilgeometrie</td>
   
  </tr>
  <tr>
    <td>Materialien</td>
    <td>POM, PUR, PC, PMMA, PE, ABS, uvm.</td>
   
  </tr>
  <tr>
    <td>Maschinentyp</td>
    <td>Arburg</td>
   
  </tr>
  <tr>
    <td>Losgrößen</td>
    <td>Klein und Großstückzahlen. Fragen Sie einfach an.</td>
   
  </tr>
  <tr>
    <td>Ihre Vorteile</td>
    <td> breites Anwendungsgebiet und ErfahrungTest</td>
   
  </tr>
  
  
  
  
  </table>
        </blockquote>
      </div>
    </section>
    <section className="pt-20">
      <div className="container">
        <div className="row mt-50">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="widget-list">
                  <ul>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>
                      List Item
                      <ul>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ul>
                    </li>
                    <li>List Item</li>
                    <li>List Item</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6">
                <div className="widget-list">
                  <ol>
                    <li>List Item</li>
                    <li>List Item</li>
                    <li>
                      List Item
                      <ol>
                        <li>List Item</li>
                        <li>List Item</li>
                      </ol>
                    </li>
                    <li>List Item</li>
                    <li>List Item</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  </Loader>
);

export default spritzdetail;
