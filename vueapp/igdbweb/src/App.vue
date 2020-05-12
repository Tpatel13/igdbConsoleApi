<template>
  <div id="app" class="container">
    <div class="form-group">
      <label for="Input Search">Seach Game</label>
      <input
        type="text"
        name="test"
        ref="searchName"
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

    <GameList v-if="status==`gameList`" v-bind:data="data" />
    <GameDetails v-if="status==`gameDetails` " v-bind:data="data" />
    <History v-if="status==`history`" v-bind:historyData="historyData" />

    <router-view />
  </div>
</template>

<script>
import GameList from "./components/GameList.vue";
import GameDetails from "./components/gameDetails.vue";
import History from "./components/History.vue";

import axios from "axios";

export default {
  name: "App",
  components: {
    GameList,
    GameDetails,
    History
  },
  methods: {
    search: function() {
      this.status = "gameList";
      this.gameDetails = false;
      this.$refs.idField.value = "";
      axios({
        method: "GET",
        url: `http://localhost:8081/search?name=${this.$refs.searchName.value}`
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
      this.status = "gameDetails";
      this.$refs.searchName.value = "";
      this.gameDetails = true;

      //If we already have object in local It will not call to Server
      if (this.searchHistory[this.data.id] != null) {
        this.data = this.searchHistory[this.data.id];
      }

      //Calling to Server
      else {
        axios({
          method: "GET",
          url: `http://localhost:8081/searchByID?id=${this.$refs.idField.value}`
        }).then(
          result => {
            //Adding GameData to data
            this.data = result.data[0];
            let id = this.data.id;

            //Saving this ID and name as History
            this.$set(this.historyData, id, this.data.name);

            //Saving in SearchHistory Data
            this.$set(this.searchHistory, id, this.data);

          },
          error => {
            console.error(error);
          }
        );
      }
    },
    historyShow: function() {
      console.log(this.historyData);
      this.status = "history";
    }
  },
  data() {
    return {
      status: "",
      gameDetails: false,
      historyFlag: false,
      searchHistory:{},
      historyData: {},
      data: []
    };
  }
};
</script>

<style>
</style>
