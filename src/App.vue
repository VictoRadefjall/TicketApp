  <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/events">Events</router-link> |
      <router-link to="/verify">Verify</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
     <transition name="rotate" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeMount() {
    this.$store.dispatch('getEvents');
  }
}

</script>

<style lang="scss">
@import './scss/main.scss';

:root {
  background: $background-color;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: inherit;
  // color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #f3b01e;
    &.router-link-exact-active {
       color: rgb(178, 95, 255);
    }
  }
}

.rotate-enter-active,
.rotate-leave-active {
  transition-duration: 0.2s;
  transition-property: transform;
}
.rotate-enter,
.rotate-leave-active {
  transform: rotateX(90deg);
}

</style>
