<template>
  <div class="container">
    <GameDetails v-if="status==`gameDetails` " v-bind:data="gamedata" />

    <table v-if="status==`gameList`" class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">#ID</th>
          <th scope="col">Game Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dataa,index) in data" v-bind:key="dataa.id">
          <th scope="row">{{index}}</th>
          <td v-on:click="searchByID(dataa.id)">{{dataa.id}}</td>
          <td>{{dataa.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import GameDetails from "./gameDetails.vue";
import axios from "axios";

export default {
  name: "GameList",
  props: ["data"],
  mounted() {
    this.status = "gameList";
  },
  components: {
    GameDetails
  },
  methods: {
    searchByID: function(id) {
      this.status = "gameDetails";

      this.gameDetails = true;

      axios({
        method: "GET",
        url: `http://localhost:8081/searchByID?id=${id}`
      }).then(
        result => {
          //Adding GameData to data
          this.gamedata = result.data[0];

          //Saving this ID and name as Parent's History
          this.$parent.$set(
            this.$parent.historyData,
            this.gamedata.id,
            this.gamedata.name
          );
        },
        error => {
          console.error(error);
        }
      );
    }
  },
  data() {
    return {
      status: "",
      gameDetails: false,
      historyFlag: false,
      searchHistory: {},
      historyData: {},
      gamedata: []
    };
  }
};
</script>


