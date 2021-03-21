import React, { useRef, useState } from 'react';
import { Card, Form, Button, ListGroupItem, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// import { InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import locationMP from '../../images/Map.png'
// import Map from '../Map/Map';
// import googleMapReact from 'google-map-react';

const SelectedRide = ({rides}) => {
    
    const {vehicleId}=useParams();
   

    console.log(vehicleId)

    console.log(rides)
    const rideData=rides.filter((ride)=>(vehicleId===ride.vehicleId))
  
    console.log({rideData})
   for (let i = 0; i < rides.length; i++) {
       const ride = rides[i];
       if(ride.vehicleId===vehicleId){
           console.log(vehicleId)
       }
   }
   console.log(vehicleId)
   

    const fromRef = useRef()
    const toRef = useRef()
    const [findLocation, setFindLocation] = useState(false)
   
const [location,setLocation]=useState({
    pickfrom:"",
    pickto:""

})
// const [locationData]=useState(location)
const handleChangeForm=(e)=>{
    let isValidField=true;
    if(e.target.name==="pickfrom"){
        isValidField=e.target.value;
    }
    if(e.target.name==="pickto"){
        isValidField=e.target.value;
    }
    if(isValidField){
        const newLocatin={...findLocation}
        newLocatin[e.target.name]=e.target.value;
        setLocation(newLocatin)

    }
    console.log(location.pickfrom)
    console.log(location.pickto)

}
    const handleForm=()=>{

    }
    return (
        <div className="container  ">
         

            
{
    rides.filter(ride=>ride.vehicleId===vehicleId ).map((ride,index)=>(
        
        <div key={index}>
            <h1>{rideData.title}</h1>
        </div>
    
    ))
}
          
    
    
       
<div className="row d-flex  "  >
{
    findLocation ?

        <Card style={{ "background": "lightgray" }} className="col-md-3 h-25">
           <Form>
           <Card.Body>
               
              
              <Card body className="bg-info mb-4"><h3>{location.pickfrom} </h3><br />
                  <h3>{location.pickto} </h3>
              </Card>

              <ListGroup variant="flush">
                  <Card body className="mb-4">This is some text within a card body.</Card>
                  <Card body className="mb-4">This is some text within a card body.</Card>
                  <Card body className="mb-4">This is some text within a card body.</Card>
              </ListGroup>
          </Card.Body>
           </Form>
        </Card>

        :

        <Card className="col-md-3 h-25"   >
            <Form onSubmit={handleForm}>
            <Card.Body style={{ "background": "gray" }}>
                <Form.Group id="pick-from">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="text" ref={fromRef} name="pickfrom" required onChange={ handleChangeForm}/>
                </Form.Group>
                <Form.Group id="pick-to">
                    <Form.Label>Pick To</Form.Label>
                    <Form.Control type="text" ref={toRef} name="pickto" required onChange={ handleChangeForm}/>
                </Form.Group>
                <Button className="w-100 btn btn-info" onClick={() => setFindLocation(!findLocation)}> Search</Button>


            </Card.Body>
            </Form>
        </Card>
}
<div className="col-md-3 ">
    <img src={locationMP} alt="" />
 {/* //<Map></Map> */}
</div>



</div>
    

                    
                 
    
                    
                    
                    
                 
           


        </div>
    );
};

export default SelectedRide;
