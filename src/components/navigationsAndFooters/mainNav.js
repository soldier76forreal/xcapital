import { Fragment , useContext , useState  , useEffect , useLayoutEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom';
import {Pagination,Navbar,Row  , Nav ,NavDropdown , Container ,Form ,FormControl ,Button, Col} from 'react-bootstrap';
import Style from './mainNav.module.css';
import { Rotate as Hamburger } from 'hamburger-react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios";

const MainNavPortal = (props) =>{
    return(
        <Fragment>
            <div  className={Style.navDiv}>
                <Navbar className={Style.navBar}  expand="lg">
                    <Container  style={{width:'84%' , margin:'0px'}}>
                        <Navbar.Brand style={{margin:'0px 0px 0px 15px'}} href="#home">XCAPITAL</Navbar.Brand>
                        <Navbar.Toggle  style={{padding:'0px' , border:'none' , marginRight:'20px'}} aria-controls="basic-navbar-nav">
                            <div>
                                <Hamburger  style={{height:'10px !importain'}}  color="rgb(240, 240, 240)" size={29}></Hamburger>
                            </div>
                        </Navbar.Toggle>
                        <Navbar.Collapse dir="rtl" style={{ width:'100%' , margin:'0'  , padding:'0px'}} id="basic-navbar-nav">
                        <Nav dir="rtl" style={{ width:'100%' , justifyContent:'center' , alignContent:'center' , margin:'0px auto 0px auto'}}  className="me-auto my-2 my-lg-0">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <div className={Style.rightSideDiv}>
                        <div className={Style.effeliot}>
                            <buttom>
                                همکاری در فروش
                            </buttom>
                        </div>
                        <div className={Style.searchBtn}>
                            <buttom>
                                <SearchIcon sx={{color:'#fff' , fontSize:'22px'}}></SearchIcon>
                            </buttom>
                        </div>
                        <div className={Style.userBtn}>
                            <buttom>
                                <PersonIcon sx={{color:'#fff' , fontSize:'22px'}}></PersonIcon>
                            </buttom>
                        </div>
                    </div>
                </Navbar>
                <div className={Style.bottomLine}></div>

            </div>
        </Fragment>
    )
}
const MainNav = (props)=>{
    return(
        <Fragment>
            {ReactDom.createPortal(
                <MainNavPortal>

                </MainNavPortal>
                ,
                document.getElementById('headSec')
                )}
        </Fragment>
    )
}
export default MainNav;