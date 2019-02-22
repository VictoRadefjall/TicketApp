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
      color: orange;
      font-size: 3rem;
      letter-spacing: 5px;

    }

    input {
      flex: 1;
<<<<<<< HEAD
      background-color: rgba(192, 192, 192, 0.151);
      color: silver;
=======
      background-color: rgba(192,192,192,0.5);
      color: white;
>>>>>>> 6e3c1a30ce2c493e2e5e1791e56876a118661bb3
      font-size: 1rem;
      font-style: italic;
      border: none;
      border-radius: 3px;
      margin: 0 3rem;
      padding: 1rem;
      border-bottom: solid 3px orange;
    }
  }

</style>
