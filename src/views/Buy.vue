<template>
  <main id="buy">
    <p>You are about to score some tickets to</p>

    <br />

    <section v-for="event in event" :key="event.id" :item="item">
      <h2> {{ event.name }} </h2>
      <p>{{ event.date }} {{ event.startTime }} - {{ event.endTime }}</p>
      <span> @ {{ event.place }} </span> 
    </section>

    <br />

    <section v-for="event in event" :key="event.id" :item="item" class="rectangle">
      <div id="price" class="item"> {{ totalCost }}:- </div>
      <div class="item calc" @click="dec">–</div>
      <div class="item"> {{ tickets }} </div>
      <div class="item calc" @click="inc">+</div>
    </section>

    <br/>

    <a class="btn" @click="$router.push('/tickets')">Consume my para $$$</a>
  </main>
</template>

<script>

export default {
  name: 'buy',
  props: ['item'],
  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
    events() {
      return this.$store.state.events;
    },
    event() {
      var name = this.$route.params.name;
      return this.$store.state.events.filter(function(event) {
        return event.name == name
      })
    },
    totalCost() {
      return this.event[0].price * this.$store.state.tickets;
    },
  },
  methods: {
    inc() {
      this.$store.commit('inc');
    },
    dec() {
      this.$store.commit('dec');
    },
  }
}
</script>

<style lang="scss">

.rectangle {
    display: grid;
    padding: 1rem;
    max-width: 350px;
    width: 100%;
    margin: 0 auto;
    font-size: 1.5rem;
    font-weight: 700;

    #price {
      grid-column: 1 / span 3;

      div {
        box-shadow: 5px 3px 0px #658;
      }
    }

    .item {
      border: 1px solid red;
      padding: 2rem;
      color: white;
      background: #333;
    } 
  }

a {
  &.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: violet;
    color: white;
    height: 3rem;
    border-radius: 3px;
    width: 100%;
    max-width: 350px;
    margin: auto;
  }

  &:hover {
    background: purple;
  }

}

div {
  .calc {
    cursor: pointer;
  }
}

</style>