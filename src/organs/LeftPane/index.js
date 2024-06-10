import styled from "styled-components";
import Components from "./Components";
import {Award} from 'react-feather'
import {Link, Navigate, useNavigate} from 'react-router-dom'


const SNavBarMobile = styled.div`
  background: white;
  position: fixed;
  top: 60px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px 13px;
`;

const SMobileBar = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  margin: 8px 0px;

  z-index:1000;
  color:  "black";
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    color: #525252;
  }
`;


function LeftPane(props){

  const {toggle} = props
  const navigate = useNavigate()
  
    return (

      <SNavBarMobile>
          <SMobileBar onClick={()=>{
            navigate("/monthly-report")
            toggle()
          }}>
            <Components title="Monthly Reports" />
        </SMobileBar>

        <SMobileBar onClick={()=>{
            navigate("/daily-report")
            toggle()
            
          }}>
            <Components title="Daily Reports" />
        </SMobileBar>

      </SNavBarMobile>

    );
}

export default LeftPane