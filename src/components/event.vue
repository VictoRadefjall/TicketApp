<template>
<router-link :to="{ name:'name', params: { name: item.name } }">
  <article class="event" @click="selectEvent(item)">
    <section class="date">
      <div>
        <p>{{ item.date.date }}</p>
        <p>{{ item.date.month }}</p>
      </div>
    </section>

    <section class="info">
      <h1>{{ item.name }}</h1>
      <p>{{ item.place }}</p>
      <p>{{ item.startTime }} - {{ item.endTime }}</p>
      <p>{{ item.price }} SEK</p>
    </section>
  </article>
</router-link>
</template>

<script>
export default {
  name: 'event',
  props: ['item'],
  methods: {
    selectEvent(event){
      this.$store.commit('selectEvent', event);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

a {
  text-decoration: none;
  background: none;
}

body {
  background: $background-color;
}

.event {
  display: flex;
  flex-direction: row;
  color: White;
  margin: 2rem;
  border-left: 5px solid White;

  section {
    font-family: Fira Sans;
    display: flex;
    flex-direction: column;
    flex: 1;

    p, h1 {
      margin: .25rem;
      padding: .25rem;
    }
  }

  .date { // datumrutan

    div {
      width: 80px;
      height: 80px;
      @extend %center;
      flex-direction: column;
      border: 2px solid White;
      border-radius: 5px;
      margin: 1rem;

      p {
        text-transform: uppercase;
        margin: 0;
        padding: 0;
      }
      :nth-child(1) {
        font-size: 1.2rem;
        font-weight: bold;
      }
      :nth-child(2) {
        font-size: 0.6rem;
      }
    }
  }

  .info { // informationsrutan
    flex: 3;
    align-items: baseline;
    border-bottom: 2px solid white;

    h1, p {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-family: Fira Sans;
      font-size: 2rem;
      margin-top: 1rem;
    }

    :nth-child(2) { // platsen
      font-style: italic;
    }
    :nth-child(3) { // tiden
      margin-top: .5rem;
    }
    :nth-child(4) { // priset
      color: Khaki;
      font-weight: bold;
      font-size: 1.2rem;
      align-self: flex-end;
      margin: 0 .3rem .3rem 0;
    }
  }
}

.event:hover {
  border-left: 5px solid #ff7100;
  background: linear-gradient(#78f70273, rgba(0, 128, 0, 0));
  border-top-right-radius: 30px;

}

</style>
