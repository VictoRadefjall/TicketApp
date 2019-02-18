<template>
<main id="staff">
  <img src="../assets/logo.png" alt="Where It's @ logo" />
  <h3>Where it's @</h3>
  <h1>Staff</h1>

  <section class="validation">
    <!-- Infoga meddelande -->
    <p></p>
  </section>

  <section class="verifyForm">
    <input type="text" name="code" placeholder="Enter ticketcode" @input="code = $event.target.value.toUpperCase()" onkeypress="return ((event.charCode > 64 && event.charCode < 90) || (event.charCode > 96 && event.charCode < 123) || event.charCode == 32 || (event.charCode >= 48 && event.charCode <= 57));" @keydown.space="(event) => event.preventDefault()" maxlength="6" />
    <a href="#" @click="verifyTicket">Verify</a>
  </section>
</main>
</template>

<script>
export default {
  name: 'staff',
  data() {
    return {
      code: ''
    }
  },
  methods: {
     /* verifyTicket(){
        this.$store.dispatch('verifyTicket', this.code);
      } */
  },
  computed: {
    // Lägg till verify
  }
}
</script>

<style lang="scss">
@import '../scss/main.scss';

#staff {
  margin-top: 3vw;

  h1 {
    text-transform: uppercase;
  }
  
  h3 {
    margin-top: 0rem;
    color: #FF67B3;
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
        width: 99.5%;
        height: 10vh;
        border: none;
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
        width: inherit;
        transition: 0.5s;
      }
    }

    a:hover {
      margin: 10px;
      font-size: 1.8em;
    }


}


</style>
