export default defineEventHandler(async (event) => {

    // // Handle query params
    // const { name } = getQuery(event)

    // // Handle post data
    // const { age } = await readBody(event)

    // return {
    //     message: `Hello, ${name || 'bro'}! Your are ${age} years old.`
    // }

    // Api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=RHmu7guu8MoqSvh7zDAiJiIgrClcunqAIoJf3o4L')

    return data
})