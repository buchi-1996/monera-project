<template>
  <div>
    <div class="flex flex-col items-center mb-5">
      <img src="~assets/icons/green-checkmark.png" alt="">
      <h2 class="font-bold text-center text-3xl text-charcoal-dark">
        Email verification complete!
      </h2>
      <pre>
        {{ result }}
      </pre>
      <nuxt-link to="/auth/register/complete" class="py-4 rounded-md text-white w-full text-center my-4 bg-approval">
        Continue
      </nuxt-link>
    </div>
    <Logo class="w-full" />
  </div>
</template>

<router>
  {
    path: '/auth/verify-email/:id/:hash'
  }
</router>

<script>
export default {
  layout: 'onboarding',
  auth: false,
  data () {
    return {
      id: '',
      hash: '',
      signature: '',
      expires: '',
      result: ''
    }
  },
  mounted () {
    this.verifyUser()
  },
  methods: {
    async verifyUser () {
      this.id = this.$route.params.id
      this.hash = this.$route.params.hash
      this.signature = this.$route.query.signature
      this.expires = this.$route.query.expires

      const isVerified = await this.$axios.$post(`/verify-email/${this.id}/${this.hash}`, {}, {
        params: {
          expires: this.expires,
          signature: this.signature
        }
      })
      // eslint-disable-next-line no-console
      console.log(isVerified)
    }
  }
}
</script>
