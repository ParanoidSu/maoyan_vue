<template>
  <div>
    <header>
      猫眼电影
    </header>
    <main>
      <nav class="movie-nav"> 
        <ul>
          <li>
            <span>北京</span>
            <b>&#xe6b9;</b>
          </li>
          <li>
            <span class="active">热映</span>
            <span>待映</span>
          </li>
          <li>&#xe651;</li>
        </ul>
      </nav>
      <div class="move-list">
        <MovieList></MovieList>
      </div>
      
    </main>
    <nav class="tabbar">
      <ul>
        <li class="active">
          <b>&#xe8ae;</b>
          <span>电影</span>
        </li>
        <li>
          <b>&#xe8c0;</b>
          <span>影院</span>
        </li>
        <li>
          <b>&#xe70b;</b>
          <span>我的</span>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import MovieList from './components/MovieList.vue'
export default {
  components:{
    MovieList
    }
}
</script>
<style lang="stylus" scoped>
@import './assets/stylus/border1px.styl'
@font-face {
  font-family: 'iconfont-nav';
  src:  url('./assets/icons/iconfont-nav.woff') format('woff'), 
        url('./assets/icons/iconfont-nav.ttf') format('truetype');
}
@font-face {
  font-family: 'iconfont-search';
  src:  url('./assets/icons/iconfont-search.ttf') format('truetype');
}
div
  display: flex
  height: 100%
  flex-direction: column
  header
    background-color: #cd4c42
    height: .44rem
    color: #fff
    text-align: center
    line-height: .44rem
    font-size: .16rem
    font-weight: bold
  main
   flex: 1
   display: flex
   flex-direction: column
   overflow: hidden
   .move-list
     flex: 1
     overflow-y:scroll
   .movie-nav
    > ul 
        border1px(0 0 1px 0)
        display: flex
        height: .44rem
        li:first-child
          font-family: iconfont-search
          width .9rem
          display: flex
          justify-content: flex-start
          align-items: center
          color: #666
          margin-left: .15rem
        li:nth-child(2)
          flex: 1
          display: flex
          justify-content: flex-start
          align-items: center
          span
            height: .44rem
            padding: 0 .15rem
            line-height: .44rem
            display: inline-block
            color: #666
            &:first-child
              margin-right: .3rem
            &.active
              border-bottom:  2px solid #cd4c42
              color: #cd4c42
        li:last-child
          font-family: iconfont-search
          width .44rem
          border1px(0 0 0 1px,solid,#eee)
          font-size: .2rem
          text-align: center
          line-height: .44rem
          color: #cd4c42
  .tabbar
    height: .44rem
    border1px(1px 0 0 0)
    ul
      display: flex
      li
        justify-content: center
        align-items: center
        flex: 1
        font-family: iconfont-nav
        display: flex
        flex-direction: column
        padding-top: .05rem
        b
          font-size: .26rem
          font-weight: normal
          line-height: .2rem
        span 
          font-size: .12rem
          transform: scale(0.9)
        &.active
          color: #cd4c42
</style>
