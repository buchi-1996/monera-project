<template>
  <div class="h-screen">
    <header class="flex flex-col justify-between sm:flex-row w-full sm:h-4/6 sm:py-5">
      <img src="~assets/contributors-sillouhette.png" alt="">
      <div class="flex flex-col justify-center mt-10 sm:w-6/12 w-full">
        <a href="#" class="flex flex-row items-center space-x-1 mb-5">
          <Logo />
          <span class="font-default font-extralight text-4xl text-charcoal-light tracking-tighter">creator</span>
        </a>
        <h2 class="mb-5 text-xl font-medium">
          Become a contributor at MorenaPixels
        </h2>
        <p>
          Share your work and get paid doing what you love
        </p>
        <nuxt-link to="/auth/register" class="bg-monsell-dark-red block mb-5 mt-10 py-3 rounded-md text-center text-white w-3/12">
          Join now
        </nuxt-link>
      </div>
    </header>
    <section class="bg-white sm:h-3/4 -mr-10 -ml-10 pt-10 sm:py-5">
      <h2 class="font-medium text-center text-4xl">
        Here's how it works
      </h2>
      <div class="flex flex-col sm:flex-row justify-between items-center text-7xl font-extralight sm:h-3/4 px-36">
        <p>Sign up</p>
        <p>Share</p>
        <p>Earn</p>
      </div>
    </section>
    <section class="bg-landing-body sm:h-3/4 items-center -mr-10 -ml-10 pt-10 px-10 sm:flex flex-row sm:space-x-6 sm:py-5">
      <div class="flex flex-col sm:w-5/12 w-full">
        <h2 class="font-extralight text-charcoal-main text-6xl mb-2">
          Global <br> Community
        </h2>
        <p class="text-xl text-charcoal-light">
          Join our community of contributors across the world, committed to increasing the representation of people of color on the internet, and earn while doing it!
        </p>
        <nuxt-link to="/auth/register" class="bg-monsell-dark-red mb-5 mt-10 py-3 rounded-md text-center text-white w-full sm:w-6/12">
          Join other creators today
        </nuxt-link>
      </div>
      <div class="sm:w-7/12 w-full">
        <img src="~assets/construction-silhouette 1.png" alt="" class="w-full h-full sm:h-3/4">
      </div>
    </section>
    <section class="-ml-10 -mr-10 bg-eerie-black flex flex-col items-center justify-center pt-10 px-10 p-10 sm:py-5">
      <h2 class="text-white">
        Join us to build the future of diverse stock content for people of color
        Need more information? check our FAQ’s
      </h2>
      <p class="text-charcoal-light">
        Need more information? check our FAQ
      </p>
      <nuxt-link to="/auth/register" class="bg-white mb-5 mt-10 py-3 rounded-md sm:w-3/12 text-center w-full">
        Join now
      </nuxt-link>
    </section>
    <footer class="bg-white p-15 flex sm:flex-row flex-col -mr-10 -ml-10">
      <img src="~assets/logo-icon.png" alt="" class="sm:h-10 sm:mr-10 sm:w-auto sm:mb-0 w-3/12 mb-6">
      <div class="sm:w-2/12 w-full mb-10 sm:mb-0">
        <h2>Information</h2>
        <ul>
          <li class="text-gray-300">
            Referral program
          </li>
          <li class="text-gray-300">
            Submission guidelines
          </li>
          <li class="text-gray-300">
            Earnings breakdown
          </li>
          <nuxt-link to="/auth/register">
            Be a contributor
          </nuxt-link>
        </ul>
      </div>
      <div class="sm:w-2/12 w-full mb-10 sm:mb-0">
        <h2>Legal</h2>
        <ul>
          <li class="text-gray-300">
            Liscensing information
          </li>
          <li>
            <nuxt-link to="/privacy-policy">
              Privacy policy
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms-and-condition">
              Terms of use
            </nuxt-link>
          </li>
          <li class="text-gray-300">
            Copywrite information
          </li>
        </ul>
      </div>
      <div class="sm:w-2/12 w-full mb-10 sm:mb-0">
        <h2>Need help?</h2>
        <ul>
          <nuxt-link to="contact-us">
            Contact us
          </nuxt-link>
          <li class="text-gray-300">
            Support
          </li>
          <li class="text-gray-300">
            FAQ
          </li>
        </ul>
      </div>
      <div class="flex flex-col mb-10 sm:mb-0 sm:w-4/12 w-full">
        <select name="" class="block right-0 float-right">
          <option value="English">
            English
          </option>
        </select>
        <label for="subscribe" class="text-charcoal-light">
          Subscribe to our newsletter to receive new, updates, and free stuff by email.
        </label>
        <div class="mt-2">
          <input id="subscribe" v-model="user_email" type="email" class="bg-charcoal-light rounded py-2 px-2" placeholder="Email address">
          <button class="bg-black rounded text-white p-2" @click="signUp">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  auth: false,
  data () {
    return {
      result: [],
      user_email: '',
      contributor_list: 'eyJpdiI6IlRya054TFwvY1FsZzVlRHZRMTczejR3PT0iLCJ2YWx1ZSI6IjBCY2dHZ1pkN01WVTBocW1NN2lZaXZkQnp0Z3dDS083c2xHMm5JeUpXYVk9IiwibWFjIjoiNGFiYWYwZmJjNTFjMzQ5M2Y5Njk5YTBmYjE5MjViODViNmU1Y2U1NzQ5OWY2MzI5Nzk3MjEzZjE1NDRhOThkMiJ9',
      contributor: false
    }
  },
  methods: {
    async signUp () {
      if (!this.user_email) {
        return
      }

      const response = await this.$axios.$post('lists/subscribe/json', {
        email_list_id: this.contributor_list,
        email: this.user_email
      })

      this.user_email = ''

      this.result = response.data

      return response
    }
  }
}
</script>

<style>
footer h2
{
  @apply font-bold mb-6
}

</style>
