<template>
    <div>
        <p v-if="mv.showst ===3">{{mv.sc}} <span>分</span></p>
        <p v-else>{{mv.wish}} <span>人喜欢</span></p>
    </div>
</template>

<script>
export default {
    name:'MovieScore',
    props:{
        mv:Object
    }
}
</script>

<style lang="stylus" scoped>
    div
        p
            color: orange
</style>
