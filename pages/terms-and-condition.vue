<template>
  <div>
    <div class="bg-charcoal-light py-8 sm:px-15 px-5">
      <h2 class="text-2xl text-charcoal-main">
        Terms of service
      </h2>
    </div>
    <div class="bg-white sm:px-15 px-5 py-8">
      <p>
        PLEASE READ THESE TERMS AND CONDITIONS (“TERMS”) CAREFULLY BEFORE USING THE http://www.morenapixel.com (“THE SITE”). BY ACCESSING OR USING OUR WEBSITE OR OUR SERVICES, YOU HERBY AGREE TO BE BOUND BY THE TERMS AND CONDITIONS AND ALL TERMS INCORPORATED HEREIN BY REFERENCE, INCLUDING OUR PRIVACY POLICY. IT IS YOUR RESPONSIBILITY AS USER, CUSTOMER OR PROSPECTIVE CUSTOMER TO READ THE TERMS BEFORE PROCEEDING TO USE THIS SITE. IF YOU DO NOT EXPRESSLY AGREE TO ALL OF THE TERMS, PLEASE DO NOT ACCESS OR USE OUR SITE OR OUR SERVICES.
      </p>
      <h2 class="my-10 text-charcoal-dark font-bold">
        Acceptance of Terms
      </h2>
      <p>
        This Website is owned and operated by MorenaPixels Ltd (“MorenaPixels”), a platform which allows you post and download royalty-free photos, video or the materials (Content). These terms apply to all photographers, visitors, users and others who access and/or use the Service.
        MorenaPixels reserves the right to change or adapt these Terms from time to time without giving reasons with effect for the future. Your continued access or use of the Site constitutes your acceptance of such changes. You have a right to immediately cancel and terminate your account on the Site if you do not agree to the changes to the Terms. Your access and use of the Site will be subject to the Terms in force at the time of use.
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
