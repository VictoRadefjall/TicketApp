<template>
  <main id="events">
    <h1>Events</h1>
    <input type="text" name="" value="Search for events">
    <event v-for="(item, index) in events" :key="index" :item="item" />
  </main>
</template>

<script>
import event from '@/components/event';

export default {
  name: 'events',
  components: {
    event
  },
  computed: {
    events() {
      return this.$store.state.events;
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
      color: silver;
      font-size: 1rem;
      font-style: italic;
      border: none;
      border-radius: 3px;
      margin: 0 3rem;
      padding: 1rem;
    }
  }

</style>