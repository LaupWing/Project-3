<template>
  <div class="container">
      <form class="login">
          <div class="input-field">
            <label for="">Gebruikersnaam</label>
            <input 
                v-model="username" 
                type="text">
          </div>
          <div class="input-field">
            <label for="">Wachtwoord</label>
            <input 
                v-model="password" 
                type="text">
          </div>
          <button v-on:click="submitInfo">submit</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
      return{
          username: '',
          password: '',
          fullname: ''
      }
  },
  props: {

  },
  methods:{
      submitInfo: function(){
          event.preventDefault()
          console.log('test')
          this.fullname = this.username + this.password
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.login{
    background: #4B2FA2;
    color: white;
    padding: 20px 40px;
    border-radius: 10px;
}
.login .input-field{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 30px 0;
}
.login label{
    width: 100%;
    text-align: left;
    font-size: 14px;
}
.login .input-field input[type="text"]{
    border: none;
    border-bottom: #FFD259 solid 3px;
    width: 300px;
    padding: 7px 10px;
    outline: none;
    transition: .25s; 
}
.login .input-field input[type="text"]:focus{
    border-bottom: #FFD259 solid 5px;
}
.login button{
    width: 100%;
    color: white;
    text-transform: uppercase; 
    padding: 10px;
    background: #1BC65B;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    opacity: .9;
    transition: .25s;
}
.login button:hover{
    opacity: 1;
}
</style>
