<template>
    <div>
        <!-- <v-card> -->
            <v-form>
                <v-container>
                    <v-row wrap justify="center" class="">
                        <v-col cols="10" sm="6">
                            <v-card-title class="justify-center" style="font-weight: bold; color:#ec008c">VEHICLE DATA</v-card-title>
                            <v-text-field filled value="Lasisi John Hollywood" label="Name of Owner" readonly="" append-icon="fas fa-lock "></v-text-field>
                            <v-text-field filled value="Mercedes Benz" label="Make of Vehicle" readonly="" append-icon="fas fa-lock "></v-text-field>
                            <v-text-field filled value="ABC-1234-DE" label="Vehicle Registration Number" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="123456789" label="Engine Number" readonly="" append-icon="fas fa-lock"></v-text-field>
                            <v-text-field filled value="WXYZABCD12349876" label="Chasis Number" readonly="" append-icon="fas fa-lock"></v-text-field>
                             <v-btn class="text-capitalize pa-5 white--text" style="background: linear-gradient(to right, #fc6767, #ec008c);" large
                              router to="/Payment">click to Renew</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        <!-- </v-card> -->
    </div>
</template>


<script>
export default {

}
</script>

<style>

</style>