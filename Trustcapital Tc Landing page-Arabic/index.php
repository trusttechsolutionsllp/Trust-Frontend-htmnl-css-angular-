
<?php 
include_once('../../../geoiploc/geoiploc.php');

$remote_ip=($_SERVER['REMOTE_ADDR']!=""?$_SERVER['REMOTE_ADDR']:$_SERVER['REMOTE_ADDR']);
$cntry=getCountryFromIP($remote_ip, " NamE ");
$cntrycode= getCountryFromIP($remote_ip, "code");

if($cntrycode=='ZZ'){
    
    $json_country_str=file_get_contents("http://ip-api.com/php/$remote_ip");
    $json_country=unserialize($json_country_str);
    //print_r($json_country);
    if($json_country["status"]=="success"){
        $cntry=$json_country["country"];
        $cntrycode=$json_country["countryCode"];
    }
}

$live_quotes_str = file_get_contents('http://trustcapital.co/json_quotes_tc.php');
$categorymapstr = file_get_contents('http://trustcapital.co/gettrusttcsymbollist.php?cat=1');
print_r($categorymaparr);
$liveQutArr = json_decode($live_quotes_str, true);
$categorymaparr = json_decode($categorymapstr, true);
$dispArrFlg=array('EURUSD' => 'eurousd.png','GBPUSD' => 'gbpusd.png','USDJPY' => 'usdjpy.png','USDCHF' => 'usdchf.png','USDCAD' => 'usdcad.png','AUDUSD' => 'audusd.png','NZDUSD' => 'nzdusd.png','EURAUD' => 'euraud.png','EURCAD' => 'eurcad.png','EURCHF' => 'eurchf.png','EURGBP' => 'eurgbp.png','EURJPY' => 'eurjpy.png','EURNZD' => 'eurnzd.png','GBPAUD' => 'gbpaud.png','GBPCAD' => 'gbpcad.png','GBPCHF' => 'gbpchf.png','GBPJPY' => 'gbpjpy.png','AUDCAD' => 'audcad.png','AUDCHF' => 'audchf.png','AUDNZD' => 'audnzd.png','NZDCAD' => 'nzdcad.png','NZDCHF' => 'nzdchf.png','CADCHF' => 'cadchf.png','CADJPY' => 'cadjpy.png','CHFJPY' => 'chfjpy.png','GOLD' => 'gold.png','SILVER' => 'silver.png','NGZ8' => 'ngz8.svg','NATGAS' => 'ngz8.svg','CLZ8' => 'clz8.svg','COFFEE' => 'coffee.svg','SOYBEAN' => 'soybean.png','S&P' => 'sandp.png','NASDAQ' => 'nasdaq.png','DOW' => 'dow.png','SI' => 'si.png','GC' => 'gold.png','COCOA' => 'cocoa.png','AUS' => 'aus.png','DAX' => 'dax.png','BRENT' => 'brent.png','NATGAS' => 'natgas.png','BCHUSD' => 'bchusd.png','BTCUSD' => 'btcusd.png','DSHUSD' => 'dshusd.png','ETHUSD' => 'ethusd.png','LTCUSD' => 'ltcusd.png','XRPUSD' => 'xrpusd.png' );
$dispSymb=array_keys($dispArrFlg);


include_once("../../../topmovers/config_mysqli.php");
$sq1="SELECT * FROM `topmovers` where published=1 order by catid ASC,`order` ASC,id DESC";
$res1=mysqli_query($db_site_link,$sq1);
while($trow=mysqli_fetch_array($res1)){
  $topmovers[$trow["catid"]][]=$trow;
}
?>

