<template>
  <div class="container">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#History</th>
            <th scope="col">#Key</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
     <tbody>
         <tr v-for="(value, name,index) in historyData" v-bind:key="index">
            <th scope="row">{{index}}</th>
            <td>{{name}}</td>
            <td>{{value}}</td>
          </tr>
      </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: "History",
  props: ["historyData"]
};
</script>


