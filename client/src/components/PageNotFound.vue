<template>
    <div class="container">
        <section>
            <div class="columns">
                <div class="column is-6">
                    <h1>404 Error</h1>
                    <h3>Oops We could't find the page...</h3>
                    <h5>Try refreshing tjhe page or going back to the homepage.</h5>
                    <p><router-link :to="{name: 'home'}">Go Back</router-link></p>
                </div>
                <div class="column is-6">
                  <img src="../assets/penguin.svg" alt="penguin">
                  
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data(){
        return {
        }
    }
}
</script>
<style scoped>
    h1{
       font-size: 4em; 
    }
    h3{
        font-size: 3.2em;
    }
    h2{
         font-size: 2.5em;
    }
</style>