<html dir="rtl" lang="ar">
  <head>
    <meta charset="utf-8">
    <meta name=”robots” content=”noindex, follow”>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.101.0">
    <title>Islamic traders</title>
    <link href="./bootstrap-5.2.0/scss/style.css" rel="stylesheet">
    <link rel="stylesheet" href="./css/bootstrap-select-country.min.css">
    <link rel="stylesheet" href="./css/intlTelInput.css">
    <link rel="stylesheet" href="./css/mobile.css">
    <link rel='stylesheet' href="./css/jquery.mCustomScrollbar.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">   
    
  </head>

  <body>
    <div class="fluid_div">
      <div class="banner_outer">
        <div class="container-fluid container-fluid-main">
            <div class="row">
                <header>
                  <div class="col-lg-12 logo_arab">
                     <a href="https://trustcapitaltc.eu/"><img src="./images/Trust Capital TC Logo-03 1.png"></a>
                    <!-- <img src="./images/Trust Capital TC Logo-03 1.png"> -->
                  </div>
                </header>
                <div class="col-lg-6">
                  <h1 class="m20">
                    يمكن للمتداولين فتح
                    <span>حساب تداول دون فوائد</span>
                    على تبييت الصفقات
                  </h1>
                  <div class="break m40">
                    <img src="./images/Line 92.png">
                  </div>
                  <p>
                    تداول جميع المنتجات المالية دون فوا ئد<br>رسوم على تبييت صفقاتك
                  </p>
                </div>
            </div>
        </div>
      </div>

      <!-- Form Start-->
      <section class="form_outer">
        <div class="container-fluid container-fluid-main">
          <div class="row">
            <div class="col-xxl-8 col-xl-10 col-lg-12">
              <div class="form_in">
                <form action="" method="post" id="regform" name="regform">
                  <div class="row">
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>الاسم الكامل *</label>
                        <input type="text" class="form-control fm_inp" name="name" id="name" required="" placeholder="الاسم " onchange="namecheck(this.value)">
                         <span id="name-error"></span> 
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>بلد الإقامة *</label>
                        <select class="selectpicker fm_select" data-flag="true" id="country" name="country"></select>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label>رقم الهاتف *</label>
                        <input id="phone" type="text" class="form-control fm_flag fm_style fm_inp" placeholder="الهاتف  " name="phone" onKeyPress="return isNumberKey(event)">
                             <span id="phone-error"></span>
                      </div>
                    </div>
                    <div class="col-sm-3">
                      <div class="form-group">
                        <label class="email_lbl">البريد الإلكتروني *</label>
                        <input type="email" class="form-control fm_inp" placeholder="البريد الالكتروني " id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
                         <span id="email-error"></span>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group" >
                        <label>هل أنت *</label>
                        <select class="form-control fm_select" name="level" id="level" required>
                          <option value="">حدد مستواك  </option>
                          <option value="Beginner">مبتدئ</option>
                          <option value="Intermediate">متوسط </option>
                          <option value="Advanced">متقدم  </option>                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label> ل قمت بتداول الفوركس أو العقود مقابل الفروقات من قبل؟  </label>
                        <div class="fm_radio">
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="interested" checked>
                            <label class="form-check-label" for="exampleRadios1">
                              نعم
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="notinterested">
                            <label class="form-check-label" for="exampleRadios2">
                              لا
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>  <div class="col-sm-12">
                     <div class="fm_captcha">
                                  <script src='https://www.google.com/recaptcha/api.js'></script>           
 <div class="g-recaptcha" data-callback="verifyCaptcha"  data-sitekey="6Leoge4SAAAAAFlaZM8QW-mmMcpgM0fbkpuhRcOJ"></div>  
                                                  
        <div id="g-recaptcha-error"></div>

                                            </div>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary btn_submit m_t10 btn_arab_fm">
                    سجل
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                      </svg>
                    </span>
                  </button>
                   <span id="succes-msg" class=''></span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid container-fluid-main tab_outer">
          <div class="row">
            <div class="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center">
              <h2 class="m40">
                تعرّف على إمكانيات تداول الفوركس على سلع العقود مقابل الفروقات (CFDs) والمؤشرات والمعادن والعملات المشفرة.
              </h2>
            </div>
            <div class="col-xxl-6 offset-xxl-3 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1 text-center tab_right">
              <div class="tab-in">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">فوركس   </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">المعادن  </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">مؤشرات الأسهم  </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-energies" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">الطاقة  </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-commodities" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">السلع  </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-crypto" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> العملات المشفرة    </button>
                  </li>
                </ul>
                <div class="tab-content tab-content-main" id="pills-tabContent">
                  <div class="tab-pane fade show active longEnough mCustomScrollbar" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Symbol</th>
                          <th scope="col">Bid</th>
                          <th scope="col">Ask</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                           <?php 
                  foreach($liveQutArr as $x => $symbolset){
                    if($x<25) {
                    $color="#FF0000";
                     $dirclass="red";
                     $arrow="arrow_red.png";
                    if($symbolset["dir"]=="up"){
                      $color="#00a54f";
                      $dirclass="green";
                      $arrow="arrow_green.png";
                    }
                    $img="ngz8.svg";
                    if(in_array($symbolset["symbol"],array_keys($dispArrFlg))){
                      $img=$dispArrFlg[$symbolset["symbol"]];
                    }
                    $class_name=str_replace("&","",$symbolset["symbol"]);
                    ?> <tr>
                                                    <td scope="row"><?php echo $symbolset["symbol"];?></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_bid";?>"> <?php echo $symbolset["bid"];?></span></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_ask";?>"> <?php echo $symbolset["ask"];?></span></td>
                                                    <!--<td><span>-0.111% </span></td>-->
                                                  </tr>
                       <?php
                  }
                }
                  ?>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Symbol</th>
                          <th scope="col">Bid</th>
                          <th class="" scope="col">Ask</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                           <?php 
                  $people = array("GOLD", "SILVER", "SI","GC");
                  foreach($liveQutArr as $x => $symbolset){
                        if(in_array($symbolset["symbol"], $people)) {
                    $color="#FF0000";
                     $dirclass="red";
                     $arrow="arrow_red.png";
                    if($symbolset["dir"]=="up"){
                      $color="#00a54f";
                      $dirclass="green";
                      $arrow="arrow_green.png";
                    }
                    $img="ngz8.svg";
                    if(in_array($symbolset["symbol"],array_keys($dispArrFlg))){
                      $img=$dispArrFlg[$symbolset["symbol"]];
                    }
                    $class_name=str_replace("&","",$symbolset["symbol"]);
                    ?> <tr>
                                                    <td scope="row"><?php echo $symbolset["symbol"];?></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_bid";?>"> <img src="./images/<?php echo $arrow?>" id="<?php echo $class_name."_img";?>"><?php echo $symbolset["bid"];?></span></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_ask";?>"> <img src="./images/<?php echo $arrow?>"><?php echo $symbolset["ask"];?></span></td>
                                                    <!--<td><span>-0.111% </span></td>-->
                                                  </tr>
                       <?php
                  }
                }
                  ?>
                      </tbody>
                    </table></div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Symbol</th>
                          <th scope="col">Bid</th>
                          <th class="" scope="col">Ask</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                           <?php 
               $people = array("S&P", "NASDAQ", "DOW","AUS","DAX");
                  foreach($liveQutArr as $x => $symbolset){
                        if(in_array($symbolset["symbol"], $people)) {
                    $color="#FF0000";
                     $dirclass="red";
                     $arrow="arrow_red.png";
                    if($symbolset["dir"]=="up"){
                      $color="#00a54f";
                      $dirclass="green";
                      $arrow="arrow_green.png";
                    }
                    $img="ngz8.svg";
                    if(in_array($symbolset["symbol"],array_keys($dispArrFlg))){
                      $img=$dispArrFlg[$symbolset["symbol"]];
                    }
                    $class_name=str_replace("&","",$symbolset["symbol"]);
                    ?> <tr>
                                                    <td scope="row"><?php echo $symbolset["symbol"];?></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_bid";?>"> <img src="./images/<?php echo $arrow?>" id="<?php echo $class_name."_img";?>"><?php echo $symbolset["bid"];?></span></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_ask";?>"> <img src="./images/<?php echo $arrow?>"><?php echo $symbolset["ask"];?></span></td>
                                                    <!--<td><span>-0.111% </span></td>-->
                                                  </tr>
                       <?php
                  }
                }
                  ?>
                      </tbody>
                    </table></div>
                     <div class="tab-pane fade" id="pills-energies" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Symbol</th>
                          <th scope="col">Bid</th>
                          <th class="" scope="col">Ask</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                           <?php 
              $people = array("CL", "BRENT", "NATGAS");
                  foreach($liveQutArr as $x => $symbolset){
                          if(in_array($symbolset["symbol"], $people)) {
                    $color="#FF0000";
                     $dirclass="red";
                     $arrow="arrow_red.png";
                    if($symbolset["dir"]=="up"){
                      $color="#00a54f";
                      $dirclass="green";
                      $arrow="arrow_green.png";
                    }
                    $img="ngz8.svg";
                    if(in_array($symbolset["symbol"],array_keys($dispArrFlg))){
                      $img=$dispArrFlg[$symbolset["symbol"]];
                    }
                    $class_name=str_replace("&","",$symbolset["symbol"]);
                    ?> <tr>
                                                    <td scope="row"><?php echo $symbolset["symbol"];?></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_bid";?>"> <img src="./images/<?php echo $arrow?>" id="<?php echo $class_name."_img";?>"><?php echo $symbolset["bid"];?></span></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_ask";?>"> <img src="./images/<?php echo $arrow?>"><?php echo $symbolset["ask"];?></span></td>
                                                    <!--<td><span>-0.111% </span></td>-->
                                                  </tr>
                       <?php
                  }
                }
                  ?>
                      </tbody>
                    </table></div>
                     <div class="tab-pane fade" id="pills-commodities" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Symbol</th>
                          <th scope="col">Bid</th>
                          <th class="" scope="col">Ask</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                           <?php 
                $people = array("COFFEE", "COCOA", "SOYBEAN");
                  foreach($liveQutArr as $x => $symbolset){
                        if(in_array($symbolset["symbol"], $people)) {
                    $color="#FF0000";
                     $dirclass="red";
                     $arrow="arrow_red.png";
                    if($symbolset["dir"]=="up"){
                      $color="#00a54f";
                      $dirclass="green";
                      $arrow="arrow_green.png";
                    }
                    $img="ngz8.svg";
                    if(in_array($symbolset["symbol"],array_keys($dispArrFlg))){
                      $img=$dispArrFlg[$symbolset["symbol"]];
                    }
                    $class_name=str_replace("&","",$symbolset["symbol"]);
                    ?> <tr>
                                                    <td scope="row"><?php echo $symbolset["symbol"];?></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_bid";?>"> <img src="./images/<?php echo $arrow?>" id="<?php echo $class_name."_img";?>"><?php echo $symbolset["bid"];?></span></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_ask";?>"> <img src="./images/<?php echo $arrow?>"><?php echo $symbolset["ask"];?></span></td>
                                                    <!--<td><span>-0.111% </span></td>-->
                                                  </tr>
                       <?php
                  }
                }
                  ?>
                      </tbody>
                    </table></div>
                     <div class="tab-pane fade" id="pills-crypto" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0"><table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Symbol</th>
                          <th scope="col">Bid</th>
                          <th class="" scope="col">Ask</th>
                        </tr>
                      </thead>
                      <tbody>
                       
                           <?php 
                           foreach($liveQutArr as $x => $symbolset){
                    if($x>39) {
                    $color="#FF0000";
                     $dirclass="red";
                     $arrow="arrow_red.png";
                    if($symbolset["dir"]=="up"){
                      $color="#00a54f";
                      $dirclass="green";
                      $arrow="arrow_green.png";
                    }
                    $img="ngz8.svg";
                    if(in_array($symbolset["symbol"],array_keys($dispArrFlg))){
                      $img=$dispArrFlg[$symbolset["symbol"]];
                    }
                    $class_name=str_replace("&","",$symbolset["symbol"]);
                    ?> <tr>
                                                    <td scope="row"><?php echo $symbolset["symbol"];?></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_bid";?>"> <img src="./images/<?php echo $arrow?>" id="<?php echo $class_name."_img";?>"><?php echo $symbolset["bid"];?></span></td>
                                                    <td><span class="<?php echo $dirclass;?>  <?php echo $class_name."_ask";?>"> <img src="./images/<?php echo $arrow?>"><?php echo $symbolset["ask"];?></span></td>
                                                    <!--<td><span>-0.111% </span></td>-->
                                                  </tr>
                       <?php
                  }
                }
                  ?>
                      </tbody>
                    </table></div>
                </div>
              </div>
            </div>
          </div>
        </div>
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Form End-->

      <!-- Why to choose Trust capital? Start-->
      <section class="ch_outer">
        <div class="container-fluid container-fluid-main">
          <div class="row">
            <div class="col-xl-7 col-lg-9 m100">
              <h2 class="m50">لمائا تختار تراست كابيتال ؟</h2>
              <div class="row">
                <div class="col-md-4">
                  <div class="ch_in">
                    <img src="./images/Swap-free-Accounts.png">
                    <h3 class="m10 m_t20">حسابات بدون فوائد</h3>
                    <p>حماية الرصيد السلبي حتى لا ينخفض حسابك دون رأس مالك مُطلقًا</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ch_in">
                    <img src="./images/Faster-deposit.png">
                    <h3 class="m10 m_t20" style="color:#1E68F6">سرعة الإيداع والسحب</h3>
                    <p>يمكنك إتمام عملية الإيداع بسهولة من خلال التحويل المصرفي والعملات المشفرة وبطاقات الائتمان/ الخصم وباي بال ونتلر وسكريل.</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ch_in">
                    <img src="./images/Negative-Balance-Protection.png">
                    <h3 class="m10 m_t20" style="color:#8B05A0;">حماية الرصيد السلبي</h3>
                    <p>حماية الرصيد السلبي حتى لا ينخفض حسابك دون رأس مالك مُطلقًا
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ch_in">
                    <img src="./images/Regulated-by-CySEC.png">
                    <h3 class="m10 m_t20" style="color: #0CCC68;">مرخصة من</h3>
                    <p>يثق بها المتداولون حيث أنها مرخصة من قِبل لجنة الأوراق المالية والبورصات القبرصية (CySEC).</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ch_in">
                    <img src="./images/Forex-Mentor.png">
                    <h3 class="m10 m_t20" style="color: #E30278;">مُعلّم الفوركس</h3>
                    <p>سيرشدك المتداولون والخبراء المحترفون لدينا خلال رحلة تداولك</p>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="ch_in">
                    <img src="./images/Forex-Sessions.png">
                    <h3 class="m10 m_t20" style="color: #1AC2C3;">جلسات الفوركس</h3>
                    <p>ندوات وحلقات دراسية مجانية عبر الإنترنت حول مجموعة متنوعة من موضوعات الفوركس لجميع مستويات المتداولين.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Why to choose Trust capital? End-->

      <!-- Contact with us Start-->
      <section class="contact_outer">
        <div class="container">
          <div class="row">
            <h2 class="m50 m_t0 text-center">تواصل معنا</h2>
            <div class="col-lg-4 col-md-4">
              <div class="bg_contact">
                <h3 class="m10 m_t0">خدمة العملاء متعددة اللغات</h3>
                <p class="m25 break_2">إن فريقنا المتخصص من خبراء الفوركس وخدمة العملاء متاح دائمًا لتزويدك بالدعم الذي تحتاجه.</p>
                <h4>الخدمات المتاحة</h4>
                <p class="break_2">الخدمة متاحة من الساعة 9 صباحًا وحتى الساعة 11 مساءً ( توقيت جرينتش+3) - من الاثنين إلى الجمعة.</p>
                <h4>الهاتف</h4>
                 <a href="tel:+971 45785767" style="text-decoration: none;"> <p style="direction: initial;text-align: right;">+971 45785767</p></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="bg_contact">
                <h3 class="m10 m_t0">الدردشة الحية</h3>
                <p class="m25 break_2">ارسل لنا رسالة عبر الدردشة الحية، وستتلقى ردًا من أحد مندوبي خدمة العملاء في أقرب وقت ممكن.</p>
                <h4>متاح</h4>
                 <a href="#" id="hf-chat" style="text-decoration: none;"> <p>24/5</p></a>
              </div>
            </div>
            <div class="col-lg-4 col-md-4">
              <div class="bg_contact">
                <h3 class="m10 m_t0">البريد الإلكتروني</h3>
                <p class="m25 break_2">ارسل لنا بريدًا إلكترونيًا، وسيجيب أحد ممثلينا على أسئلتك بالكامل.</p>
                <h4>البريد الإلكتروني</h4>
                  <a href="mailto:info@trustcapitaltc.eu" style="text-decoration: none;"> <p>info@trustcapitaltc.eu</p></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Contact with us End-->

      <!-- Footer Start-->
      <section class="footer_outer">
        <div class="container-fluid container-fluid-main">
          <div class="row break_3">
              <div class="col-lg-10">
                <div class="row">
                  <div class="col-md-3">
                    <h3 class="m20">Accounts</h3>
                    <ul>
                      <li><a href="../../../account-types">Account Types</a></li>
                      <li><a href="../../../live-account">Open Account</a></li>
                      <li><a href="../../../deposit-withdrawal">Deposit and withdrawal</a></li>
                      <li><a href="../../../forex-demo-account">Demo Account</a></li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <h3 class="m20">Trading Products</h3>
                    <ul>
                      <li><a href="../../../spot-forex">Spot Forex</a></li>
                      <li><a href="../../../spot-metals">Spot Metals</a></li>
                      <li><a href="../../../cfd-commodity">CFD Commodities</a></li>
                      <li><a href="../../../cfd-indices">CFD Indices</a></li>
                      <li><a href="../../../cfd-energy">CFD Energy</a></li>
                      <li><a href="../../../cfd-cryptocurrency">CFD Crypto Currency</a></li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <h3 class="m20">Education</h3>
                    <ul>
                      <li><a href="../../../market-news">Market News</a></li>
                      <li><a href="../../../calculator">Calculator</a></li>
                      <li><a href="../../../web-mobile-platform">Meta-Trader 4 Platform</a></li>
                      <li><a href="../../../economic-calendar">Economic Calender</a></li>
                      <li><a href="../../../financial-glossary">Financial Glossary</a></li>
                    </ul>
                  </div>
                  <div class="col-md-3">
                    <h3 class="m20">About Us</h3>
                    <ul>
                      <li><a href="../../../about-us">Why Trust Capital TC</a></li>
                      <li><a href="../../../meet-our-team">Meet our Team</a></li>
                      <li><a href="../../../regulation">Regulation</a></li>
                      <li><a href="../../../legal-documentation">Legal Documentation</a></li>
                      <li><a href="../../../company-news">Company News</a></li>
                      <li><a href="../../../contact-us">Contact Us</a></li>
                      <li><a href="../../../faq">FAQ</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2">
                  <h3 class="m20">Partnership</h3>
                  <ul>
                    <li><a href="../../../affiliate">Affiliate</a></li>
                  </ul>
              </div>
          </div>
          <div class="row">
            <div class="col-lg-8 offset-lg-2 text-center">
              <div class="row m_t50">
                <div class="col-lg-3 col-md-3 footer_logo">
                  <!-- <img src="./images/footer_logo.png"> -->
                    <a href="https://trustcapitaltc.eu/"><img src="./images/footer_logo.png"></a>
                </div>
                <div class="col-lg-4 col-md-4">
                    <div class="sm_outer">
                      <span><a href="https://www.facebook.com/TrustCapitalTCltd/"><img src="./images/Facebook.png"></a></span>
                      <span><a href="https://twitter.com/TrustCapitalTC1"><img src="./images/Twitter.png"></a></span>
                      <span><a href="https://www.linkedin.com/company/trust-capital-tc/"><img src="./images/LinkedIn.png"></a></span>
                      <span><a href="https://www.instagram.com/trustcapitaltc/"><img src="./images/instagram.png"></a></span>
                      <span><a href="https://www.youtube.com/channel/UCAyRdSL2mTd_oGuL9tMbqgA"><img src="./images/youtube.png"></a></span>
                    </div>
                </div>
                <div class="col-lg-5 col-md-5">
                  <div class="app_link m_t22">
                    <span>
                      <a href="https://trustcapitaltc.eu/demo/trustcapitaltc.exe">
                        <img src="./images/windows.png">
                        windows
                      </a>
                    </span>
                    <span>
                      <a href="https://apps.apple.com/app/id496212596">
                        <img src="./images/apple.png">
                        Apple iOS
                      </a>
                    </span>
                    <span>
                      <a href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader4&hl=en">
                        <img src="./images/android.png">
                        Android
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 offset-lg-3 copy_r m_t30">
              <p>
                Risk Disclosure: 82.61% of retail investor accounts lose money when trading CFDs with this provider. 
                You should consider whether you can afford to take the high risk of losing your money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Footer End-->
    </div>
     <?php include "../../../modules/chat.php";?> 
  </body>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" 
  integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" 
  integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="./js/bootstrap-select-country.min.js" type="text/javascript"></script>
  <script src="./js/intlTelInput.js"></script>
	  <script>
		$("#phone").intlTelInput({
		  // allowDropdown: false,
		  // autoHideDialCode: false,
		  // autoPlaceholder: "off",
		  // dropdownContainer: "body",
		  // excludeCountries: ["us"],
		  // formatOnDisplay: false,
		  // geoIpLookup: function(callback) {
		  //   $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
		  //     var countryCode = (resp && resp.country) ? resp.country : "";
		  //     callback(countryCode);
		  //   });
		  // },
		  // hiddenInput: "full_number",
		  // initialCountry: "auto",
		  // nationalMode: false,
		  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		  // placeholderNumberType: "MOBILE",
		  // preferredCountries: ['cn', 'jp'],
		  // separateDialCode: true,
		  utilsScript: "build/js/utils.js"
		});
	  </script>
    <script>
        (function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);
    </script>
    <script src="./js/jquery.mCustomScrollbar.concat.min.js"></script>
      
    <script type="text/javascript">
                $('#email').on('change', function() {
 var email= this.value;
   var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    $("#email-error").html('البريد ا غير صحيح ');
    $('#email-error').css('color','red');
    $('.btn_arab_fm').attr('disabled', true);
    //return false;
  }else{
    //return true;
    $("#email-error").html('');
          $('.btn_arab_fm').attr('disabled', false);
  }

});
              </script>


