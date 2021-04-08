<template>
  <div class="bg-white flex flex-row justify-between items-center px-15 py-4">
    <nuxt-link to="/" class="flex flex-row items-center space-x-1">
      <Logo />
      <span class="font-default font-extralight text-4xl text-charcoal-light tracking-tighter">creator</span>
    </nuxt-link>
    <ul class="hidden sm:flex flex-row justify-evenly space-x-10">
      <li>
        <nuxt-link to="/terms-and-condition">
          Terms and conditions
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/privacy-policy">
          Privacy Policy
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact-us">
          Contact Us
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
