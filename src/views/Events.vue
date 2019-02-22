<template>
  <main id="events">
    <h1>Events</h1>
    <input type="text" v-model="search" placeholder="Search events">
    <event v-for="(item, index) in filterEvents" :key="index" :item="item" />
  </main>
</template>

<script>
import event from '@/components/event';

export default {
  name: 'events',
  data() {
    return {
      search: ""
    }
  },
  components: {
    event
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    filterEvents() {
      return this.$store.state.events.filter((event) => {
        return event.name.toUpperCase().match(this.search.toUpperCase());
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';
@import url('https://fonts.googleapis.com/css?family=Sansita');

  #events {
    background: inherit;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: Sansita;
      font-weight: bold;
      font-style: italic;
      color: HotPink;
      font-size: 3rem;
    }

    input {
      flex: 1;
      background-color: rgba(192,192,192,0.5);
      color: white;
      font-size: 1rem;
      font-style: italic;
      border: none;
      border-radius: 3px;
      margin: 0 3rem;
      padding: 1rem;
    }
  }

</style>