<script type="text/javascript">
  $(document).ready(function() {
  $("input[type=number]").addClass('inputnumber');
  $("input[type=number]").on("focus", function() {
    $(this).on("keydown", function(event) {
      if (event.keyCode === 38 || event.keyCode === 40 || event.keyCode === 69) {
        event.preventDefault();
      }
    });
    $(this).on("mousewheel", function(event) {
      event.preventDefault();
    });
  });
});
</script>
<!-- <script src="scripts/intlTelInput.js"></script> -->
   

 <script src="../../../tcaccount/js/intlTelInput.js"></script>
 <script>
var iti;
var countrycode='<?php echo $cntrycode;?>';
var telInput = document.querySelector("#phone");;
var telhidInput = $("#hidphone");
var countryname = document.querySelector("#country");
var countryData = window.intlTelInputGlobals.getCountryData(),
  input = document.querySelector("#phone"),
  addressDropdown = document.querySelector("#country");

</script>

<script type="text/javascript">

$( document ).ready(function() {
 
var telInput = document.querySelector("#phone");
var telhidInput = $("#mobno");
iti=window.intlTelInput(telInput,{
initialCountry: "auto",

  geoIpLookup: function(callback) {
    /*$.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {*/
      var countryCode = countrycode;
      callback(countryCode);
   /* });*/
  },
  /*autoHideDialCode:true,*/
  autoFormat:false,
  utilsScript: "../../../tcaccount/js/phone/utils.js" // just for formatting/placeholders etc
});
for (var i = 0; i < countryData.length; i++) {
  var country = countryData[i];
  var optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  var textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}
// set it's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', function(e) {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
   $("#phone").trigger("change");
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', function() {
  iti.setCountry(this.value);
  $("#phone").trigger("change");
});

 
});


