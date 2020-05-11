<template>
  <div class="container">
    <table class="table">
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
          <td>{{dataa.id}}</td>
          <td>{{dataa.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "GameList",
  props: ["data"]
};
</script>


