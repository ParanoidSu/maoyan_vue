<template>
  <main>
    <nav class="movie-nav">
      <ul>
        <li @click="handleCityClick">
          <span>北京</span>
          <b>&#xe6b9;</b>
        </li>
        <li>
          <router-link
            to="/home/movies/intheaters"
            tag="span"
            active-class="active"
            >热映</router-link
          >
          <router-link
            to="/home/movies/comingsoon"
            tag="span"
            active-class="active"
            >待映</router-link
          >
        </li>
        <li>&#xe651;</li>
      </ul>
    </nav>
    <section class="movie-list">
      <van-skeleton
        avatar
        avatar-shape="square"
        :row="3"
        :loading="showSkeleton"
        avatar-size="60"
        class="skeleton"
        v-for="i in 7"
        :key="'a' + i"
      >
      </van-skeleton>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
          <router-view :movie-list="movieList"></router-view>
        </van-list>
      </van-pull-refresh>
    </section>
  </main>
</template>

<script>
import Vue from "vue";
import { List, PullRefresh, Skeleton } from "vant";
import axios from "axios";

Vue.use(List).use(PullRefresh).use(Skeleton);

export default {
  data() {
    return {
      movieList: [],
      refreshing: false,
      loading: false,
      finished: false,
      showSkeleton: true,
      ct:'北京',
      url:'/mmdb/movie/v2/list/hot.json'
    };
  },
  created() {
    this.hasMore = false;
    this.limit = 10;
    this.offset = 0;
  },
  async mounted() {
    await this._loadData();
    this.showSkeleton = false;
  },

  methods: {
    async _loadData() {
      let result = await axios.get(this.url, {
        params: {
          limit: this.limit,
          offset: this.offset,
          ct: this.ct,
        },
      });
      let {
        hot,
        coming,
        paging: { hasMore },
      } = result.data.data;
      this.movieList = [...this.movieList, ...hot, ...coming];
      this.hasMore = hasMore;
    },

    handleCityClick() {
      this.$router.push("/citypicker");
    },

    async onLoad() {
      if (this.refreshing) {
        this.movieList = [];
        this.refreshing = false;
      }

      await this._loadData();
      this.loading = false;

      if (!this.hasMore) {
        this.finished = true;
      }

      this.offset += this.limit;
    },

    onRefresh() {
      this.offset = 0;
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
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

  .movie-list {
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
