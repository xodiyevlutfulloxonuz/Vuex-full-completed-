<template>
    <div class="users">
      <h1>The number of users:{{$store.state.users.length}}</h1>
      <ul>
          <li v-for="user in getUsers" :key="user.id">
             <span> {{user.name}} </span>   <button @click="deleteUser(user.id)" class="delete"> delete</button>
             <button @click="updateUser(user.id)" class="update">Update User</button>
          </li>
      </ul>
     
    </div>
</template>

<script>
export default {
    name:'Users',

    methods:{
     deleteUser(id){
         this.$store.commit('deleteUser',{value:id})
     },
     updateUser(id){
         this.$store.commit('updateUser',{value:id})
     }
    },




    computed:{
      getUsers(){
          return this.$store.state.users 
      }
    }
}
</script>


<style scoped>
ul li{
    display: flex;
    justify-content: space-around;
}
button{
    display: inline-block;
    padding: 10px 15px;
    border: none;
    color: white;

}
.delete{
    background-color: red;
    
}
.update{
    background-color: blue;
    
}





</style>