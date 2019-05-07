<template>
  <div id="app">
    <header>
        <div class="logo">
            <img src="https://kv-staging.lifely.nl/assets/img/Brand@2x.png" alt="">
            <h1>Kandidaatvinden</h1>
        </div>
    </header>
    <Login/>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import io from 'socket.io-client'
export default {
  name: 'app',
  data(){
      return{
          socket: io('localhost:3000')
      }
  },
  components: {
    Login
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100vw;
    height: 100vh;
}
#app {
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: black;
    width: 100%;
    height: 100%;
}
header{
    position: fixed;
    width: 100%;
    top:0;
    background: #4B2FA2;
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7.5px;
}
.logo h1{
    color: white;
    font-size: 18px;
    margin-left: 10px;
}
.logo img{
    width: 40px;
}
</style>
