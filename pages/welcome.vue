<template>
  <div>
    <div class="flex flex-col items-center mb-5">
      <h2 class="font-light text-5xl text-charcoal-dark mb-5">
        Welcome to the Morena Creators Community
      </h2>
      <p class="text-md text-charcoal-light-text">
        We are super excited to have you join us! Click the button below to start uploading your content (Images, audio and video) right now
      </p>
    </div>
    <form-button type="primary" label="Upload content" class="mb-2" />
    <nuxt-link to="/dashboard" class="block text-center text-pale-red font-bold">
      Go to dashboard
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'onboarding'
}
</script>