</script>
 

                <script>
        
$('#phone').bind('input propertychange', function() {

     $("#phone-error").html('');
            
            if (iti.isValidNumber()) {
                            var newnum = iti.getNumber();
                            newnum = newnum.replace("+", "");
                            telhidInput.val(newnum);
                            $("#phone-error").html('');
                            $('.btn_arab_fm').attr('disabled', false);
                            
                            return true;
                        } else {
                            if($('#phone').val()!=""){
                                $("#phone-error").html('رقم الهاتف غير صحيح ');
                
                 $('#phone-error').css('color','red');
              }
              
                            $('.btn_arab_fm').attr('disabled', true);
                            return false;
                        }

                    });

$('#phone').bind('change', function() {
            
              $("#phone-error").html('');

                        if (iti.isValidNumber()) {
                            var newnum = iti.getNumber();
                            newnum = newnum.replace("+", "");
                            telhidInput.val(newnum);
                            $("#phone-error").html('');
              $('.btn_arab_fm').attr('disabled', false);
                            
                            return true;
                        } else {
                            if($('#phone').val()!=""){
                $("#phone-error").html('رقم الهاتف غير صحيح ');
                
                 $('#phone-error').css('color','red');
              }
              
                            $('.btn_arab_fm').attr('disabled', true);
                            return false;
                        }

                    });

      </script>

