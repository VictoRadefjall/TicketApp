<template>

<main>
  <ticket></ticket>  <!-- v-for="(item, index) of ticket" :key="index" :ticket="ticket" -->
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

</style>
