import styled from "styled-components"

const SComponent = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`

// TODO: add more props like icons.
function Components(props){
   return (
    <div style={{
         display:"flex",
         width:"50%",
         justifyContent:"space-evenly",
         alignItems: "center",
         margin:"13px"
    }}>
      <div>{props.title}</div>
    </div>
   );
}

export default Components