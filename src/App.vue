<template>
  <v-app id="app">
    <v-app-bar app color="#0000" flat>
      <div class="d-flex align-center">
        <v-img class=" mr-2 ml-4 mt-1" src="./assets/lasglogo.jpg"  transition="scale-transition" width="60" />
        <v-toolbar-title class=" hidden-xs-only ml-4 mt-3" style="letter-spacing: 2px; font-weight: bold; font-size: 15px; color: #00E676">Lagos State Ministry of Transportation</v-toolbar-title>

        <!-- <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="" width="100" /> -->
      </div>

      <v-spacer></v-spacer>

      <div class="mx-5 mt-2" > 
        <v-btn text small class="text-lowercase" color="#00E676" router to="/">Home</v-btn>
        <v-btn text small class="text-lowercase" color="#00E676" router to="/Tracker">Tracker</v-btn>
        <v-btn text small class="text-lowercase hidden-xs-only" color="#00E676">Login</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    //
  }),
};
</script>


<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}

 
</style>
