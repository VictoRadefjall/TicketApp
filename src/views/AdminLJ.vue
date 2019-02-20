<template>
  <main id="admin">
    <h1>Admin</h1>
    <section class="container">
      <table cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Where</th>
            <th>Spots</th>
            <th>Tickets left</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event in events" :key="event._id">
            <td>{{ event.name }}</td>
            <td>{{ event.place }}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <aside class="form">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Location" v-model="place">
        <input type="text" placeholder="Adress" v-model="adress">
        <input type="text" placeholder="Price" v-model="price">
        <input type="text" placeholder="Date" v-model="date.date">
        <input type="text" placeholder="Month" v-model="date.month">
        <input type="text" placeholder="Starttime" v-model="startTime">
        <input type="text" placeholder="Endtime" v-model="endTime">
        <input type="number" placeholder="Number of tickets">
        <a href="#" class="btn" @click="createEvent()"></a>
      </aside>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AdminLJ',
  data() {
    return {
      name: "",
      place: "",
      adress: "",
      price: 0,
      date: {
        date: "",
        month: "",
      },
      startTime: "",
      endTime: "",
      spots: Number // byt namn? total tickets?
    }
  },
  computed: {
    events() {
      return this.$store.state.events
    }
  },
  methods: {
    async createEvent() {
      let resp = await this.$http.post('http://localhost:3000/events', this.data);
      console.log(resp)

      this.$store.dispatch('getEvents')
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

#admin {
  display: flex;
  justify-content: center;
  flex-direction: column;

  .container {
    display: grid;
    grid-template-columns: 4fr 1fr;
    max-width: 1000px;
    width: 100%;

    table {
      background: rgba($color: White, $alpha: .5);
      padding: 1rem;

      thead {
         tr {
           th {
             color: HotPink;
             text-align: left;
           }
         }
      }

      tbody {
        tr {
          padding: 1rem;

          td {
            color: rgba($color: White, $alpha: .8);
            text-align: left;
          }

          &:nth-child(2n) {
            background: rgba($color: White, $alpha: 0.1)
          }
        }
      }
    }

    .form {
      background: rgba($color: White, $alpha: .5);

      input {
        width: 100%;
        background: none;
        border: 1px solid HotPink;
        border-radius: 3px;
        padding: .5rem;
        font-size: 1.2rem;
        color: White;
      }
    }
  }
}

</style>