<script type="text/javascript">
    

$(document).ready(function()

{

    $("#regform").submit(function(e)

    {

//$('.btn_arab_fm').attr('disabled', true);
        e.preventDefault();
   var data = $("#regform").serialize()
   var name=$("#name").val();
if(isEmptyOrSpaces(name)){
     $("#name-error").html('يرجى ادخال الاسم بطريقة صحيحة  ');
    $('#name-error').css('color','red');
}
else{
  $('.btn_arab_fm').attr('disabled', true);
  $("#name-error").html('');
  //alert(data);
$.ajax({

         type: 'post',
              url: 'ajax-register.php',
              data: data, // I WANT TO ADD EXTRA DATA + SERIALIZE DATA

         success: function(msg){
//alert('Thanks for Signing up!Your request has been successfully sent');
 $("#succes-msg").fadeIn();  
$('#succes-msg').html("شكرا لتسجيلك! لقد تم إرسال طلبك بنجاح. ");
$('#succes-msg').css('color','green');
  $("#succes-msg").fadeOut(10000);  
$("#g-recaptcha-error").html('');
  grecaptcha.reset();  
$('#regform').trigger("reset");
$('.btn_arab_fm').attr('disabled', false);
           

        }

      });

}
  });

}) ;

</script>
<script type="text/javascript">
    function verifyCaptcha() {
          document.getElementById('g-recaptcha-error').innerHTML = '';
      }

