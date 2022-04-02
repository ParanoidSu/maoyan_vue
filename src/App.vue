<template>
  <div>
    <header>
      猫眼电影
    </header>
    <main></main>
    <nav>
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

<style lang="stylus">
@font-face {
  font-family: 'iconfont';
  src:  url('./assets/icons/iconfont.woff') format('woff'), 
        url('./assets/icons/iconfont.ttf') format('truetype');
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
  nav
    height: .44rem
    border 1px solid #ccc
    ul
      display: flex
      li
        justify-content: center
        align-items: center
        flex: 1
        font-family: iconfont
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
