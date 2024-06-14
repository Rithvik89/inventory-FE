import CardComponent from "./cardComponent"


function VehicleScreen(){
    return (
       <div style={{
        marginTop:"70px",
        marginLeft:"7px",
        marginRight:"7px",
        marginBottom:"65px",
        display:"flex",
        flexDirection: "column",
        justifyContent:"center",
      }}>
        <CardComponent/>
       </div>
    )
}

export default VehicleScreen