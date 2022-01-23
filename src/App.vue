<template>
  <div id="app">
    <div
      id="nav"
      class="bg-gray-700 p-4 shadow-lg flex flex-col lg:flex-row items-stretch"
    >
      <h1 class="text-white text-5xl py-1 mx-5 font-cuteFont uppercase">
        Krist Baliev
      </h1>
      <router-link
        to="/"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-gray-800"
        >About</router-link
      >
      <router-link
        to="/skills"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-gray-800"
        >Skills</router-link
      >
      <router-link
        to="/projects"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-gray-800"
        >Projects</router-link
      >
      <router-link
        to="/social"
        class="text-white text-lg px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-gray-800"
        >Social</router-link
      >
    </div>
    <router-view />
  </div>
</template>

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
</style>
