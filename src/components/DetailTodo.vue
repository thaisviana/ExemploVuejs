<template>
    <div>
        <h1>DETALHAR TODO</h1>
        <p>{{ id }}</p>
    </div>
</template>

<script>
export default {
    name: "DetailTodo",
    data: function(){return{ id : this.$route.params.id  };}

}
</script>

<style>

</style>