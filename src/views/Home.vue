<template>

  <div id="home">
    <img src="../assets/logo.png" alt="Where It's @ logo" title="Where It's @ logo">
    <h1 class="title">Where It's &#64;</h1>
    <span>Tickets for every moment</span>
    <a class="button" @click="$router.push('/events')">Go to events</a>

  </div>


</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
}
</script>

<style lang="scss">
@import '../scss/main.scss';


#home {
  color: white;
  margin-top: 5vw;

  .title {
    color: rgb(255, 182, 46);
  }

  a {
    margin-top: 2rem;
    text-transform: uppercase;
    text-decoration: none;
  }
  .button {
    @extend %center;
    border: solid 1px rgba(255, 255, 255, 0.842);
    color: rgb(255, 251, 232);
    height: 2.5rem;
    border-radius: 3px;
    max-width: 20rem;
    padding: .8rem;
    margin: auto;
    margin-top: 1rem;
    cursor: pointer;
  }

  .button:hover {
    background: orange;
    border: none;
  }

}

</style>
