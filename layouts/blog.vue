<template>
  <div>
    <my-header/>
    <div class="main-body container-inner">
    <div class="main-body-inner">
      <my-sidebar/>
      <nuxt/>
    </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from '~/components/web/Header.vue'
import MySidebar from '~/components/web/Sidebar.vue'
import MyFooter from '~/components/web/Footer.vue'

export default {
  components: {
    MyHeader,
    MySidebar,
    MyFooter
  }
}
</script>

<style lang="scss">
.main-body {
  margin-top: -50px;
  background-color: #fff;
  .main-body-inner {
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: rgba(0, 0, 0, 0.098) 0px 1px 1px 0px;
    box-shadow: rgba(0, 0, 0, 0.098) 0px 1px 1px 0px;
    padding-left: 340px;
  }
}
/* .container {
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
} */

/* .button,
.button:visited {
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover,
.button:focus {
  color: #fff;
  background-color: #000;
}

.title {
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
} */
</style>
