
import CardElement from "./card";


// TODO: ADD space between the bikes.

//dummy_data .
const vehicles_obj = [
{
    image:"https://www.carbike360.com/_next/image?url=https%3A%2F%2Fd2uqhpl0gyo7mc.cloudfront.net%2Fmedium_Classic_350_6652b0fa70.jpg&w=1920&q=100",
    available_count:2,
    name:"Royal enfield hunter",
    description:" With Fjord Tours you can explore more of the magical fjord landscapes with tours an activities on and around the fjords of Norway"
},
{   
    image:"https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fproduction%2Ffactory-black-royal-enfield-hunter-350-image.jpeg&w=1024&q=75",
    available_count:4,
    name:"Royal enfield Classic Black",
    description:" With Fjord Tours you can explore more of the magical fjord landscapes with tours an activities on and around the fjords of Norway"
},
{
    image:"https://www.otocapital.in/_next/image?url=https%3A%2F%2Fassets.otocapital.in%2Fproduction%2Frocker-red-royal-enfield-continental-gt-650-image.jpeg&w=1024&q=75",
    available_count:0,
    name:"Royal enfield classic Red",
    description:" With Fjord Tours you can explore more of the magical fjord landscapes with tours an activities on and around the fjords of Norway"
}
]

function CardComponent(){
    return (
        <>
        <div style={{
            textAlign:"center"
        }}>

        <h4 >Inventory Vehicle details</h4>
        </div>

          {
            vehicles_obj.map(vehicle=>{
                return (
                    <div style={{
                        marginBottom:"5px"
                    }}>
                        <CardElement vehicleDetails={vehicle}/>
                    </div>

                )
            })
          }
         </>
       );
}

export default CardComponent