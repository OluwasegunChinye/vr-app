<template>
    <div >
        <v-form >
            <v-container>
                <v-row style="justify-content: center;" justify="center;">
                    <v-col cols="12" sm="6" style="margin-top: 200px;">
                       <v-text-field label="enter vehicle registration number" outlined="" hint="example ABC-1234-DE" value="ABC-1234-DE" readonly=""></v-text-field>
                       
                       <!-- dialog -->
                        <v-row justify="center">
                            <v-dialog v-model="dialog" persistent max-width="400">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-container>
                                        <v-btn style="background: linear-gradient(to right, #fc6767, #ec008c);" v-bind="attrs" v-on="on" block large class="text-capitalize white--text "> send </v-btn>
                                    </v-container>
                                </template>
                                <v-card>
                                    <v-card-title style="font-size: 16px;; color: #ec008c">Check SMS for Code & Enter</v-card-title>
                                    <v-text-field label="enter pin" class="pa-5" outlined="" type="password" hint="enter 0000"></v-text-field>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn style="background: linear-gradient(to right, #fc6767, #ec008c);" @click="dialog  = false" 
                                    router to="/Data-page" class="text-capitalize white--text " >Done</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>

       <!-- dialog -->
    </div>
</template>

<script>
export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped>

</style>