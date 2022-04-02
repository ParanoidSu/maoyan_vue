<template>
        <ul>
            <li>
                <div>
                    <img src="" alt="">
                </div>
                <div class="introduction">
                    <h1>神奇女侠2</h1>
                    <p>奇幻</p>
                    <p>主演:尼古拉斯尼古拉斯尼古拉斯尼古拉斯尼古拉斯尼古拉斯</p>
                    <div>放映9999场</div>
                </div>
                <div >
                    <MovieScore></MovieScore>
                    <MovieButton></MovieButton>
                </div>
            </li>
            <li>
                <div>
                    <img src="" alt="">
                </div>
                <div class="introduction">
                    <h1>神奇女侠2</h1>
                    <p>奇幻</p>
                    <p>主演:尼古拉斯</p>
                    <div>放映9999场</div>
                </div>
                <div >
                    <MovieScore></MovieScore>
                    <MovieButton></MovieButton>
                </div>
            </li>
            <li>
                <div>
                    <img src="" alt="">
                </div>
                <div class="introduction">
                    <h1>神奇女侠2</h1>
                    <p>奇幻</p>
                    <p>主演:尼古拉斯</p>
                    <div>放映9999场</div>
                </div>
                <div >
                    <MovieScore></MovieScore>
                    <MovieButton></MovieButton>
                </div>
            </li>
            <li>
                <div>
                    <img src="" alt="">
                </div>
                <div class="introduction">
                    <h1>神奇女侠2</h1>
                    <p>奇幻</p>
                    <p>主演:尼古拉斯</p>
                    <div>放映9999场</div>
                </div>
                <div >
                    <MovieScore></MovieScore>
                    <MovieButton></MovieButton>
                </div>
            </li>
            <li>
                <div>
                    <img src="" alt="">
                </div>
                <div class="introduction">
                    <h1>神奇女侠2</h1>
                    <p>奇幻</p>
                    <p>主演:尼古拉斯
                    </p>
                    <div>放映9999场</div>
                </div>
                <div >
                    <MovieScore></MovieScore>
                    <MovieButton></MovieButton>
                </div>
            </li>
            <li>
                <div>
                    <img src="" alt="">
                </div>
                <div class="introduction">
                    <h1>神奇女侠2</h1>
                    <p>奇幻</p>
                    <p>主演:尼古拉斯</p>
                    <div>放映9999场</div>
                </div>
                <div >
                    <MovieScore></MovieScore>
                    <MovieButton></MovieButton>
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
    }
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
            flex: 70
            margin-left: .1rem
            div
                color: #999
            p
                color:#333
                ellipsis()
        div:nth-child(3)
            flex: 30
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
