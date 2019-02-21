<template>
  <main id="admin">
    <h1>Admin</h1>
    <section class="container">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Total tickets</th>
            <th>Tickets left</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event._id">
            <td>{{ event.name }}</td>
            <td>{{ event.place }}</td>
            <td>{{ event.tickets.spots }}</td>
            <td>{{ event.tickets.spots - event.tickets.sold }}</td>
          </tr>
        </tbody>
      </table>
      <aside class="form">
        <h2>Add event</h2>
        <input type="text" placeholder="Name" class="name" v-model="newEvent.name">
        <input type="text" placeholder="Location" class="location" v-model="newEvent.place">
        <input type="text" placeholder="Adress" class="adress" v-model="newEvent.adress">
        <input type="number" placeholder="Price" class="price" v-model="newEvent.price">
        <input type="text" placeholder="Date" class="date" v-model="newEvent.date.date">
        <input type="text" placeholder="Month" class="month" v-model="newEvent.date.month">
        <input type="text" placeholder="Starttime" class="starttime" v-model="newEvent.startTime">
        <input type="text" placeholder="Endtime" class="endtime" v-model="newEvent.endTime">
        <input type="number" placeholder="Number of tickets" class="spots" v-model="newEvent.spots">
        <div>
          <a href="#" class="btn" @click="createEvent()">Add event</a>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AdminLJ',
  data() {
    return {
      newEvent: {
        name: "",
        place: "",
        adress: "",
        price: Number,
        date: {
          date: "",
          month: "",
        },
        startTime: "",
        endTime: "",
        spots: Number
      }
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  methods: {
    async createEvent() {
      this.$store.dispatch('createEvent', this.newEvent);

      this.$store.dispatch('getEvents')
    }
  },
  beforeMount() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

#admin {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 2rem;
  color: White;

  .container {
    display: grid;
    grid-template-columns: 3fr 1fr;

    table {
      background: Black;
      box-sizing: border-box;
      padding: 1rem;
      margin: 1rem;

      thead {
         tr {
           th {
             color: HotPink;
             text-align: left;
             padding: 1rem;
           }
         }
      }

      tbody {
        tr {
          padding: 1rem;

          td {
            color: rgba($color: White, $alpha: .8);
            text-align: left;
            padding: 1rem;
          }

          &:nth-child(2n) {
            background: rgba($color: White, $alpha: 0.1)
          }
        }
      }
    }

    aside {
      background: Black;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 4rem 3rem 3rem 3rem 3rem 3rem 3rem 3rem 2rem;
      grid-template-areas:
      "title title"
      "name name"
      "location adress"
      "price price"
      "date month"
      "starttime endtime"
      "spots spots"
      "btn ."
      ;
      grid-gap: .5rem;
      box-sizing: border-box;
      padding: 1rem;
      margin: 1rem;

      h2 {
        color: HotPink;
        grid-area: title;
        text-align: left;
        margin-left: .5rem;
      }

      input {
        width: 100%;
        background: none;
        color: White;
        border: 1px solid White;
        border-radius: 3px;
        font-size: 1.2rem;
        padding: .5rem;
        margin-right: .25rem;
        box-sizing: border-box;

        &.name {grid-area: name;}
        &.location {grid-area: location;}
        &.adress {grid-area: adress;}
        &.price {grid-area: price;}
        &.date {grid-area: date;}
        &.month {grid-area: month;}
        &.starttime {grid-area: starttime;}
        &.endtime {grid-area: endtime;}
        &.spots {grid-area: spots;}
      }

      div {
        @extend %center;
        background: Hotpink;
        grid-area: btn;
        padding: 0;
        margin: .5rem .5rem 0 0;
        align-items: center;

        a {
          text-decoration: none;
          color: White;
          text-transform: uppercase;
        }
      }

    }
  }

  @media screen and (max-width: 480px) {

    .container {
      grid-template-columns: 1fr;
      width: 100%;

      table {
        margin: 0;
      }

      aside {
        margin: 1rem 0 0 0;
      }
    }
  }
}



</style>
