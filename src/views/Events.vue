<template>
  <main id="events">
    <h1>Events</h1>
<<<<<<< HEAD
    <input type="text" name="" placeholder="Search for events">
    <event v-for="(item, index) in events" :key="index" :item="item" />
=======
    <input type="text" v-model="search" placeholder="Search events">
    <event v-for="(item, index) in filterEvents" :key="index" :item="item" />
>>>>>>> master
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
<<<<<<< HEAD
      color: #ff7100;
=======
      color: orange;
>>>>>>> master
      font-size: 3rem;
    }

    input {
      flex: 1;
      background-color: rgba(192, 192, 192, 0.151);
      color: silver;
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
