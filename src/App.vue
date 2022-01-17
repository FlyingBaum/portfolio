<template>
  <div id="app">
    <div id="nav" class="p-4 shadow-lg flex flex-col lg:flex-row items-stretch">
      <h1 class="text-gray-800 text-5xl py-1 mx-5 font-cuteFont uppercase">
        Krist Baliev
      </h1>
      <router-link
        to="/"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-green-600"
        >About</router-link
      >
      <router-link
        to="/skills"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-pink-600"
        >Skills</router-link
      >
      <router-link
        to="/projects"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-indigo-500"
        >Projects</router-link
      >
      <router-link
        to="/social"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-gray-500"
        >Social</router-link
      >
    </div>
    <router-view />
  </div>
</template>

//
<script lang="js">
export default {
  name: "app",
  methods: {
    handleStyles() {
      if (["/"].includes(this.$route.path)) {
        document.body.className = "bg-about";
        document.getElementById("nav").style.backgroundColor = "#10B981";
      } else if (["/skills"].includes(this.$route.path)) {
        document.body.className = "bg-skills";
        document.getElementById("nav").style.backgroundColor = "#EC4899";
      } else if (["/projects"].includes(this.$route.path)) {
        document.body.className = "bg-projects";
        document.getElementById("nav").style.backgroundColor = "#818cf8";
      } else if (["/social"].includes(this.$route.path)) {
        document.body.className = "bg-social";
        document.getElementById("nav").style.backgroundColor = "#94a3b8";
      }
    },
  },
  // Handle styles when the app is initially loaded
  mounted() {
    this.handleStyles();
  },
  // Handle styles when the route changes
  watch: {
    $route() {
      this.handleStyles();
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Dosis";
  src: url("assets/Dosis/static/Dosis-Medium.ttf");
  font-weight: normal;
}

@font-face {
  font-family: "Dosis";
  src: url("assets/Dosis/static/Dosis-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: "Dosis";
  src: url("assets/Dosis/static/Dosis-Light.ttf");
  font-weight: 100;
}

#app {
  font-family: Dosis, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.bg-about {
  background-color: #d1fae5;
}
.bg-skills {
  background-color: #fce7f3;
}
.bg-projects {
  background-color: #e0e7ff;
}
.bg-social {
  background-color: #f1f5f9;
}
</style>
