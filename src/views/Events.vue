<template>
<main id="events">
  <h1>Events</h1>
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

<style lang="scss">
@import '../scss/main.scss';

#events {
  background: $background-color;
}

</style>