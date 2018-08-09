<template>
    <div>
        <input type="text" v-model.number="num">
        <Stu :num="num" />
    </div>
</template>

<script>
import Stu from './stu'
export default {
    name: 'Tea',
    data() {
        return {
            num: 0
        }
    },
    components: {Stu}
}
</script>

<style scoped>
