<template>
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
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import axios from 'axios'
import Vue from 'vue';
export default {
  components: {
    MovieList,
  },
  data() {
    return {
      movieList: [],
    }
  },
    mounted() {
    //  let result = await axios.get('mmdb/movie/v2/list/hot.json',{
    //    params:{
    //      limit:10,
    //      offset:0,
    //      ct:'北京'
    //    }
    //  })
    },
    
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/icons.styl';
@import '~@/assets/stylus/border1px.styl';

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .move-list {
    flex: 1;
    overflow-y: scroll;
  }

  .movie-nav {
    > ul {
      border1px(0 0 1px 0);
      display: flex;
      height: 0.44rem;

      li:first-child {
        font-family: iconfont-search;
        width: 0.9rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #666;
        margin-left: 0.15rem;
      }

      li:nth-child(2) {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        span {
          height: 0.44rem;
          padding: 0 0.15rem;
          line-height: 0.44rem;
          display: inline-block;
          color: #666;

          &:first-child {
            margin-right: 0.3rem;
          }

          &.active {
            border-bottom: 2px solid #cd4c42;
            color: #cd4c42;
          }
        }
      }

      li:last-child {
        font-family: iconfont-search;
        width: 0.44rem;
        border1px(0 0 0 1px, solid, #eee);
        font-size: 0.2rem;
        text-align: center;
        line-height: 0.44rem;
        color: #cd4c42;
      }
    }
  }
}
</style>