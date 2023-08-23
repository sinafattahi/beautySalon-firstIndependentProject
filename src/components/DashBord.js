import { Player } from 'video-react';

import Navbar from "./NavBar";
import Footer from "./Footer";
import Modal from "./Modal";
import Carousel from "./Carousel";
import { mobileModeData, pcModeData } from "../data/staticPictures";



const DashBord = (props) => {

    const Lines = [
      'عروس',
      'رنگ و لایت',
      'کراتینه',
      'کوتاهی و اصلاح ابرو',
      'بافت',
      'مانیکور',
      'پدیکور و کف‌سابی',
      'آرایش دائم',
      'هایفوتراپی',
      'فیشیال و پاکسازی',
      'تزریق بوتاکس',
      'لیزر موهای زائد'
    ]

    const introP1 = <p>
                به وبسايت آكادمي تخصصي فدرا، یکی از بهترین سالن های زیبایی استان یزد و بهترین سالن زیبایی اردکان خوش آمديد.
                <br />
                اگر به دنبال يك مركز خدمات تخصصي آرايش و زيبايی هستيد، می‌توانيد از يكي از معتبر ترين سالن‌های زيبايی با تجربه‌اي ٤٠ ساله بهره ببريد.
                </p>

    const introP2 = <p>
              مديريت سالن،خانم بهجتی متخصص رنگ،لايت و كراتين‌های تضمينی كه هر ساله با شركت در دوره‌های مختلف به دانش خود می‌افزايند، تيمي مجرب و كاربلد را گرد هم آورده‌اند تا در خدمت شما مشتريان عزيز باشند.
              <br />
              ایشان طی چند دوره به عنوان مدرس در كلاس‌های بازآموزی مديران و مربيان يزد، به اشتراک داشته‌هايشان پرداخته و در تقويت مهارت آن‌ها نقش بسزايی ايفا كرده‌اند.
              <br />
              <br />
              در ادامه لاین‌های تخصصی سالن زیبایی فدرا قرار داده شده‌اند که می‌توانید آن‌ها را مشاهده کرده و نمونه‌های هر یک را بررسی کنید.
              </p>

    return(
      <div>
        <Navbar />
        <Modal/>
        <br/>
        <br/>
        
        <br className="d-none d-lg-block d-xl-block"></br>

        <Carousel 
          mode= 'mobile'
          id= 'carouselExampleAutoplaying1'
          classNameOut = 'd-block d-sm-none mhstyle'
          classNameIn = 'carousel-item mhstyle'
          data = {mobileModeData}
        />
        <Carousel 
          mode= 'mobile'
          id= 'carouselExampleAutoplaying2'
          classNameOut = 'd-none d-md-block d-lg-block d-xl-none thstyle'
          classNameIn = 'carousel-item thstyle'
          data = {pcModeData}
        />
        <Carousel 
          mode= 'pc'
          id= 'carouselExampleAutoplaying3'
          classNameOut = 'd-none d-xl-block d-xxl-block phstyle'
          classNameIn = 'carousel-item  phstyle'
          data = {pcModeData}
        />
        
        {/* devider */}
        <h6 className='d-flex justify-content-center mt-5'>درباره آکادمی تخصصی فدرا</h6>
        <div class="wrapper">
          <div class="divider div-transparent div-arrow-down"></div>
        </div>

        {/* mobile mode */}
        <div className="container row mx-auto d-none d-xl-inline-flex d-xxl-inline-flex">
            <div class="col-7 ml-auto  align-items-center mt-4 mt-md-0">
              {introP1}
              {introP2}
            </div>
          <video loop="true" autoplay="autoplay" controls="controls" id="vid" muted class="col-5" height={"auto"} width={"100%"}>
            <source src="../../media/videos/fedraIntroductionVideo.mp4" type="video/mp4" />
          </video>
          {/* for instant playback */}
          <script>   
            document.getElementById('vid').play();
          </script>
        </div>

        {/* pc mode */}
        <div className="container px-auto mx-auto d-xl-none d-xxl-none">
          <div class=" d-flex align-items-center mt-4 mt-md-0">
            {introP1}
          </div>
          <video loop="true" autoplay="autoplay" controls="controls" id="vid" muted height={"auto"} width={"100%"}>
            <source src="../../media/videos/fedraIntroductionVideo.mp4" type="video/mp4" />
          </video>
          {/* for instant playback */}
          <script>
            document.getElementById('vid').play();
          </script>
          <div class=" d-flex align-items-center mt-4 mt-md-0">
            {introP2}
          </div>      
        </div>

        {/* devider */}
        <h6 className='d-flex justify-content-center mt-5'>لاین های تخصصی</h6>
        <div class="wrapper">
          <div class="divider div-transparent div-arrow-down"></div>
        </div>

        <div className='container lines'>
          <div className='row p-1 m-1 justify-content-center'>
            {Lines.map((l , i) => <div className='btn btn-outline-secondary d-flex justify-content-center align-items-center p-1 col-4 border border-3 rounded-3 m-1 text-center'>{l}</div>)}
          </div>
        </div>

        {/* devider */}
        <h6 className='d-flex justify-content-center mt-5'>پر طرفدار ترین‌ها</h6>
        <div class="wrapper">
          <div class="divider div-transparent div-arrow-down"></div>
        </div>
        



        <Footer />
      </div>     
         
    )
}

export default DashBord;


