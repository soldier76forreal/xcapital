import {Route , Redirect, Routes, useNavigate , Navigate} from "react-router-dom";
import ShowPost from "./components/referenceRoutes/showPost";
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCheckCircle, faUpload , faTimes , faStar ,faSearch , faPlus , faThumbsUp , faChevronLeft ,faChevronRight ,faExclamationCircle , faSignOutAlt , faFile , faUser  , faComments , faTags , faThumbsDown, faReply , faCaretDown , faQuestion , faCheck , faTimesCircle , faThLarge,  faTrashAlt , faEdit, faBars , faHeadset} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import Main from "./components/referenceRoutes/main";

function App() {
  return (
    <Routes>
          <Route path="/showPost" element={<ShowPost/>}></Route>
          <Route path="/" element={<Main/>}></Route>

    </Routes>
  );
}

export default App;
