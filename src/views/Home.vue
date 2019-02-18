<template>
  <div id="home">
    <img src="../assets/logo.png" alt="Where It's @ logo" title="Where It's @ logo">
    <h1 class="title">Where It's &#64;</h1>
    <span>Tickets for every moment</span>

    <a class="btn" @click="$router.push('/events')">Go to events</a>

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
  background: gray;

  .title {
    color: #FF67B3;
  }

  a {
    margin-top: 2rem;
    text-transform: uppercase;
  }

}

</style>