<template>
    <div class="content">
     <p><button type="button" @click="isVisible = !isVisible">CLICK ME</button></p>
     <!-- <transition name="fade">
        <h1 v-show="isVisible">Hello,World</h1>
     </transition> -->

     <transition name="slide">
        <h1 v-show="isVisible">Hello,World</h1>
     </transition>
     <p><button type="button" @click="isShow = !isShow">CLICK ME</button></p>
     <transition name="anim">
        <h1 v-show="isShow">Hello,World</h1>
     </transition>
    

    <p><button type="button" @click="flog = !flog">CLICK ME</button></p>
     <transition name="custom-classes-transition"
                enter-active-class="animated jello"
                leave-active-class="animated swing">
        <h1 v-show="flog">PINK ME</h1>
     </transition>


     <p>
         <input v-model.number="number" type="number" step="100">
         
     </p>
      <p>{{ animatedNumber }}</p>
     <!-- 案例5 -->
     <div class="btn-wrap">
        <transition name="slideX" mode="in-out">
                <button :key="isEditing" @click="btnClick">
                {{isEditing ? 'save' : 'edit'}}
            </button>
        </transition>
     </div>
    </div>
</template>
<script>
// import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1'
export default {
    name:'TransAnim',
    data(){
        return{
          isEditing:true,
          isVisible:true,
          isShow:true,
          flog:true,
          number:0,
          tweenedNumber:0
        }
    },
    watch:{
      number(newVal){
          TweenLite.to(this.$data, 0.5, { tweenedNumber: newVal });
      }
    },
    computed:{
        animatedNumber(){
            return this.tweenedNumber.toFixed(0);
        }
    },
    methods:{
        btnClick(){
            this.isEditing = !this.isEditing
        }
    }
}
</script>
<style scoped>
.btn-wrap{
    position: relative;
}
.btn-wrap>button{
   position:absolute;
   left:50%;
   top:0;
}
.slideX-enter-active,
.slideX-leave-active{
    transition:all .5s linear;
}
.slideX-enter{
    opacity:0;
   transform: translateX(20px)
}
.slideX-enter-to{
    opacity:1;
    transform: translateX(0)
}
.slideX-leave{
    opacity:0;
   transform: translateX(0)
}
.slideX-leave-to{
    opacity:1;
    transform: translateX(-50px)
}
  /* .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
} */

/* css动画 */
@keyframes flip {
    from{
        transform:rotateX(0)
    }
    to{
        transform:rotate(360deg)
    }
}
.anim-enter-active{
    animation:flip .75s linear;
}
.anim-leave-active{
    animation:flip .75s linear reverse;

}
.slide-enter-active,.slide-leave-active{
    transition:all .5s linear 
}
.slide-leave,
.slide-enter-to{
    transform: translate(0);
    color:#000;
}
.slide-leave-to,
.slide-enter{
    transform: translate(200px);
    color:blue;
}

</style>


