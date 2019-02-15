<template>
<router-link :to="{ name:'name', params: { name: item.name } }">
  <article class="event">
    <section class="date">
      <div>
        <p>{{ item.date.date }}</p>
        <p>{{ item.date.month }}</p>
      </div>
    </section>
    <section class="info">
      <h1>{{ item.name }}</h1>
      <p>{{ item.place }}</p>
      <p>{{ item.startTime }} - {{ item.endTime }}</p>
      <p>{{ item.price }} SEK</p>
    </section>
  </article>
</router-link>
</template>

<script>
export default {
  name: 'event',
  props: ['item']
}
</script>

<style lang="scss">
@import '../scss/main.scss';

a {
  text-decoration: none;
}

.event {
  display: flex;
  color: White;
  margin: 2rem;

  section {
    font-family: Fira Sans;
    display: flex;
    flex-direction: column;
    flex: 1;

    p, h1 {
      margin: .25rem;
      padding: .25rem;
    }
  }

  .date { // datumrutan
    div {
      width: 80px;
      height: 80px;
      @extend %center;
      flex-direction: column;
      border: 2px solid White;
      border-radius: 5px;
      margin: 1rem;

      p {
        text-transform: uppercase;
        margin: 0;
        padding: 0;
      }
      :nth-child(1) {
        font-weight: bold;
      }
      :nth-child(2) {
        font-size: 0.6rem;
      }
    }
  }

  .info { // informationsrutan
    flex: 3;
    align-items: baseline;
    border-bottom: .5px solid #eee;

    h1, p {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-family: Fira Sans;
      font-size: 2rem;
      margin-top: 1rem;
    }

    :nth-child(2) { // platsen
      font-style: italic;
    }
    :nth-child(3) { // tiden
      margin-top: .5rem;
    }
    :nth-child(4) { // priset
      color: Khaki;
      font-weight: bold;
      font-size: 1.2rem;
      align-self: flex-end;
      margin: 0 .3rem .3rem 0;
    }
  }
}

body { // fult kodad css, ta bort sen
  background-color: MidnightBlue;
  color: White;
}

</style>
