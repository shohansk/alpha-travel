import React from 'react';
import { Card} from 'react-bootstrap';
import  {Link} from 'react-router-dom';
import { useHistory } from 'react-router';
import SelectedRide from '../SelectedRide/SelectedRide';

const Rides = ({rides}) => {
    //    const history=useHistory()
    //    const handleSelectedRide=(vehicleId)=>{
    //     history.push(/selectedride/${vehicleId})
    //     console.log(ride.title)
    //    }
    // const { vehicleId, imgUrl, title } = props.ride;
    return (

        <>

<div className="row">
    <div className="cal-md-3 d-flex">
    {
    rides.map((ride,index)=>
        <Card className='col-md-3 my-3' key={index}>
        <Link to={`/selectedride/${ride.vehicleId}` }>
            <Card.Img variant="top" src={ride.imgUrl} fluid />
        </Link>

        <Card.Body>
            <div className="text-center">



                <Link to={`/selectedride/${ride.vehicleId}`}>
                    <Card.Title>{ride.title}</Card.Title>
                </Link>
            </div>
        </Card.Body>
    </Card>
    
    )
}

    </div>
</div>



            {/*        
     
        <Card onClick={()=>handleSelectedRide(ride.vehicleId)}  className='btn'>
             <Card.Img variant="top" src={ride.imgUrl} fluid />
             <Card.Body>
                 <div className="text-center">
                     <Card.Title>{ride.title}</Card.Title>
        
                     <Card.Text></Card.Text>
                    
                 </div>
             </Card.Body>
         </Card>  
      */}




           



        </>

    );
};

export default Rides;