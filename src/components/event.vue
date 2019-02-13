<template>
<article class="event">
  <section>
    <p class="box">{{ item.date }}</p>
  </section>
  <router-link :to="{ name:'name', params: { name: item.name } }"> 
  <section class="info">
    <h1>{{ item.name }}</h1>
    <p>{{ item.place }}</p>
    <p>{{ item.startTime }} - {{ item.endTime }}</p>
    <p>{{ item.price }} :-</p>
  </section>
  </router-link>
</article>
</template>

<script>
export default {
  name: 'event',
  props: ['item']
}
</script>

<style lang="scss">

%center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.event {
  display: flex;
  border: 1px solid #eee;

  section {
    background-color: Azure;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  :last-child {
    flex: 3;
  }

  .box {
    border: 2px solid Crimson;
    @extend %center;
  }

}

body {
  background-color: #eee;
}

</style>
