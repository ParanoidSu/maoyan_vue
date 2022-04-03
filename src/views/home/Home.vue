<template>
  <div>
    <header>猫眼电影</header>
    <Movies></Movies>
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
import Movies from "@/views/home/movie/Movies.vue";
export default {
  components: {
    Movies,
  },
};
</script>
<style lang="stylus" scoped>
@import '~@/assets/stylus/border1px.styl';
@import '~@/assets/stylus/icons.styl';

div {
  display: flex;
  height: 100%;
  flex-direction: column;

  header {
    background-color: #cd4c42;
    height: 0.44rem;
    color: #fff;
    text-align: center;
    line-height: 0.44rem;
    font-size: 0.16rem;
    font-weight: bold;
  }

  .tabbar {
    height: 0.44rem;
    border1px(1px 0 0 0);

    ul {
      display: flex;

      li {
        justify-content: center;
        align-items: center;
        flex: 1;
        font-family: iconfont-nav;
        display: flex;
        flex-direction: column;
        padding-top: 0.05rem;

        b {
          font-size: 0.26rem;
          font-weight: normal;
          line-height: 0.2rem;
        }

        span {
          font-size: 0.12rem;
          transform: scale(0.9);
        }

        &.active {
          color: #cd4c42;
        }
      }
    }
  }
}
</style>