function verifyCaptcha1() {
          document.getElementById('g-recaptcha-error1').innerHTML = '';
      }

</script>

<script>

$(document).ready(function() { 
get_current_price();
});
//var upImage='greenup.png';
//var downImage='reddwn.png';
var upColor='#00a54f';
var downColor='#FF0000';
var upImageTop='upmoves.png';
var downImageTop='downmoves.png';
var itmImg='';
var colorVal='';
  function get_current_price(){



    var url= "../../../ajax_actions1.php";

    $.ajax({
    type: "GET", 
    url: url,

    data: "action=live_quote",

    success: function(data) {

    var live_quotes = JSON.parse(data);

    
      
    $.each(live_quotes, function(i, item) {

  if(item.dir=='up'){
    itmImg=upImageTop;
    colorVal=upColor;

    color="#00a54f";
    dirclass="../images/green";
    arrow="arrow_green.png";
  }else{
    itmImg=downImageTop;
    colorVal=downColor;
    colorVal=upColor;

     color="#FF0000";
     dirclass="../images/red";
     arrow="arrow_red.png";
  }

  itmImg=(item.dir=='up') ? upImageTop : downImageTop;
  $clspart=item.symbol.replace("&","");
   
  $('.'+$clspart+'_bid').html(item.bid);
  $('.'+$clspart+'_ask').html(item.ask);
  $('.'+$clspart+'_bid').addClass(dirclass);
  $('.'+$clspart+'_ask').addClass(dirclass);
  $('#'+$clspart+'_img').attr('src',arrow);
  $('.'+$clspart+'_topmvr span.currency-value').html(item.bid);
  $('.'+$clspart+'_topmvr span.currency-value').css("color", colorVal);
  $('.'+$clspart+'_topmvico span').html(item.bid);
  $('.'+$clspart+'_topmvico img').attr("src","images/"+itmImg);
})
    


      get_current_price();
}

    });


  }

