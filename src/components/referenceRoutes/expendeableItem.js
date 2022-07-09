import Style from './expendeableItem.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useState } from 'react';

const ExpendeableItem = () =>{
    const [openExpendList , setOpenExpendList] = useState(false)
    const listToggler = ()=>{
        if(openExpendList === true){
            setOpenExpendList(false);
        }else if(openExpendList === false){
            setOpenExpendList(true);
        }
    }
    return(
    <div>                 
        <div onClick={listToggler} className={Style.btnExpandTextDiv}>
                <div  className={openExpendList===true?`${Style.lectureExpend} , ${Style.rotateOut}`: `${Style.lectureExpend} , ${Style.rotateIn}`}>
                    <KeyboardArrowDownIcon sx={{color:'#000000'}}></KeyboardArrowDownIcon>
                </div>
                <div className={Style.lectureTitle}>
                    توضیحات مقدماتی و روز اول وشروغ
                </div>
                <div className={Style.lectureInfo}>
                    <span>12 قسمت</span> . <span>1 ساعت و 12 دقیقه</span>
                </div>
        </div>
        
        {openExpendList === true ?
            <div className={Style.lectureExpendedListDiv}>
                <ul>
                    <li>
                        <div className={Style.expendedItemDiv}>
                            <div className={Style.expandexIcon}>
                                <PlayCircleIcon sx={{color:'#e6e6e6' , fontSize:'20px'}}></PlayCircleIcon>
                            </div>
                            <div className={Style.expandexTitle}>
                                توضیحات مقدماتی و روز اول وشروغ 
                            </div>
                            <div className={Style.expandexTime}>
                                05:15
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        :
         null
        }

    </div>
    )
}
export default ExpendeableItem;