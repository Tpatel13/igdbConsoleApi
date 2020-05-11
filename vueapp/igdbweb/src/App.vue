<template>
  <div id="app" class="container">
    <div class="form-group">
      <label for="Input Search">Seach Game</label>
      <input
        type="text"
        name="test"
        ref="myTestField"
        class="form-control"
        placeholder="Enter Game Name to Search"
      />
      <input
        type="text"
        name="test"
        ref="idField"
        class="form-control"
        placeholder="Enter Game ID to Search"
      />


      <small id="emailHelp" class="form-text text-muted">This will search in IGDB</small>
    </div>

    <button v-on:click="search" type="submit" class="btn btn-primary">Submit</button>
    <button v-on:click="searchByID" type="submit" class="btn btn-primary">Search By ID</button>
    <button v-on:click="historyShow" type="submit" class="btn btn-primary">History</button>

    <GameList v-if="!gameDetails" v-bind:data="data" />
    <GameDetails v-if="gameDetails" v-bind:data="data" />
    <History v-if="historyFlag" v-bind:data="historyData" />

  </div>
</template>

<script>
import GameList from "./components/GameList.vue";
import GameDetails from "./components/gameDetails.vue";
import History from "./components/History.vue"
import axios from "axios";

export default {
  name: "App",
  components: {
    GameList,
    GameDetails,History
  },
  methods: {
    search: function() {
      this.gameDetails = false;
      this.$refs.idField.value = "";
      axios({
        method: "GET",
        url: `http://localhost:8081/search?name=${this.$refs.myTestField.value}`
      }).then(
        result => {
          this.data = result.data;
        },
        error => {
          console.error(error);
        }
      );
    },
    searchByID: function() {
      this.$refs.myTestField.value = "";
      this.gameDetails = true;
      axios({
        method: "GET",
        url: `http://localhost:8081/searchByID?id=${this.$refs.idField.value}`
      }).then(
        result => {
          this.data = result.data[0];
        },
        error => {
          console.error(error);
        }
      );
    },
    historyShow:function()
    { 
    }
  },
  data() {
    return {
      gameDetails: false,
      historyFlag:false,
      historyData:{},
      data: []
    };
  }
};
</script>

<style>
</style>
