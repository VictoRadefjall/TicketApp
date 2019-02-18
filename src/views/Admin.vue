<template>


<main>

    <div class="grid-temp">

        <div class="logo">
            <img src="../assets/logo.png" alt="Where It's atlogo" style="width: 50px;height: 50px;" />
        </div>

        
        <div class="events-list">
        
        </div>

            <div class="add-event">
                <h2>Add Event</h2>
                <form action="/action_page.php" class="formular">
                    <input class="e-name" type="text" name="Event name" value="Name"><br>
                    <input class="e-where" type="text" name="Where" value="Where"><br>
                    <input class="e-date" type="text" name="Date" value="Date"> <br>
                    <input class="e-from" type="text" name="Time" value="From Time"> <input type="text" name="Time" value="To Time"> <br>
                    <input class="e-seat" type="text" name="Seat" value="# Seats"><br>
                    <input class="e-add" type="submit" value="Add the event">
                </form>
            </div>
        
    </div>
</main>


</template>

<script>

export default {
    name: 'admin',
    
    computed: {
    events() {
      return this.$store.state.events;
    }
  }

}

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Libre+Barcode+39+Text|Sansita');

.grid-temp{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 75px 500px;
    grid-template-areas: 
    "logo logo"
    "left right"
    ;
}

.logo {
    grid-area: logo;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
}

.events-list{
    grid-area: left;
    color: white;
    background: purple;
    width: 100%;
    height: auto;
}

.add-event{
    grid-area: right;
    color: white;
    // background: plum;
    width: 100%;
    border: solid white 2px;
}

.formular {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20px 20px 20px 20px 20px 20px;
    grid-template-areas: 
    "name"
    "where"
    "date"
    "from to"
    "seats ."
    "add-event ."
    ; 
}
.e-name{
    grid-area: "name";
}
.e-where{
    grid-area: "where";
}
.e-date{
    grid-area: "date";
}
.e-from{
    grid-area: "from";
}
.e-to{
    grid-area: "to";
}
.e-seats{
    grid-area: "seats";
}
.e-add{
    grid-area: "add-event";
}


</style>
