<template>
    <div>
        老板：
        <Worker>
          <div slot="s1">我是插槽1
            <h3>我是内容</h3>
          </div>
          <p slot="s2">我是插槽2</p>

          <button slot="s3">SHOWME</button>
        </Worker>
        <hr />
    </div>
     
</template>

<script>
import Worker from './worker'
export default {
    name: 'Boss',
    data() {
        return{

        }
    },
    components: {
       // 注册子组件
        Worker
    }
}
</script>

<style scoped>

</style>
