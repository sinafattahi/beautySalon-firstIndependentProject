import { Link, useNavigate } from "react-router-dom";
import { linesInfo } from '../data/linesInfo';
import { GoogleLogOut } from './GoogleAuth'


const Navbar = (props) => {

  const navigate = useNavigate();

  const accountHandler = () => {
    navigate('/userAccount',{state:{profile:props.profile,modalData:props.data}});
  }

  const Exit = () => {
    if(localStorage.getItem('userType') === 'googleUser'){
      GoogleLogOut()
    }
    else{
      //LogOut from server
    }

    localStorage.setItem('token','');
    localStorage.setItem('userType','guestUser');
    navigate('/dashbord');
  }

  const lineInfo = linesInfo;
  
    return(
      <div className="fixed-top webModePad bg-light">
        <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
          <div className="w-100">
            <div className="container-fluid px-0 d-flex justify-content-between">
              <div className="d-flex ">
                <div>
                  <button className="navbar-toggler me-1 px-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa-xs"></span>
                  </button>
                  <a className="navbar-brand mx-0">
                    <img src='../../media/img/FEDRA-G-b.png' width="50" height="50" alt="" />
                  </a>
                </div>
                <a className=" a navbar-brand my-auto mx-0 under-356" href="/dashbord">
                  <h4 className="mb-0 d-none d-sm-block">
                    آکادمی تخصصی فدرا
                  </h4>
                  <h6 className="mb-0 d-block d-sm-none">
                    آکادمی تخصصی فدرا
                  </h6>     
                </a> 
              </div>
              <div className="my-auto d-flex flex-row">
                <div className="my-auto">
                  <button type="button" className="btn btn-light ms-2 py-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa fa-search fa-xs py-0" ></i></button>
                  
                  {
                    localStorage.getItem('userType') === 'guestUser' ?
                    <>
                      <Link to= "/logIn" className="btn my-auto ms-2 px-0 py-0" about="logIn"><h6 className="mb-0" style={{fontSize:"10px"}}>ورود</h6></Link>
                      <Link to="/register" className="btn btn-light ms-1 px-2 py-2" about="register"><h6 className="mb-0" style={{fontSize:"10px"}}>ثبت نام</h6></Link>
                    </>
                    :
                    <div className="btn-group" title="حساب کاربری">
                    
                      {
                        props.profile.picture === undefined ? <button className="btn btn-light ms-2 py-1 rounded" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                          <i className="fa fa-user fa-xs" ></i>

                        </button> : <img data-bs-toggle="dropdown" aria-expanded="false" className="ms-2 rounded-circle" style={{width:"30px",height:"30px"}} src={`${props.profile.picture}`} />
                      }
                      
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item text-center" style={{fontSize:"12px"}}>{props.profile.name} {props.profile.familyName}</a></li> 
                        <li><a className="dropdown-item text-center" onClick={accountHandler}>مشاهده حساب کاربری</a></li>
                        <li><a className="dropdown-item text-center" href="#"></a></li>
                        <li><a className="dropdown-item text-center text-danger" onClick={Exit}>خروج</a></li>
                      </ul>
                    </div>
                  }
                </div>
              </div>      
            </div>
          
            <div className="collapse navbar-collapse px-0" id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 px-2">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/dashbord">صفحه اصلی</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    لاین های تخصصی
                  </a>
                  <ul className="dropdown-menu dropdown-menu-left dropdown-menu-left">
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[0].id}`}>{lineInfo[0].l}</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[1].id}`}>{lineInfo[1].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[2].id}`}>{lineInfo[2].l}</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[3].id}`}>{lineInfo[3].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[4].id}`}>{lineInfo[4].l}</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[5].id}`}>{lineInfo[5].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[6].id}`}>{lineInfo[6].l}</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[7].id}`}>{lineInfo[7].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[8].id}`}>{lineInfo[8].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[9].id}`}>{lineInfo[9].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[10].id}`}>{lineInfo[10].l}</a></li>
                    <li><a className="dropdown-item text-center" href={`/lines/:${lineInfo[11].id}`}>{lineInfo[11].l}</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    محصولات
                  </a>
                  <ul className="dropdown-menu dropdown-menu-right">
                    <li><a className="dropdown-item text-center" href="#">آموزش‌ها</a></li>
                    <li><a className="dropdown-item text-center" href="#">محصولات بهداشتی</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">افتخارات مجموعه</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">ارتباط با ما</a>
                </li>
              </ul>
            </div>
          </div>            
      </nav>
    </div>            
    )
}

export default Navbar;