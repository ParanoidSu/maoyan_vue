<template>
        <ul>
            <li v-for="mv in MovieList" :key="mv.index">
                <div>
                    <img :src="mv.img" alt="">
                </div>
                <div class="introduction">
                    <h1>{{mv.nm}}</h1>
                    <p>{{mv.cat}}</p>
                    <p>{{mv.desc}}</p>
                    <div>{{mv.showInfo}}</div>
                </div>
                <div >
                    <MovieScore :mv="mv"></MovieScore>
                    <MovieButton :mv="mv"></MovieButton>
                </div>
            </li>
        </ul>
</template>

<script>
import MovieScore from './MovieScore.vue'
import MovieButton from './MovieButton.vue'
export default {
    name:'MovieList',
    components:{
        MovieScore,
        MovieButton
    },
    props:['MovieList']
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/border1px.styl'
@import '../assets/stylus/ellipsis.styl'
    li
        display: flex
        border1px(0 0 1px 0)
        margin: .1rem 0 0 .1rem
        position: relative
        padding-bottom: .1rem
        // position: relative
        div.introduction
            flex: 60
            margin-left: .1rem
            div
                color: #999
            p
                color:#333
                ellipsis()
        div:nth-child(3)
            flex: 40
            display: flex
            flex-direction: column
            justify-content: space-between
            align-items: center
            height .7rem
            margin-top: .1rem
            
    img
        width: .64rem
        height: .9rem
</style>>
