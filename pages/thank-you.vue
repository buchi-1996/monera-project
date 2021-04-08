<template>
  <div class="thank-you-bg h-screen px-8 py-12">
    <Logo />
    <div class="flex flex-col justify-center w-full">
      <div class="flex flex-col h-screen items-center justify-center w-full">
        <h2 class="text-center text-3xl font-bold mb-4">
          Thanks for signing up to be notified
        </h2>
        <nuxt-link to="/" class="mr-2 text-dark button--primary">
          Back to homepage
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
  .thank-you-bg {
    background-color: #E5E5E5;
  }
</style>
