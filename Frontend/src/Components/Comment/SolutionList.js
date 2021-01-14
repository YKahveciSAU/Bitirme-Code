import React,{useEffect,useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import {fetchUserSolutions} from '../../Utils/Api'
import UserComment from './UserComment';
function SolutionList(props) {
    const [solution,setSolution]=useState([]);
    useEffect(()=>{
        setSolution(fetchUserSolutions(props.id));
    },[props.id])
    return (
        <Row>
            {solution.map((Sol,index) => (
                <Col lg="6" style={{padding:"0"}}>
                    <UserComment key={index} {...Sol}/>
                </Col> ))
            }
        </Row>
    )
}

export default SolutionList
