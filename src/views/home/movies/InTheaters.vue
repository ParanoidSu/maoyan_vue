<template>
  <main>
      <div class="move-list">
      <MovieList :movie-list="movieList"></MovieList>
    </div>
    </main>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
export default {
  components: {
    MovieList,
  },
  props:['movieList']
}
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
}

</style>