<template>
    <div class="visitor">
        <div class="questions">
            <div class="quetions1">
                <h2><span>Stap 1/4:</span> Werk</h2>
                <div class="choices">
                    <button v-on:click='answer("work", "frontend")'>Frontend</button>
                    <button v-on:click='answer("work", "backend")'>Backend</button>
                    <button v-on:click='answer("work", "fullstack")'>Full stack</button>
                </div>
            </div>
        </div>
        <Profile :answerObj="answerObj"/>
    </div>
</template>
<script>
import Profile from './visitor-Components/Profile'
export default {
    name: 'Visitor',
    components:{
        Profile
    },
    data(){
        return{
            answerObj:{}
        }
    },
    props:[
        'socket'
    ],
    methods:{
        answer(prop, value){
            this.answerObj[prop] = value
            console.log(this.answerObj)
        }
    }
}
</script>
<style scoped>
.visitor{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
button{
    background: #4B2FA2;
    border: solid 3px #FFD259;
    border-radius: 10px;
    padding: 10px;
    color: white;
    width: 150px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: .25s;
    cursor: pointer;
    margin: 10px;
}
button:hover{
    background: white;
    color: #4B2FA2;
}
.choices{
    margin: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
h2 span{
    color: #4B2FA2;
}
</style>
