<template>
  <div class="footerWrap">

    <div class="question">
      <img class="contactIco" src="../../assets/images/contact_ico.svg" alt="">

      <p class="tit">프로젝트의 A to Z</p>
      <p class="tit">고객과 함께 고민합니다</p>

      <div class="whiteBtn">
        <span>문의하기</span>
      </div>
    </div>
    <!-- question End -->

    <div class="menuWrap w1440px">
      <p class="logo">TEXTNET</p>
      <ul class="menu">
        <li>
          <p class="menuTit">Vision</p>
          <p class="menuCont">Investor AI</p>
          <p class="menuCont">History</p>
          <p class="menuCont">Contact</p>
        </li>
        
        <li>
          <p class="menuTit">서비스</p>
          <p class="menuCont">AI 대화설계</p>
          <p class="menuCont">언어자원구축</p>
          <p class="menuCont">데이터레이블링</p>
        </li>

        <li>
          <p class="menuTit">채용</p>
          <p class="menuCont">챗봇구축개발</p>
          <p class="menuCont">연구개발직</p>
          <p class="menuCont">영업개발</p>
        </li>

        <li>
          <p class="menuTit">팀문화</p>
          <p class="menuCont">이렇게 일해요</p>
          <p class="menuCont">지원제도</p>
          <p class="menuCont">일상 엿보기</p>
        </li>

        <li>
          <p class="menuTit">자료실</p>
          <p class="menuCont">참여프로젝트</p>
          <p class="menuCont">Press</p>
          <p class="menuCont">AI 트렌드</p>
          <p class="menuCont">Firescout</p>
        </li>

      </ul>
    </div>
    <!-- menuWrap End -->

    <!-- <div class="newsWrap w1440px">
      <div class="newsTit">
        <p class="tit">Newsletter</p>
        <p class="sub">뉴스레터를 구독하세요.</p>
      </div>

      <div class="newsInput">
        <input type="text">
        <div class="checked">
          <input type="checkbox">
          <p class="agree">만 14세 이상임을 확인하고, 개인정보 수집 및 이용에 동의합니다.</p>
        </div>
      </div>

      <ul class="sns">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
    newsWrap End -->

    <div class="licenseWrap w1440px">
      <div class="liTop">
        <div class="licenseInfo">
          <p class="licenseCont">(주)스피링크ㅣ서울시 용산구 한강대로 788 솔로시티 ㅣ 사업자등록번호: 123-45-67899
          ⓒ 2022 Textnet Inc.</p>
          <p class="licenseCont">ⓒ 2022 Textnet Inc.</p>
        </div>
        <p class="licenseDoc">개인정보처리방침 | 내부정보관리규정</p>
      </div>

      <!-- <ul class="family">
        <li>
          Family Sites
        </li>
        <li>
          <img class="familyLogo" src="../../assets/images/family1.png">
        </li>
        <li>
          <img class="familyLogo" src="../../assets/images/family2.png">
        </li>
        <li>
          <img class="familyLogo" src="../../assets/images/family3.png">
        </li>
        
      </ul> -->
    </div>
    <!-- licenseWrap End -->
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .footerWrap {width: 100%; padding: 110px 0 0; background-color:#335fe8; color:#fff;}

  .footerWrap .question {text-align: center; border-bottom: 1px solid rgba(12, 37, 75, 0.2);}
  .footerWrap .question .contactIco {margin:0 0 10px;}
  .footerWrap .question .tit {font-size: 44px; font-weight: 500; line-height: 58px;}
  .footerWrap .question .whiteBtn {margin: 60px auto 154px; width: 280px; height: 70px; padding:0 40px; border-radius: 50px; background-color: #fff;}
  .footerWrap .question .whiteBtn span {color: #000; font-size: 22px; line-height: 70px; font-weight: 300; text-align: center;}

  .footerWrap .menuWrap {overflow: hidden; padding: 80px 0 35px;}
  .footerWrap .menuWrap .logo {float: left; width: 140px; font-size: 40px; font-weight: 900;}
  .footerWrap .menuWrap .menu {float: right;}
  .footerWrap .menuWrap .menu li {float: left; padding: 0 10px 0 0; width: 191px; font-size:15px; color:#f8f8f8}
  .footerWrap .menuWrap .menu li:nth-child(5) {width: inherit;}
  .footerWrap .menuWrap .menu li .menuTit {margin:0 0 30px; line-height: 25px;}
  .footerWrap .menuWrap .menu li .menuCont {opacity: 0.7; line-height: 32px;}
  .w1440px {max-width: 1440px; margin: 0 auto; border-bottom: 1px solid rgba(12, 37, 75, 0.2);}

  .footerWrap .newsWrap {overflow: hidden; padding: 40px 0;}
  .footerWrap .newsWrap > * {float: left;}
  .footerWrap .newsWrap .newsTit .tit{font-size:28px; font-weight: 500; line-height: 38px;}
  .footerWrap .newsWrap .newsTit .sub{margin:15px 0 0; font-size:15px; font-weight: 300; line-height: 25px; opacity: 0.7;}
  .footerWrap .newsWrap .newsInput {margin:0 0 0 70px ;}
  .footerWrap .newsWrap .sns {float: right;}
  .footerWrap .newsWrap .sns li {float: left; margin: 0 40px 0 0;}
  .footerWrap .newsWrap .sns li:nth-child(4) {margin: 0;}

  .footerWrap .licenseWrap {padding:40px 0 90px; border:none;}
  .footerWrap .licenseWrap {font-size: 15px; opacity: 0.7; line-height: 25px;}
  .footerWrap .licenseWrap .liTop {margin:0 0 40px; overflow: hidden; width: 100%;}
  .footerWrap .licenseWrap .liTop .licenseInfo {float: left;}
  .footerWrap .licenseWrap .liTop .licenseDoc {float: right;}
  .footerWrap .licenseWrap .family {overflow: hidden;}
  .footerWrap .licenseWrap .family li {float: left; margin: 0 0 0 40px;}
  .footerWrap .licenseWrap .family li:nth-child(1) {margin: 0;}

</style>