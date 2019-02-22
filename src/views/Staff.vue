<template>
<main id="staff">
  <img src="../assets/logo.png" alt="Where It's @ logo" />
  <h3>Where it's @</h3>
  <h1>Staff</h1>

  <section class="validation" v-if="verifyData">
    <p v-if="verifyData.verified" class="valid"> {{ verifyData.message }} </p>
    <p v-if="!verifyData.verified" class="invalid"> {{ verifyData.message }} </p>
  </section>

  <!-- -->

  <div class="modal" v-show="showModal">
    <h2>Which event?</h2>
    <ul>
      <li v-for="event in events" :key="event._id" @click="chooseEvent(event)">
        {{ event.name }}
      </li>
    </ul>
  </div>

  <!-- -->

  <section class="verifyForm" v-show="!showModal">
    <input type="text" name="code" :value="code.toUpperCase()" placeholder="Enter ticketcode" @input="code = $event.target.value.toUpperCase()" onkeypress="return ((event.charCode > 64 && event.charCode < 90) || (event.charCode > 96 && event.charCode < 123) || event.charCode == 32 || (event.charCode >= 48 && event.charCode <= 57));" @keydown.space="(event) => event.preventDefault()" maxlength="6" />
    <a href="#" @click="verifyTicket">Verify</a>
  </section>
</main>
</template>

<script>
export default {
  name: 'verify',
  data() {
    return {
      code: '',
      ///
      showModal: true,
      // currentEvent = eventet som man ska kolla biljetter till denna gången, skickas med i verify? hur?
      currentEvent: ""
      ///
    }
  },
  computed: {
    verifyData(){
      return this.$store.state.verifyData;
    },
    events(){
      return this.$store.state.events;
    }
  },
  methods: {
    verifyTicket(){
      this.$store.dispatch('verifyTicket', this.code);
    },
    /// anger vilket event man kollar biljetter till
    chooseEvent(event){
      this.showModal = false;
      this.currentEvent = event.name;
      console.log(this.currentEvent)
    }
    ///
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

#staff {
  margin-top: 3vw;
  background: inherit;

  h1 {
    text-transform: uppercase;
  }

  h3 {
    margin-top: 0rem;
    color: #FF67B3;
  }

  .modal {
    @extend %center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    color: White;

    h2 {
      color: Hotpink;
    }
    ul {
      @extend %center;
      flex-direction: column;
      padding: 0;

      li {
        list-style: none;
        font-size: 1.2rem;
        padding: .2rem;
        cursor: pointer;
      }
    }
  }


  .verifyForm {
    @extend %center;
    flex-direction: column;
    background: #FF67B3;
    margin: auto;
    width: 75vw;
    max-width: 500px;
    border-radius: 10px;

      input[type="text"] {
        background: black;
        text-align: center;
        text-transform: uppercase;
        height: 10vh;
        border: none;
        width: 80vw;
        max-width: 500px;
        color: white;
        font-size: 1.5em;
        caret-color: HotPink;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: white;
        padding: 1rem;
        background: none;
        font-size: 1.2em;
        display: block;
        width: 80vw;
        max-width: 500px;
        transition: 0.5s;
      }
    }

    a:hover {
      margin: 10px;
      font-size: 1.8em;
    }

  .valid {
    color: green;
  }
  .invalid {
    color: red;
  }
}


</style>
