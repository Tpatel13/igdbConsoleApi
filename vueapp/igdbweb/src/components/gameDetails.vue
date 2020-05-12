<template>
  <div class="container">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">#Key</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, name,index) in data" v-bind:key="value.id">
            <th scope="row">{{index}}</th>
            <td>{{name}}</td>
            <td>{{value}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameDetails",
  props: ["data"],
  methods:{
    
  }
};
</script>


