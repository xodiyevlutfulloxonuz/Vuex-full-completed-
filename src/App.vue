<template>

  <div class="todo-container">
     <h1> Todo App</h1>
     <div class="input-field">
       <input type="text" v-model="$store.state.inputText" @keyup="handleKeyUp"/>
     </div>
     <div class="button-field">
        <button @click="addUser">Add User</button>
        
     </div>

     <Users/>
     
      
     
  </div>

</template>

<script>
import Users from './views/Users.vue'
export default {
  name:'App',
  components:{
    Users
  },
  data(){
    return{
     
    }
  },
  methods:{
    addUser(){
      this.$store.commit('addUser')  
    
    },
    handleKeyUp(event){
      this.$store.commit('handleKeyAndAddUser',{value: event.code})
      
    }
  }
  
}
</script>

<style scoped>
h1{
  text-align: center;
}
.todo-container{
  width: 80%;
  margin: 0 auto;
  
  

}
.todo-container input{
  display: block;
  width: 60%;
  margin: 0  auto;
  padding: 10px 15px;
  box-sizing: border-box;

}
button{
  width: 10%;
  padding: 10px 15px;
  background-color: green;
  color: white;
  border: none;
  outline: none;
  

}
button:hover{
  background-color: crimson;
  
}
.button-field{
  width: 80%;
  margin: 0 auto;
}

</style>
