<template>
  <main>
    <section v-for="event in event" :key="event.id" :item="item" class="buy">

    <p class="intro">You are about to score some tickets to</p>

    <section class="event-info">
      <h2> {{ event.name }} </h2>
      <p>{{ event.date.date }} {{ event.date.month }} {{ event.startTime }} - {{ event.endTime }}</p>
      <span> @ {{ event.place }} </span>
    </section>

    <section class="rectangle">
      <div id="price" class="item"> {{ event.price * numOfTickets }} SEK </div>
      <div class="item calc" @click="dec">–</div>
      <div class="item"> {{ numOfTickets }} </div>
      <div class="item calc" @click="inc">+</div>
    </section>

    <section class="name">
      <span class="event-info">Personalize your ticket</span>
      <input type="text" v-model="name" placeholder="Enter your name..." />
    </section>

    <div class="button">
      <router-link :to="{ name: 'tickets', params: { code: event } }">
        <a class="btn" @click="buyTickets">Pay for my ticket(s)</a>
      </router-link>
    </div>

    </section>
  </main>

</template>

<script>

export default {
  name: 'buy',
  props: ['item'],
  data() {
    return {
      name: ''
    }
  },
  computed: {
    tickets() {
      return this.$store.state.tickets;
    },
    numOfTickets() {
      return this.$store.state.numOfTickets;
    },
    event() {
      var name = this.$route.params.name;
      return this.$store.state.events.filter(function(item) {
        return item.name == name
      })
    },
  }, 
  methods: {
    inc() {
      this.$store.commit('inc');
    },
    dec() {
      this.$store.commit('dec');
    },
    buyTickets() {
      this.$store.dispatch('buy', {event: this.event[0]._id, uniqueName: this.name, numOfTickets: this.numOfTickets })
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Libre+Barcode+39+Text|Sansita');
@import '../scss/main.scss';

main {
  background: inherit;
  padding: 20px;
}

// GRID AREAS AND LAYOUT
.buy {
    max-width: 22rem;
    width: 100%;
    height: auto;
    padding: 5px;
    margin: auto;
    margin-bottom: 3.12rem; /* 50px/16px*/
    background-image: linear-gradient( rgb(241, 163, 46), #D97119);
    border-top: 8px solid rgb(201, 80, 11);
    border-radius: 5px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px 50px 5px 150px 5px 30px 200px 30px 50px 80px;
    grid-template-areas:
    "."
    "intro"
    "."
    "event"
    "."
    "rectangle"
    "."
    "name"
    "."
    "btn"
    ;
}

.intro {
  grid-area: intro;
  padding-top: .3rem;
  color: rgb(201, 80, 11);
  font-size: 1.1rem;
}

.name {
  grid-area: name;

  input[type="text"] {
    height: 5vh;
    width: 50vw;
    max-width: 240px;
    color: rgb(36, 36, 36);
    background: rgb(247, 244, 244);
    font-size: 1rem;
    border: none;
    padding: .5rem;
    border-radius: 3px;
    margin-top: .35rem;
  }
}

.event-info {
  width: 100%;
  // background: #fff;
  grid-area: event;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  color: rgba(255, 255, 255, 0.836);
}


// NESTED CLASSES W. HOVER AND CHILDS
.rectangle {
    grid-area: rectangle;
    display: grid;
    max-width: 250px;
    width: 100%;
    font-weight: 700;
    margin: auto;

    #price {
      grid-column: 1 / span 3;
      font-size: 2.2rem;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    .item {
      border: 1px solid rgb(201, 80, 11);
      padding: 2rem;
      color: white;
    }

    :nth-child(2) {
      border-bottom-left-radius: 3px;
    }

    :nth-child(4) {
      border-bottom-right-radius: 3px;
    }
  
  }


a {
  text-decoration: none;
  border-radius: 3px;
  
  &.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px rgba(255, 255, 255, 0.842);
    color: rgb(255, 251, 232);
    height: 1.5rem;
    border-radius: 3px;
    max-width: 80vw;
    width: 18rem;
    padding: .8rem;
  }

  &:hover {
    background: rgba(5, 2, 20, 0.308);
    // font-size: 1.2rem;
    text-decoration:none;
    border: none;
    border-radius: 5px;
  }

}

div {
  .calc {
    cursor: pointer;
  }
}

.button {
  grid-area: btn;
  display: flex;
  align-items: center;
  justify-content: center;
}


// FONT COLORS & SIZE

p {
  font-family: 'Fira Sans', sans-serif;
}
h2 {
  margin: 1rem 0 0 0;
  color: rgb(255, 255, 255);
  font-family: 'Sansita', sans-serif;
  font-size: 2rem;
  letter-spacing: 2px;
}

.event{
  p {
    font-size: .8rem;
  }

}

</style>
