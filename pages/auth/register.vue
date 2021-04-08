<template>
  <div>
    <div class="flex flex-col items-center mb-5">
      <p class="text-md text-charcoal-main">
        Join our Community and start earning extra income
      </p>
      <h2 class="font-bold text-3xl text-charcoal-dark">
        Create your account here
      </h2>
    </div>
    <ul v-if="form.errors.any()">
      <li v-for="(error, index) in form.errors.all()" :key="index">
        {{ error.toString() }}
      </li>
    </ul>
    <form @submit.prevent="register" @keyup="form.errors.clear()">
      <text-input v-model="form.legal_name" label="Full Name (Legal Name)" type="text" placeholder="Enter your full name here" />
      <text-input v-model="form.name" label="Display Name (For customers to see)" type="text" placeholder="Enter your display name here" />
      <text-input v-model="form.email" label="Email address" type="email" placeholder="Enter your email address here" />
      <text-input v-model="form.password" label="Password" type="password" placeholder="********" />
      <text-input v-model="form.password_confirmation" label="Confirm Password" type="password" placeholder="********" />
      <div class="mb-4">
        <input id="agree_to_terms" type="checkbox" name="agree_to_terms" required>
        <label class="text-charcoal-light-text text-sm mb-2" for="agree_to_terms">
          I certify that I am 18 or older and I agree to the <nuxt-link to="terms" class="text-pale-red">terms of service</nuxt-link> and <nuxt-link to="privacy-policy" class="text-pale-red">privacy policy</nuxt-link>
        </label>
      </div>
      <form-button type="primary" label="Sign up" class="mb-2" />
      <form-button icon="google" type="secondary" label="Or sign-up with google" />
    </form>
    <nuxt-link to="/auth/login" class="block text-center mt-10 mb-5">
      Already have an account? <span class="text-pale-red">Log in</span>
    </nuxt-link>
    <Logo class="w-full" />
  </div>
</template>

<script>
import TextInput from '~/components/TextInput.vue'

export default {
  components: { TextInput },
  layout: 'onboarding',
  data () {
    return {
      form: this.$form({
        email: '',
        name: '',
        legal_name: '',
        password: '',
        password_confirmation: ''
      })
    }
  },
  auth: false,
  methods: {
    register () {
      const response = this.form.submit('post', '/register', { step: 1 })
      response.then((result) => {
        const user = Object.assign({}, result, { password: this.form.password })
        this.$store.commit('user/register/add', user)
        this.$router.push({ path: '/auth/verify' })
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
      })
    }
  }
}
</script>
