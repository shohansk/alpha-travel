import React from 'react';

import {GoogleApiWrapper} from 'google-maps-react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';

 
const Map = () => {
    return (
        <div style={{height:"500px",width:"700px"}}>
            
     <GoogleMapReact
          bootstrapURLKeys={{ key:'AIzaSyA0WJMCMWyQfTlGIwt3tg7qAI7kEw9jmxY'}}
          defaultCenter={ 
              {lat:23.777176,
               lng:	90.399452}
        }
          defaultZoom={10}
        >
     
        
        </GoogleMapReact> 
       
           
        </div>
    );
};

export default Map;