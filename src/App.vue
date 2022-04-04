<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

body {
  margin: 0;
  max-height: 100vh;
  background: #0f0326;
  overflow-y: scroll;
}

#app {
  font-family: "Quicksand", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
