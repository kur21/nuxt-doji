<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repellendus quam porro deleniti magnam voluptatibus dolorum perspiciatis
        quia, sed, ut distinctio, vitae voluptatum consectetur temporibus? Id quis ducimus tempora perspiciatis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam facilis magni obcaecati repudiandae impedit recusandae maxime et eveniet ex ipsa accusantium ad dicta, magnam quaerat numquam tenetur iusto laboriosam eaque.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/VND');
</script>

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>