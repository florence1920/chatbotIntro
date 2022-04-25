<template>
  <div class="sumWrap">
    <p class="sumTit" data-aos="fade-up" data-aos-duration="500">A good beginning is half the battle</p>
    <div class="contWrap" data-aos="fade-up" data-aos-duration="500">
      <p class="sumCont">정돈되지 않은 생각과 데이터를 가치있는 지식으로 만들어</p>
      <p class="sumCont">사람만이 가능한 Design Thinking을 촉발시키는 것이 TEXTNET의 존재 이유입니다.</p>
    </div>

    <ul class="boxWrap" data-aos="fade-up" data-aos-duration="500">
      <li>
        <img src="../../assets/images/sum_1.svg" alt="">
        <div class="sumPoint">
          <span class="point_1">국내 <span class="point_2">1</span> 위</span>
        </div>
        <div class="sumCont">
          <p class="contTit">텍스트서비스 부문 국내 1위</p> 
          <p class="cont">*LeeSeungHeon fficial</p> 
        </div>
      </li>
      <li>
        <img src="../../assets/images/sum_2.svg" alt="">
        <div class="sumPoint">
          <span class="point_1"><span class="point_2" id="countt">
            
         </span>억원</span>
        </div>
        <div class="sumCont">
          <p class="contTit">넵툰 Series A 투자 유치</p> 
        </div>
      </li>
      <li>
        <img src="../../assets/images/sum_3.svg" alt="">
        <div class="sumPoint">
          <span class="point_1"><span class="point_2" id="countt1"></span>%</span>
        </div>
        <div class="sumCont">
          <p class="contTit">TEXTNET 데이터 레이블링 정확도</p> 
          <p class="cont">*LeeSeungHeon fficial</p> 
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  methods : {
  },
}
</script>

<style scoped>
  .sumWrap {width: 1440px; margin: 0 auto; padding: 200px 0 0; text-align:center;}
  .sumWrap .sumTit {font-size: 48px; font-weight: 600; color: #0c254b;}
  .sumWrap .contWrap {margin:40px 0 0; font-size: 20px; font-weight: 300; line-height: 30px;}

  .sumWrap .boxWrap {overflow: hidden; margin:100px 0 0; width: 100%; height: 380px;}
  .sumWrap .boxWrap li {float: left; margin:0 2% 0; padding: 48px 50px; width: 30%; height: 370px; border-radius: 20px; box-shadow: 0 5px 15px 0 rgb(12, 37, 75,  0.15) }
  .sumWrap .boxWrap li:nth-child(3) {margin:0 0 0 2%;}
  .sumWrap .boxWrap li img {display: block; width: 60px; margin: 0 auto 20px; }
  .sumWrap .boxWrap li .sumPoint .point_1 {font-weight: 600; font-size: 20px; line-height: 1.54;}
  .sumWrap .boxWrap li .sumPoint .point_2 {font-weight: 900; font-size: 56px; color: #1c4ab4;}
  .sumWrap .boxWrap li .sumCont {margin:30px 0 0;}
  .sumWrap .boxWrap li .sumCont .contTit {font-weight: 600;}
  .sumWrap .boxWrap li .sumCont .cont {margin:10px 0; color: #546681; }

</style>