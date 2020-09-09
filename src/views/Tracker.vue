<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="8">
                    <v-card style="margin-top:40px; background: linear-gradient(to right, #fc6767, #ec008c);" color="#00C853">
                        <v-card-subtitle class="white--text"> Your Transaction was successfull <i class="far fa-thumbs-up"></i></v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row> 
            <v-row justify="center">
                <v-col cols="12" sm="6">
                    <!-- <v-card style="background: linear-gradient(to right, #fc6767, #ec008c);" >  -->
                        <v-card-title class="justify-center" style="color: #ec008c; font-weight: bold"> TRACKER </v-card-title>
                        <v-timeline>
                            <v-timeline-item  color="white" large icon="fas fa-cog" icon-color="#ec008c" 
                            style="color: #ec008c; font-weight: bold" >Processing</v-timeline-item> 
                            <v-timeline-item class="text-right white--text" color="white"  large icon="far fa-address-card" icon-color="#757575" ></v-timeline-item>
                            <v-timeline-item large color="white" icon="fas fa-shipping-fast" icon-color="#757575" class="#757575--text"></v-timeline-item>
                            <v-timeline-item large color="white" icon="fas fa-check" icon-color="#757575" ></v-timeline-item>
                        </v-timeline>
                    <!-- </v-card> -->
                </v-col>
            </v-row>
            <!-- <v-row justify="center">
                <v-col cols="9" sm="6">
                    <v-btn block style="margin-top: 25px; background:linear-gradient(to right, #fc6767, #ec008c);" route to="/"  class="white--text text-capitalize">Go to Home page
                    </v-btn>
                </v-col>
            </v-row> -->
        </v-container>
    </div>
</template>