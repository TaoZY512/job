<template>
    <div>
        员工：
        <slot name="s1"></slot>
        <hr />
        <slot name="s2"></slot>
        <slot name="s3">
            <button>CLICKME</button>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'Worker',
    data() {
        return{

        }
    }
}
</script>

<style scoped>

</style>
