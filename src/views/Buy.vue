<template>
  <main>
    <p>You are about to score some tickets to</p>

    <section>
      <h2>event</h2>
      <p>date + time</p>
      <span>this place</span>
    </section>

    <section class="rectangle">
      <div id="price" class="item">pris</div>
      <div class="item calc" @click="dec">–</div>
      <div class="item">{{ tickets }}</div>
      <div class="item calc" @click="inc">+</div>
    </section>

    <br/>

    <a class="btn" @click="$router.push('/tickets')">Consume my para $$$</a>
  </main>
</template>

<script>

export default {
  name: 'buy',
  computed: {
    tickets() {
      return this.$store.state.tickets;
    }
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
    }

    .item {
      border: 1px solid red;
      padding: 2rem;
      background: linen;
    }
  }

a {
  &.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    background: pink;
    color: white;
    height: 3rem;
    border-radius: 3px;
    width: 100%;
    max-width: 350px;
    margin: auto;
  }

  &:hover {
    background: darkred;
  }

}

div {
  .calc {
    cursor: pointer;
  }
}

</style>