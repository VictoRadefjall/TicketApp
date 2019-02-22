<template>
  <main id="ticket">
    <h3>Thanks for your order!
    <br/>
    We have stolen {{ event.price * numOfTickets }}:- from your bank account.</h3>
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
  computed: {
    numOfTickets() {
      return this.$store.state.numOfTickets;
    },
    event() {
      return this.$store.state.event;
    }
  },
  beforeMount() {
    if(localStorage.getItem('tickets')) {
      this.$store.dispatch('getTickets');
    }
  },
};

</script>

<style lang="scss">
@import '../scss/main.scss';

#ticket {
  background: inherit;
  color: white;
}

</style>
