<template>
    <button v-if="mv.showst ===3">购买</button>
    <button v-else class="per-sale">预售</button>
</template>

<script>
export default {
    name:'MovieButton',
    props:['mv']
}
</script>

<style lang="stylus" scoped>
    button
        color: #fff
        background-color: #cd4c42
        border-radius: .05rem
        width: .5rem
        border 1px solid #cd4c42
    &.per-sale
        background-color: skyblue
        border: none
</style>
