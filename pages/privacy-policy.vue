<template>
  <div>
    <div class="bg-charcoal-light py-8 sm:px-15 px-5">
      <h2 class="text-2xl text-charcoal-main">
        Privacy Policy
      </h2>
    </div>
    <div class="bg-white sm:px-15 px-5 py-8">
      <h2 class="my-10 text-charcoal-dark font-bold">
        1- Introduction
      </h2>
      <p>
        MorenaPixels is a global provider of stock photos, footage and photos editorial contents. MorenaPixels allows Artist and Creators to sell royalty-free images, footage and illustrations.
        As an online content creator, there is a need to gather and process certain information about users of the website (“Subscribers”) who use MorenaPixels’s online platform. In the light of the emerging data regulatory environment which requires higher transparency and accountability on how companies manage and use personal data, MorenaPixels must ensure that its business operation aligns with global best practices on protection of rights and privacy of individuals
        This Privacy Policy describes how MorenaPixels manages your personal data and personal information, and respects privacy. This policy may be amended from time to time.
      </p>

      <h2 class="my-10 text-charcoal-dark font-bold">
        2- Policy
      </h2>
      <p>
        The Data Protection Policy (the “Policy”) is a formal acknowledgment that MorenaPixels is committed to the protection of rights and privacy of individuals, in accordance with the United Stated of America Data Protection Regulation (the “Regulation”)
      </p>

      <div class="flex m-auto sm:w-5/12 w-full">
        <div v-if="!$auth.loggedIn" class="w-full">
          <nuxt-link to="/auth/register" class="block text-center mt-10 mb-5 py-3 rounded-md bg-monsell-dark-red text-white">
            Create an account
          </nuxt-link>
          <nuxt-link to="/auth/login" class="block text-center mt-10 mb-5">
            Already have an account? <span class="text-pale-red">Log in</span>
          </nuxt-link>
        </div>
        <div v-else class="w-full">
          <nuxt-link to="/dashboard" class="block text-center mt-10 mb-5 py-3 rounded-md bg-monsell-dark-red text-white">
            Back to home
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'landing',
  auth: false
}
</script>
