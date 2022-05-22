import { createStore } from 'vuex'

export default createStore({
  state: {
    users:[],
    inputText:'',
    isUserUpdated:{
      status:false,
      id:null
    }
  
  },
  getters: {
  },
  mutations: {
    addUser(state){
      if(state.inputText==''){
        alert('Iltimos inputni toldiring')
      }
     else if (state.isUserUpdated.status==true){
       let findUser=state.users.find(user=>user.id==state.isUserUpdated.id)
       findUser.name=state.inputText

         state.isUserUpdated.status=false
         state.isUserUpdated.id=null
         state.inputText=''

     }  

     
      else if(state.isUserUpdated.status==false){
        state.users.push({
          id:state.users.length+1,
          name:state.inputText 
        })

        state.inputText=''           
      }
     
    },
    deleteUser(state,payload){
       state.users=state.users.filter(user=>{
         return user.id!=payload.value 
       })
    },
    updateUser(state,payload){
       let findUser=state.users.find(user=>user.id==payload.value)
            state.inputText=findUser.name 
            state.isUserUpdated.status=true 
            state.isUserUpdated.id=findUser.id  
       
    },
    handleKeyAndAddUser(state,payload){
      if(payload.value=='Enter'){
        state.users.push({
         id:state.users.length+1,
         name:state.inputText
        })
        state.inputText='' 

      }
    }

  },
  actions: {
  },
  modules: {
  }
})
