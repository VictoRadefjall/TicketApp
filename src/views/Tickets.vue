<template>

<main>
  <ticket></ticket>
</main>

</template>

<script>
import ticket from "@/components/ticket";

export default {
  name: 'tickets',
  props: ['item'],
  components: {
    ticket
  },
  computed: {
    event() {
        var name = this.$route.params.name;
        return this.$store.state.events.filter(function(event) {
            return event.name == name
        })
    },
  },
};

</script>

<style lang="scss">
@import '../scss/main.scss';

main {
  background: $background-color;
  color: white;
}

</style>
