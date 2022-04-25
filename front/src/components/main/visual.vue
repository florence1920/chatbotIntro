<template>
  <div class="visualWrap">
      <div class="videoWrap">
        <video muted autoplay loop>
          <source  src="../../assets/video/main_viusal_01.mp4" type="video/mp4" >
        </video>
      </div>
      <div class="shadow"></div>
      <div class="txtWrap">
          <div class="txt_2">
              <p class="sub">From Thought To Knowledge</p>
              <p class="tit">Trusted AI</p>
              <div class="cir"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    txtRoller() {
      console.log('hello');
    }
  },
  mounted () {
    // setInterval(() => {
    //   this.txtRoller()
    // }, 1000);
  },
}
</script>

<style scoped>
  .visualWrap {width: 1440px;}
  .visualWrap .videoWrap {width: 100%; position: relative; z-index: 0;}
  .visualWrap .shadow {width: 100%; height: 1080px; background-color: rgba(0, 0, 0, 0.4 ); position: absolute;top: 0;left: 0; z-index: 1;}
  
  .visualWrap .txtWrap {color: #fff; position: absolute;top: 50%;left: 0; z-index: 3;}
  .visualWrap .txtWrap .tit {margin:20px 0 0; font-size: 120px; font-weight: 600;}
  .visualWrap .txtWrap .sub {margin:0 0 40px; font-size: 32px; font-weight: 300;}
  .visualWrap .txtWrap .txt_1 {text-align: center;}
  .visualWrap .txtWrap .txt_2 {position: relative; left:231.5px;}
  .visualWrap .txtWrap .txt_2 .cir {position: absolute; top: 65px; left:470px; width: 140px; height: 140px; border-radius: 50%; background-color: #406eff; z-index: -1;}
</style> 