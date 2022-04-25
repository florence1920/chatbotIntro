<template>
  <div class="peopleWrap">
    <div class="peoHead">
      <p class="peoTit" data-aos="fade-up" data-aos-duration="500">챗봇사업팀의 구성원을 만나보세요</p>
      <img src="../../assets/images/plus (1).png" alt="" @click="openCreate()">
    </div>
    <Swip data-aos="fade-up" data-aos-duration="700"></Swip>
    <div class="create">
      <form v-on:submit.prevent="addMember">
      <ul class="inputWrap">
        <li>
            <span>이름</span> <input type="text" v-model="member.who">
        </li>
        <li>
            <span>포지션</span> <input type="text" v-model="member.pos">
        </li>
        <li>
            <span>MBTI</span> <input type="text" v-model="member.character.mbti">
        </li>
        <li>
            <span>혈액형</span> <input type="text" v-model="member.character.blood">
        </li>
        <li>
            <span>지역</span> <input type="text" v-model="member.character.loc">
        </li>
        <li>
            <span>키워드</span> <input type="text" v-model="member.character.key" id="inputKeyword">
        </li>
      </ul>
      <button type="sumbit" @click="closeCreate()"> 추가 </button>
    </form>  
    </div>
  </div>
</template>

<script>
import Swip from '@/components/main/swip.vue'
export default {
  components: {
    Swip,
  },
  data() {
    return {
      member: {
        who : '',
        pos : '',
        character : {
          mbti : '',
          blood : '',
          loc : '',
          key : ''
        }
      }
    }
  },
  methods: {
    openCreate(){
      document.querySelector('.create').style.display = 'block'
    },
    closeCreate(){
      document.querySelector('.create').style.display = 'none'
    },
    addMember() {
      let key = this.member.character.key;
      let arr = key.split(',')
      const member = {
        who : this.member.who,
        pos : this.member.pos,
        character : {
          mbti : this.member.character.mbti,
          keyword : arr,
          blood : this.member.character.blood,
          loc : this.member.character.loc,
        }
      }
      this.$store.dispatch('ADD_MEMBERS',member);
      this.$store.dispatch('GET_MEMBERS',member);
      //this.clear();
    },
    clear(){
      this.member = {
        who : '',
        pos : '',
        character : {
          mbti : '',
          blood : '',
          loc : '',
          keyword : []
        }
      }
    }
  },
}
</script>

<style scoped>
  .peopleWrap {margin: 0 auto; padding:200px 0; position: relative;}
  .peopleWrap .create {display: none; width: 360px;height: 520px; border-radius: 20px; background: #000; padding: 80px 40px; color: #fff; position: absolute;bottom: 265px;right: 5px; z-index: 1;}
  .peopleWrap .create input {width: 190px; margin:0 0 0 10px; border-radius: 6px;}
  .peopleWrap .create .inputWrap li {margin: 0 0 40px;}
  .peopleWrap .create span {display: inline-block; width: 60px; font-weight: 300;}
  .peopleWrap button {float: right; margin: 0 10px 0 0; width: 100px; height: 40px; background: #335fe8; color: #fff; border: none; border-radius: 10px; cursor: pointer;}

  .peopleWrap .peoHead {position: relative;}
  .peopleWrap .peoHead img {position: absolute;top: 70px;right: 210px; width: 40px; cursor: pointer;}
  .peopleWrap .peoTit {text-align: center; font-size: 48px; font-weight: 600; color: #0c254b;}

</style>