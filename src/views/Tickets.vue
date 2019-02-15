<template>

<main>
  <ticket></ticket> 
</main>

</template>

<script>
import ticket from "@/components/ticket";

export default {
  name: 'tickets',

  components: {
    ticket
  }
};

</script>

<style lang="scss">
@import '../scss/main.scss';

main {
  background: $background-color;
  color: white;
}

</style>
