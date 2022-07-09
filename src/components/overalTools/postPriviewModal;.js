import Style from "./postPriviewModal.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment , useState , useEffect , useRef , useContext } from 'react';
import ReactDom from 'react-dom';
import {Navbar  , Nav ,NavDropdown ,Form , ProgressBar ,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../../assets/c.jpg'
import CloseIcon from '@mui/icons-material/Close';
import video from '../../assets/video.mp4'
import VideoImageThumbnail from 'react-video-thumbnail-image'; // use npm published version
const PostPriviewModalPortal =(props)=>{
    const [selected , setSelected] = useState('');

    return(
        
        <Fragment>
                <div dir="rtl" className={props.showModal === true ? `${Style.modalDiv} ${Style.fadeIn}` : props.showModal === false ? `${Style.modalDiv} ${Style.fadeOut}` : null}>
                    <div onClick={props.closeModal} className={props.showModal === true ? `${Style.backDrop} ${Style.fadeIn}` : props.showModal === false ? `${Style.backDrop} ${Style.fadeOut}` : null} dir='rtl' ></div>
                        <div className={props.showModal === true ? `${Style.modalBoarder} ${Style.scaleIn}` : props.showModal === false ? `${Style.modalBoarder} ${Style.scaleOut}` : null} >
                            <div className={Style.closeBtnDiv}>
                                <div className={Style.closeBtn}>
                                    <CloseIcon onClick={props.closeModal} sx={{fontSize:'30px'}}></CloseIcon>
                                </div>
                                <div className={Style.priviewDiv}>
                                    <h3>پیش نمایش</h3>
                                </div>
                            </div>
                            <div className={Style.title}>
                                <h3>آموزش فروش صفر تا صد و در ابعاد مختلف</h3>
                            </div>
                            <div className={Style.mainDiv}>
                                <video controls>
                                    <source  src={video} type="video/mp4"/>
                                </video>
                            </div>
                            <div className={Style.listDiv}>
                                <h3>بخش های رایگان</h3>
                                <ul>
                                    <li>
                                        <div>
                                            <div className={Style.priviewImageDiv}>
                                                <VideoImageThumbnail
                                                    videoUrl={video}
                                                    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                                                    width={60}
                                                   
                                                    className={Style.res}
                                                alt="my test video"
                                                />
                                            </div>
                                            <div className={Style.videoTitleDiv}>
                                                <h4>عنوان اول</h4>
                                            </div>
                                            <div className={Style.timing}>
                                                <h4>3:30</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <div className={Style.priviewImageDiv}>
                                                <VideoImageThumbnail
                                                    videoUrl={video}
                                                    thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                                                    width={60}
                                                   
                                                    className={Style.res}
                                                alt="my test video"
                                                />
                                            </div>
                                            <div className={Style.videoTitleDiv}>
                                                <h4>عنوان اول</h4>
                                            </div>
                                            <div className={Style.timing}>
                                                <h4>3:30</h4>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>                         
                </div>
        </Fragment>
    )
}
const postPriviewModal = (props)=>{

    return(
        <Fragment>
            {ReactDom.createPortal(
                <PostPriviewModalPortal closeModal={props.closeModal}  showModal={props.showModal}></PostPriviewModalPortal>
            ,
            document.getElementById('modal')

            )}

        </Fragment>
    );
}
export default postPriviewModal;
