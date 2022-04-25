<template>
  <swiper class="swiper" :options="swiperOption" data-delay="0" data-duration="0.8">
    <swiper-slide v-for="(member, index) in this.$store.state.members" :key="index">
      <img :src="require(`@/assets/images/pokemon${index}.png`)" alt=""> 
      <div class="peoInfo">
        <p class="people">{{member.who}}</p>
        <p class="pos">{{member.pos}}</p>
        <ul class="bioWrap">
          <li>- {{member.character.mbti}}, {{member.character.blood}}, {{member.character.loc}}</li>
          <li v-for="(keyword, index) in member.character.keyword" :key="index">- {{keyword}}</li>
        </ul>
      </div>
    </swiper-slide>
    
    <!-- <swiper-slide>
      <img src="../../assets/images/pokemon_8.png" alt="">  
      <div class="peoInfo">
        <p class="people">이승헌</p>
        <p class="pos">Developer</p>
        <ul class="bioWrap">
          <li>- INFP</li>
          <li>- 일단해봐, 파스텔톤, 내일의 내가</li>
          <li>- B형</li>
          <li>- 신림</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/pokemon_2.png" alt="">  
      <div class="peoInfo">
        <p class="people">오영환</p>
        <p class="pos">TeamLeader</p>
        <ul class="bioWrap">
          <li>- INFJ</li>
          <li>- 개발자 , 챗봇전문가 , 투자 , 여행 , AI</li>
          <li>- O형</li>
          <li>- 용인</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/pokemon_3.png" alt="">  
      <div class="peoInfo">
        <p class="people">김수정</p>
        <p class="pos">ProjectManager</p>
        <ul class="bioWrap">
          <li>- ENFP</li>
          <li>- 잘 웃어요, 긍정, 집순이</li>
          <li>&nbsp; 사람들과 있을 때 에너지, I 같지만 E</li>
          <li>- O형</li>
          <li>- 신림</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/pokemon_4.png" alt="">  
      <div class="peoInfo">
        <p class="people">김예슬</p>
        <p class="pos">ProjectManager</p>
        <ul class="bioWrap">
          <li>- ISTJ</li>
          <li>- 텍스트넷유니콘, 재택근무만세, 계획러</li>
          <li>&nbsp; 강력한 가을 웜톤</li>
          <li>- A형</li>
          <li>- 기흥</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/pokemon_5.png" alt="">  
      <div class="peoInfo">
        <p class="people">임소은</p>
        <p class="pos">ProjectManager</p>
        <ul class="bioWrap">
          <li>- ENFJ</li>
          <li>- 맛있는 음식, 재밌는 일, 새로운 일, 여행</li>
          <li>- A형</li>
          <li>- 판교</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/pokemon_6.png" alt="">  
      <div class="peoInfo">
        <p class="people">이승민</p>
        <p class="pos">Developer</p>
        <ul class="bioWrap">
          <li>- INTJ</li>
          <li>- 생각보다 착합니다, 고기, 타자연습</li>
          <li>- A형</li>
          <li>- 신림</li>
        </ul>
      </div>
    </swiper-slide>
    <swiper-slide>
      <img src="../../assets/images/pokemon_7.png" alt="">  
      <div class="peoInfo">
        <p class="people">정미영</p>
        <p class="pos">Developer/DS</p>
        <ul class="bioWrap">
          <li>- INFJ</li>
          <li>- 내성적이지만 수다스러움, 오히려 좋아</li>
          <li>&nbsp; 친해지면 사투리 써요, 잘 웃음, 잘움</li>
          <li>- A형</li>
          <li>- 석계</li>
        </ul>
      </div>
    </swiper-slide> -->
    
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    
    components: {
      Swiper,
      SwiperSlide
    },
    data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        // spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        // loopFillGroupWithBlank: true,
        // centeredSlides: true,
        // speed : 4000, // 슬라이드 속도 2초
      }
    }
  }
  }
</script>

<style lang="scss" scoped>
  .swiper {
    margin: 120px 230px 0;
    height: 600px;

    .swiper-slide {
      // display: flex;
      // justify-content: center;
      // align-items: center;
      margin: 15px;
      width: auto;
      height: 520px;
      border-radius: 20px;
      box-shadow: 0 5px 25px 0 rgb(12 37 75 / 15%);
      position: relative;

      img {
        padding: 40px 0 0;
        height: 192px;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      
      .peoInfo{
        overflow: hidden;
        padding: 240px 40px 40px;
        font-size: 28px;

        .people{
          text-align: right;
          color: #1c4ab4;
          font-weight: 600;
        }

        .pos{
          margin : 5px 0 0;
          text-align: right;
          color: #1c4ab4;
          font-size: 16px;
          font-weight: 300;
        }

        .bioWrap {
          margin:50px 0 0;
          color:#546681;
          font-size: 16px;
          font-weight: 600;
          li {
            margin : 15px 0;
          }
        }

      }
    }
    
  }

</style>