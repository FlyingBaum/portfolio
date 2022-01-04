<template>
  <div id="app">
    <div id="nav" class="bg-red-500 p-4 shadow-lg flex flex-col lg:flex-row">
      <router-link
        to="/"
        class="text-white px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-red-800"
        >Home</router-link
      >
      <router-link
        to="/about"
        class="text-white px-4 py-2 m-1 rounded-md"
        exact-active-class="bg-red-800"
        >About</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: url("assets/Montserrat/Montserrat-Thin.ttf");
  font-weight: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/Montserrat/Montserrat-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/Montserrat/Montserrat-Light.ttf");
  font-weight: 100;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
