<template>
  <div class="techWrap">
    <div class="techHead">
      <p class="techTit" data-aos="fade-up" data-aos-duration="1000">From Thought To Knowledge</p>
      <div class="techCont" data-aos="fade-up" data-aos-duration="1100">
        <p>AI의 오늘과 내일, TEXTNET이 함께합니다. </p>
        <p>텍스트 데이터 정제부터 메타버스, 디지털 휴먼, 휴머노이드, 페르소나 데이터 설계까지TEXTNET이 인공지능의 미래를 열어갑니다.</p>
      </div>
    </div>
    <!-- techHeadEnd -->

    
    <div class="techDetail">
        <div class="techInfoAb1" id="techLeft">
            <div v-show="techCont">
                <p class="techTit">AI 대화설계</p>
                <p class="techCont">AI 엔진을 더 똑똑하게, 챗봇 대화를 더 유려하게</p>
                <p class="techCont">다양한 텍스트에 대한 노하우로 고객사의 목표에 적합한 데이터셋을 고안합니다.</p>
                <span class="techLink">AI 대화설계 기술소개</span><img class="tech_ico" src="../../assets/images/tech_ico.svg">
            </div>

            <div v-show="!techCont">
                <p class="techTit">언어자원구축 서비스</p>
                <p class="techCont">방대한 덱스트 데이터를 정제, 가공해 지식자원으로</p>
                <p class="techCont">원시데이터부터 목적을 갖고 전처리된 원천데이터까지 다루고 있습니다.</p>
                <span class="techLink">언어자원구축 자세히 보기</span><img class="tech_ico" src="../../assets/images/tech_ico.svg">
            </div>
        </div>

        <div class="techImg">
          <img class="tech_1" src="../../assets/images/tech1.png" alt="" data-aos="fade-up" data-aos-duration="1000">
          <img class="tech_2" src="../../assets/images/tech_3.png" alt="" data-aos="fade-up" data-aos-duration="700">
        </div>
    </div>
    <!-- techDetail -->
  </div>
  <!-- techWrap -->
</template>

<script>
export default {
   data() {
    return {
      scroll: '',
      techCont : true,
      
    }
  },
  methods: {
    count20(){
      function numberCounter(target_frame, target_number) {
          this.count = 0; this.diff = 0;
          this.target_count = parseInt(target_number);
          this.target_frame = document.getElementById(target_frame);
          this.timer = null;
          this.counter();
      };
      numberCounter.prototype.counter = function() {
          var self = this;
          this.diff = this.target_count - this.count;
          
          if(this.diff > 0) {
              self.count += Math.ceil(this.diff / 5);
          }
          
          this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          
          if(this.count < this.target_count) {
              this.timer = setTimeout(function() { self.counter(); }, 50);
          } else {
              clearTimeout(this.timer);
          }
      };
      new numberCounter("countt", 20);
      new numberCounter("countt1", 99);

    },  
   menu() {
    let nowScroll = window.scrollY;
    console.log(nowScroll)
    if(nowScroll > 900 && nowScroll < 1000){
      this.count20();
    }
    if(nowScroll < 2100){
      document.querySelector('#techLeft').className = 'techInfoAb1';
    }else if(nowScroll >= 2100 && nowScroll < 3000){
      document.querySelector('#techLeft').className = 'techInfoFixed';
    }else if(nowScroll > 3000){
      document.querySelector('#techLeft').className = 'techInfoAb2';
    }

    if(nowScroll < 2400){
      this.techCont = true;
    }else {
      this.techCont = false;
    }

    
   }
  },
  mounted() {
   window.addEventListener('scroll', this.menu);

   
  },
}
</script>

<style scoped>

  .techWrap {width:1440px; padding: 200px 0 0; margin: 0 auto;}

  .techWrap .techHead {padding: 0 0 100px; text-align: center;}
  .techWrap .techHead .techTit {font-size: 48px; font-weight: 900; color: #0c254b;}
  .techWrap .techHead .techCont {margin:40px 0 0; font-size: 18px; font-weight: 200; line-height: 30px;}

  .techWrap .techDetail {position: relative; height: 1500px; transition:5s;}
  .techWrap .techDetail .techInfoAb1 {position: absolute;top: 200px;left: 0;}
  .techWrap .techDetail .techInfoFixed {position: fixed;top: 480px;left:231px;}
  .techWrap .techDetail .techInfoAb2 {position: absolute;top: 1090px;left: 0;}
  .techWrap .techDetail #techLeft .techTit {margin:0 0 25px; font-size: 28px; color:#1C4AB4; line-height: 1.36; font-weight: 700;}
  .techWrap .techDetail #techLeft .techCont {font-size: 18px; line-height: 1.56; font-weight: 200;}
  .techWrap .techDetail #techLeft .techLink {margin:60px 0 0; font-size: 20px; line-height: 22px; color: #406eff;}
  .techWrap .techDetail #techLeft .tech_ico {margin:60px 0 0 10px;}

  .techWrap .techDetail .techImg {overflow: hidden; padding:0 0 0 900px;}
  .techWrap .techDetail .techImg > * {float:left;}
  .techWrap .techDetail .techImg img {border-radius:20px; width: 500px; height: 600px;}
  .techWrap .techDetail .techImg .tech_1 {margin: 0 0 100px;}
  
</style>