<template>
    <div>
       <v-container>
            <v-row justify-sm="center">
                <v-col cols="12" sm="6">
                    <!-- <v-card  color="#ffff"> -->
                        
                        <v-list>
                            <v-card-subtitle  style="font-weight: bold; color:#ec008c">Hello,  Lasisi John Hollywood </v-card-subtitle>
                        <!-- <v-card-subtitle class="black--text">ENTER DELIVERY ADDRESS HERE</v-card-subtitle> -->
                        <v-text-field class="ma-1" outlined value="101, Ikoyi Street" label=" Enter Delivery Address Here" readonly="" append-icon="far fa-check-circle" ></v-text-field>
                            <v-card-subtitle class="" style="color:#ec008c; font-weight: bold; letter-spacing: 2px">BILLING</v-card-subtitle>
                            <v-list-item-group v-model="price" color="pink">
                                <v-list-item v-for="(price, i) in prices" :key="i" >  
                                    <v-list-item-content>
                                    <v-list-item-subtitle v-text="price.text" ></v-list-item-subtitle>
                                    </v-list-item-content>
                                    <v-list-item-content>
                                    <v-list-item-subtitle v-text="price.cost"></v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="450">
                    <template v-slot:activator="{ on, attrs }">    
                        <v-col cols="10" sm="6">
                            <v-btn block large="" v-bind="attrs" v-on="on" style="background: linear-gradient(to right, #fc6767, #ec008c);" 
                            class=" text-capitalize white--text justify-center">Make Payment</v-btn>
                        </v-col>
                    </template>
                    <v-card>
                        <v-card-title style="color:#ec008c;" >Choose Payment Method</v-card-title>
                        <v-col class="d-flex" cols="12" sm="6"> <v-select :items="items" label="click to choose" dense outlined ></v-select></v-col>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn style="background: linear-gradient(to right, #fc6767, #ec008c);"  @click="dialog  = false"  
                        class="text-capitalize white--text " router to="/Tracker" >Check</v-btn>
                        </v-card-actions>
                        <v-card-subtitle style="color:#ec008c;"> Delivery info : </v-card-subtitle>
                        <v-card-subtitle style="color:#ec008c;"> Name : Lasisi John Hollywood | Address 101, Ikoyi Street  Ikoyi. Post Office Bus Stop. </v-card-subtitle>
                    </v-card>
                </v-dialog>
            </v-row>
       </v-container>
    </div>
</template>


<script>
export default {
    data : () => ({
        items: ['USSD', ' MOBILE TRANSFER', 'CARD PAYMENT'],
        price: 1,
        prices: [
        { text: 'Auto-Reg : ', cost: '0.00 NGN' },
        { text: 'Road Worthiness : ', cost: '0.00 NGN' },
        { text: 'Insurance : ', cost: '0.00 NGN' },
        { text: 'Delivery : ', cost: '0.00 NGN' },
        { text: 'Process-Fee : ', cost: '0.00 NGN' },
      ],
    })
}
</script>