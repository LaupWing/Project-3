<template>
    <div class="profile">
        <div class="heading">
            <h3>Profile</h3>
        </div>
        <div>
            <h4>Work</h4>
            {{answerObj}}
            <p v-if="answerObj.work">
                {{answerObj.work}}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    props:['answerObj']
}
</script>
<style scoped>
.profile{
    position: fixed;
    width: 200px;
    height: 500px;
    background: white;
    left: 0;
    border-radius: 0 10px 10px 0;
    box-shadow: 10px 10px 36px -20px rgba(0,0,0,0.75);
}
.heading{
    width: 100%;
    background: #4B2FA2;
    padding: 10px;
    color: white;
    border-radius: 0 10px 0 0;
}
</style>
