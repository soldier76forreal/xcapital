
import { Fragment, useState , useEffect , useRef, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import { useHistory , useLocation , useNavigate, useParams } from "react-router-dom";
import {Pagination,Navbar,Row  , Nav ,NavDropdown , Container ,Form ,FormControl ,Button, Col} from 'react-bootstrap';
import Style from './showPost.module.css';
import PhotoSam from  '../../assets/c.jpg';
import ProfPhoto from  '../../assets/imagePlaceHolder.png';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import DoneIcon from '@mui/icons-material/Done';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LanguageIcon from '@mui/icons-material/Language';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ExpendeableItem from "./expendeableItem";
import MainNav from "../navigationsAndFooters/mainNav";
import CommentBox from "../comment/commentBox";
import PostPriviewModal from "../overalTools/postPriviewModal;";
 
const ShowPost = ()=>{
    const [showPriviewModal , setShowPriviewModal] = useState(false);
    return(
        <Fragment>
            <PostPriviewModal closeModal={()=>{setShowPriviewModal(false)}} showModal={showPriviewModal}></PostPriviewModal>
            <MainNav></MainNav>
            <Container dir="rtl" style={{ maxWidth:'1100px' , marginTop:'40px'}}>
                <Row>
                    <Col xs={12} md={12} lg={4} xl={4} xxl={4}>
                        <div className={Style.riviewSection}>
                            <button className={Style.openList}>
                                <div onClick={()=>{setShowPriviewModal(true)}} className={Style.coverDiv}>
                                    <span className={Style.imageCover}></span>
                                    <img src={PhotoSam}></img>
                                    <div className={Style.playBtn}>
                                        <PlayCircleFilledWhiteIcon sx={{fontSize:'80px' , color:'white' }}></PlayCircleFilledWhiteIcon>
                                    </div>
                                </div>
                            </button>
                            <div className={Style.captionSection}>
                                <h5 className={Style.priceH5}>85,000<span> تومان</span></h5>
                                <div className={Style.buyBtnSection}>
                                    <button>خرید مستقیم</button>
                                    <button style={{backgroundColor:'#e6e6e6' , marginTop:'10px' , color:'#000'}}>خرید مستقیم</button>
                                </div>
                                <div className={Style.briefSection}>
                                    <h4>این آموزش شامل:</h4>
                                    <div className={Style.featureList}>
                                        <ul>
                                            <li>
                                                <div className={Style.featureListItemIcon}>
                                                    <AccessTimeIcon sx={{color:'#e6e6e6' , fontSize:'18px'}}></AccessTimeIcon>
                                                </div>
                                                <div className={Style.courseLength}>
                                                    14 ساعت دوره تخصصی
                                                </div>
                                            </li>
                                            <li>
                                                <div className={Style.featureListItemIcon}>
                                                    <InsertDriveFileIcon sx={{color:'#e6e6e6' , fontSize:'18px'}}></InsertDriveFileIcon>
                                                </div>
                                                <div className={Style.courseLength}>
                                                    4 جزوه آموزشی
                                                </div>
                                            </li>
                                            <li>
                                                <div className={Style.featureListItemIcon}>
                                                    <LanguageIcon sx={{color:'#e6e6e6' , fontSize:'18px'}}></LanguageIcon>
                                                </div>
                                                <div className={Style.courseLength}>
                                                    زبان:فارسی
                                                </div>
                                            </li>
                                            <li>
                                                <div className={Style.featureListItemIcon}>
                                                    <AddModeratorIcon sx={{color:'#e6e6e6' , fontSize:'18px'}}></AddModeratorIcon>
                                                </div>
                                                <div className={Style.courseLength}>
                                                    پشتیبانی همیشگی
                                                </div>
                                            </li>
                                            <li>
                                                <div className={Style.featureListItemIcon}>
                                                    <UpgradeIcon sx={{color:'#e6e6e6' , fontSize:'18px'}}></UpgradeIcon>
                                                </div>
                                                <div className={Style.courseLength}>
                                                    بروزرسانی مستمر
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={8} xl={8} xxl={8}>
                        <div className={Style.titleAndGeneralInfoDiv}>
                            <div className={Style.headerDiv}>
                                <h5>آموزش فروش در املاک از صفر تا 100</h5>
                                <h3>با این آموزش یاد میگیری که چطور فروش رو ممکن کنی و سریع به درامد زایی برسی و اونو افزایش بدی!</h3>
                            </div>
                            <div className={Style.line}></div>
                            <div>
                                <div className={Style.rightSideDiv}>
                                    <div  className={Style.profDiv}>
                                        <img className={Style.profImg} src={`${ProfPhoto}`}></img>
                                        <h4><span>تولید شده توسط : </span>پوریا خرمی</h4>
                                    </div>
                                </div>
                                <div className={Style.leftSideDiv}>

                                    {/* <div style={{display:'inline-block'}}>
                                        <FontAwesomeIcon color='#CE9800' style={{fontSize:'15px'}} icon='star'></FontAwesomeIcon>
                                        <h3 style={langCtx.language === 'english' ?{margin:'0px 0px 0px 5px'}:{margin:'0px 5px 0px 0px'}} className={Style.rateTextStyle}>{langCtx.language === 'english' ?"Product rate":"امتیاز این محصول"} : {langCtx.language === 'english' ?"not rated yet":"امتیازی ثبت نشده"}</h3>
                                    </div> */}
                                
                                    <div style={{display:'inline-block'}}>
                                        {[...Array(5-3)].map((star , i)=>{
                                            return(
                                                <lable>
                                                    <StarBorderIcon  style={{fontSize:'16px' , color:'#f5a821'}} ></StarBorderIcon>
                                                </lable>
                                            )
                                        })}
                                        {[...Array(3)].map((star , i)=>{
                                            return(
                                                <lable>
                                                    <StarIcon  style={{fontSize:'16px' , color:'#f5a821'}} ></StarIcon>
                                                </lable>
                                            )
                                        })}
                                        <h3 style={{margin:'0px 5px 0px 0px'}} className={Style.rateTextStyle}>امتیاز این محصول :<span>0</span></h3>
                                    </div>        
                                    <h3 style={{margin:'0px 3px 0px 3px'}} className={Style.horizonDiv}>|</h3>
                                    <h3 className={Style.commentText}><span>0</span> دیدگاه</h3>
                                </div>
                            </div>
                            <div className={Style.whatWeOfferingDiv}>
                                <h4>چیزایی که یاد میگیرد:</h4>
                                <ul>
                                    <li><div><span><DoneIcon sx={{color:'#000000' , fontSize:'18px'}}></DoneIcon></span>روش های فایل یابی</div></li>
                                    <li><div><span><DoneIcon sx={{color:'#000000' , fontSize:'18px'}}></DoneIcon></span>روش های فایل یابی</div></li>
                                    <li><div><span><DoneIcon sx={{color:'#000000' , fontSize:'18px'}}></DoneIcon></span>روش های فایل یابی</div></li>

                                </ul>
                            </div>
                            <div className={Style.courseContent}>
                               <h4>محتوای آموزش</h4> 
                               <div className={Style.overalCourseInfo}>
                                   <span>15 بخش</span> . <span>130 قسمت</span> . <span>15h 23m طول دوره</span>
                               </div>
                               <div className={Style.lectureDiv}>
                                   <div className={Style.lectureItemsDiv}>
                                       <ExpendeableItem></ExpendeableItem>
                                       <ExpendeableItem></ExpendeableItem>
                                       <ExpendeableItem></ExpendeableItem>
                                   </div>
                                   <div>
                                       <button className={Style.showAllLecture}>نمایش کامل</button>
                                   </div>
                               </div>
                            </div>
                            <div className={Style.postRiview}>
                                <h5>دیدگاه ها</h5>
                                <div className={Style.postRiviewContent}>

                                </div>
                            </div>
                            <div>
                                <CommentBox></CommentBox>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
export default ShowPost;