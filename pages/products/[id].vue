<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"/>
        </Head>

        <ProductDetail :product="product"/>
    </div>
</template>

<script setup>
const { id } = useRoute().params;
const uri = 'https://fakestoreapi.com/products/' + id

// Fetch the product
const { data: product } = await useFetch(uri, { key: id })
if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
}

definePageMeta({
    layout: 'products'
});

// useHead({
//     title: 'Nuxt Dojo | ' + product.value.title,
//     meta: [
//         { name: 'description', content: product.value.description }
//     ]
// });
</script>

<style scoped></style>