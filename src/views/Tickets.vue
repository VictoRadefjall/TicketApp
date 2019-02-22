<template>
<main id="ticket">
  <ticket></ticket>
</main>
</template>

<script>
import ticket from "@/components/ticket";

export default {
  name: 'tickets',
  components: {
    ticket
  },
  beforeMount() {
    if(localStorage.getItem('tickets')) {
      this.$store.dispatch('getTickets');
    }
  }
};

</script>

<style lang="scss">
@import '../scss/main.scss';

#ticket {
  background: inherit;
  color: white;
}

</style>
