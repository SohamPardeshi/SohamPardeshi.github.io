<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
@import "@/styles/_main.scss";

// Import Bulma's Grid System, Navbar, Section, and Footer
@import "bulma/sass/utilities/_all.sass";
@import "bulma/sass/grid/_all.sass";
@import "bulma/sass/components/navbar.sass";
@import "bulma/sass/components/modal.sass";
@import "bulma/sass/layout/section.sass";
@import "bulma/sass/layout/footer.sass";
@import "bulma/sass/elements/icon.sass";
@import "~@creativebulma/bulma-collapsible";
@import "~bulma-switch";

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    
// Set the default font to be "Usual" with a few backups
* {
    font-family: Source Sans Pro, Avenir, Helvetica, Arial, sans-serif;
}

body {
    margin: 0;
}

// Anti-aliasing is supposed to be good?
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

.navbar-wrapper {
    padding: 0 8%;
    // width: 84%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    color: black;
    margin: 0;
}

h1 {
    font-family: Roboto;
    font-weight: 500;
    font-size: 44px;
    line-height: 53px;
}

h2 {
    font-size: 36px;
    line-height: 43px;
}

h3 {
    font-size: 24px;
    line-height: 38px;
}

h4 {
    font-size: 20px;
    line-height: 24px;
}

p {
    font-size: 16px;
    line-height: 24px;
}

h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
}

h6 {
    font-size: 14px;
    line-height: 160%;
}
</style>
