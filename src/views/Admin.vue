<template>


<main>

    <div class="grid-temp">

        <div class="logo">
            <img src="../assets/logo.png" alt="Where It's atlogo" style="width: 50px;height: 50px;" />
        </div>

        
        <div class="events-list">
        <div class="headings">
            <h3>Name</h3> 
            <h3>Where</h3> 
            <h3>Number of Seats</h3> 
            <h3>Sold</h3>
        </div>
    
        </div>

            <div class="add-event">
                <h2>Add Event</h2>
                <div class="container">
                    <form action="/action_page.php">
                        <div class="row">
                        <div class="col-75">
                            <input type="text" id="fname" name="firstname" placeholder="Event name..">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Where is it..">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="When is it..">
                        </div>
                        </div>
                            <div class="row">
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Start time..">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="End time..">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Number of seats..">
                        </div>
                        </div>
                        
                        <div class="row">
                        <input type="submit" value="Submit">
                        </div>
                    </form>
                </div>
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
    color: rgb(255, 71, 246);
    width: 100%;
    height: auto;
    background: rgba(117, 117, 212, 0.301);
}

.headings {
    display: flex;
    justify-content: flex-start;
    border-bottom: solid 2px grey;

        h3{
        font-size: 1rem;
        margin-right: 2rem;

    }
}

.add-event{
    grid-area: right;
    color: white;
    width: 75%;
    border: solid white 2px;
}

//FORM STYLING

input[type=text], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type=submit] {
  background-color: #4CAF50;
  color: none;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  float: left;
}

input[type=submit]:hover {
  background-color: #45a049;
}

.container {
  border-radius: 5px;
  background-color: none;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 20%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 60%;
  margin-top: 6px;
}

/* Clear floats after the columns  for submit button */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - Shrinks iput fields */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 75%;
    margin-top: 0;
  }
}

</style>
