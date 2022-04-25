<template>
  <div class="navWrap" @mouseover="hover" @mouseleave="leave">
      <div class="navInner">
        <p class="logo">TEXTNET</p>
        <ul class="menuWrap">
          <li>
              <p class="menuTit">회사소개</p>
              <ul class="menuDepth">
                 <li>Vision</li>
                 <li>Investor</li>
                 <li>History</li>
                 <li>Contact</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">서비스</p>
              <ul class="menuDepth">
                 <li>AI 대화설계</li>
                 <li>언어자원구축</li>
                 <li>데이터레이블링</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">채용</p>
              <ul class="menuDepth">
                 <li>챗봇구축개발</li>
                 <li>연구개발직</li>
                 <li>영업개발</li>
              </ul>
          </li>
          <li>
              <p class="menuTit">팀문화</p>
              <ul class="menuDepth">
                 <li>이렇게 일해요</li>
                 <li>지원제도</li>
                 <li>일상 엿보기</li>
              </ul>
          </li>
           <li>
              <p class="menuTit">자료실</p>
              <ul class="menuDepth">
                 <li>참여프로젝트</li>
                 <li>Press</li>
                 <li>AI 트렌드</li>
                 <li>Firescout</li>
              </ul>
          </li>
        </ul>
        <!-- menuWrap End -->

        <div class="btnWrap">
          <div class="blueBtn"><span>서비스문의</span></div>
          <div class="whBtn"><span>KOR 
              <img v-show="isActive" src="../../assets/images/down_arrow_b.png" alt="">
              <img v-show="!isActive" src="../../assets/images/down_arrow_w.png" alt="">
          </span></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive : false
    }
  },
  methods: {
    hover() {
      let depth = document.querySelectorAll('.menuDepth');
      this.isActive = true;
      document.querySelector('.navWrap').classList.add('active');
      document.querySelector('.logo').classList.add('logoActive');
      depth.forEach(e => {
        e.style.display = 'block';
      });
    },
    leave(){
      let depth = document.querySelectorAll('.menuDepth');
      this.isActive = false;
      document.querySelector('.navWrap').classList.remove('active');
      document.querySelector('.logo').classList.remove('logoActive');
      depth.forEach(e => {
        e.style.display = 'none';
      });
    }
  },

}
</script>

<style scoped>
  .navWrap {width: 100%; position: absolute; z-index: 2; color:rgb(255, 255, 255);}
  .active {width: 100%; background: rgb(255, 255, 255); color:#000; }
  .logoActive {color: #1c4ab4}

  .navWrap .navInner {overflow: hidden; width: 1440px; margin: 0 auto; padding: 35px 0 60px;}
  .navWrap .navInner > * {float: left;}
  .navWrap .navInner .logo {margin: 5px 0 0; font-size: 40px; font-weight: 900;}
  .navWrap .navInner .menuWrap {overflow: hidden; margin:20px 0 0 200px;}
  .navWrap .navInner .menuWrap > li {float: left; width: 100px; margin:0 50px 0 0;}
  .navWrap .navInner .menuWrap li .menuTit {font-size:18px; font-weight: 300;}
  .navWrap .navInner .menuWrap li .menuDepth {display: none; margin:30px 0 0;}
  .navWrap .navInner .menuWrap li .menuDepth li {margin:0 0 20px; font-size: 15px; font-weight: 300;}

  .navWrap .navInner .btnWrap {overflow: hidden; float: right; margin: 4.5px 0 0;}
  .navWrap .navInner .btnWrap > * {float: left; line-height: 45px; border-radius:30px;}
  .navWrap .navInner .btnWrap .blueBtn {width: 120px; height: 45px; background: #406EFF; color: #fff; padding: 0 20px;}
  .navWrap .navInner .btnWrap .whBtn {width: 100px; height: 45px; padding: 0 25px; margin: 0 0 0 15px; border: 1px solid #ddd; position: relative;}
  .navWrap .navInner .btnWrap .whBtn img {position: absolute;top: 50%;right:10px;transform: translate(-50%);}
</style>