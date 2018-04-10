<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        HST2125-NUXT
      </h1>
      <h2 class="subtitle">
        Projet Nuxt.js pour HST2125
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import TopNavbar from '~/components/TopNavbar.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    AppLogo,
    TopNavbar,
    Modal
  }
}
</script>