function bin2hex(s){  
    // Converts the binary representation of data to hex    
    //   
    // version: 812.316  
    // discuss at: http://phpjs.org/functions/bin2hex  
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)  
    // +   bugfixed by: Onno Marsman  
    // +   bugfixed by: Linuxworld  
    // *     example 1: bin2hex('Kev');  
    // *     returns 1: '4b6576'  
    // *     example 2: bin2hex(String.fromCharCode(0x00));  
    // *     returns 2: '00'  
    var v,i, f = 0, a = [];  
    s += '';  
    f = s.length;  
      
    for (i = 0; i<f; i++) {  
        a[i] = s.charCodeAt(i).toString(16).replace(/^([\da-f])$/,"0$1");  
    }  
      
    return a.join('');  
} 
</script>
<script>
        (function($){
        $(window).on("load",function(){
            $(".content").mCustomScrollbar();
        });
    })(jQuery);


    function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}

function isNumberKey(evt)
  {
   var charCode = (evt.which) ? evt.which : event.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

   return true;
  }
    </script>
    <script src="./js/jquery.mCustomScrollbar.concat.min.js"></script>
<?php
function getSymbolCategoryid($categorymaparr,$symbol){
  $category_arr=array("1"=>"Currencies","2"=>"Metals","3"=>"Energies","4"=>"Indices","5"=>"Commodities","6"=>"CrCurrencies");
  $categoryname=$categorymaparr[$symbol];
   
   return strtolower($categoryname);
}
?>
  </html>

<script>
$("#hf-chat").on("click",function(){    
//alert(1);  
   var __lc = {};
   __lc.license = 13290684;

     LiveChatWidget.call("maximize");
  });

function namecheck(name) {
  var name_regex = /^[a-zA-Z]+$/;
if(isEmptyOrSpaces(name)){
     $("#name-error").html('يرجى ادخال الاسم بطريقة صحيحة ');
    $('#name-error').css('color','red');
}
else if (!name.match(name_regex) || name.length == 0) {
  $("#name-error").html('يرجى ادخال الاسم بطريقة صحيحة ');
    $('#name-error').css('color','red');
$("#name").focus();

}
else {
  $("#name-error").html('');
    
}
}
  </script>
  </html>