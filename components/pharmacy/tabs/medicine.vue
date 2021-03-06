<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="medicines"
      :search="search"
      :items-per-page="15"
      sort-by="id"
      class="elevation-0 "
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            ><h3>
              Medicines
            </h3></v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            label="Search by name/company/composition"
            single-line
            hide-details
            rounded
            height="40"
            class="shrink"
          ></v-text-field
          >&nbsp;&nbsp;
          <v-dialog v-model="dialog" max-width="900px">
            <template v-if="showaction" v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                elevation="1"
                medium
                prepend-icon="mdi-plus"
                class="mb-2"
                v-bind="attrs"
                v-on="on"
                dark
                v-if="isMdAndUp"
                ><v-icon left>mdi-plus</v-icon
                >{{ $t("label.button.addnewmedicine") }}</v-btn
              >
              <v-btn
                v-else
                color="primary"
                fab
                small
                class="mb-2 font-weight-normal"
                v-bind="attrs"
                v-on="on"
                dark
                ><v-icon>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.price"
                        type="number"
                        label="Unit price"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.company"
                        label="Company"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.compositions"
                        label="Compositions"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.units"
                        type="number"
                        label="Units"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.group"
                        :items="template.medicineGroupOptions"
                        label="Group"
                        item-text="name"
                        :item-value="'id'"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-select
                        v-model="editedItem.category"
                        :items="template.medicineCategoriesOptions"
                        label="Medical Category"
                        :item-value="'id'"
                      >
                        <template slot="selection" slot-scope="{ item }">
                          {{ item.name }} - {{ item.id }}
                        </template>
                        <template slot="item" slot-scope="{ item }">
                          {{ item.id }} - {{ item.name }}
                        </template>
                      </v-select>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.group`]="{ item }">
        <p>{{ item.group.name }}</p>
      </template>
      <template v-slot:[`item.category`]="{ item }">
        <p>{{ item.group.name }}</p>
      </template>
      <template v-if="showaction" v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small color="indigo darken-4" @click="deleteItem(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-progress-linear indeterminate color="cyan"></v-progress-linear>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    medicines: {
      type: Array,
      default: null
    },
    showaction: {
      type: Boolean,
      default: true
    }
  },
  data: () => ({
    dialog: false,
    search: "",
    medicinos: null,
    tab: null,
    headers: [
      { text: "Name", value: "name" },
      { text: "Company", value: "company", sortable: false },
      { text: "Composition", value: "compositions" },
      { text: "Quantity left", value: "units", sortable: true },
      { text: "Group", value: "group", sortable: true },
      { text: "Price per unit", value: "price" },
      { text: "Category", value: "category", sortable: true },
      { text: "Actions", value: "actions", sortable: false }
    ],
    editedIndex: -1,
    editedItemId: "",
    editedItem: {
      id: 0,
      name: "",
      company: "",
      compositions: "",
      category: "",
      group: "",
      units: 0,
      price: 0
    },
    defaultItem: {
      id: 0,
      name: "",
      company: "",
      compositions: "",
      category: "",
      group: "",
      units: 0,
      price: 0
    }
  }),
  created() {},
  beforeMount() {
    // this.$store.dispatch("getmedicines");
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.medicines.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.editedItemId = item.id;
    },
    deleteItem(item) {
      const index = this.datalist.indexOf(item);
      confirm("Are you sure you want to delete this item?");
      //this.datalist.splice(index, 1);
      //this.$store.dispatch("delete_patient", item.id);
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.medicines[this.editedIndex], this.editedItem);
        this.editedItem.group = this.editedItem.group.id;
        this.editedItem.category = this.editedItem.category.id;
        this.editedItem.price = parseFloat(this.editedItem.price + ".00");
        this.$store.dispatch("update_medicine_product", this.editedItem);
      } else {
        this.medicines.push(this.editedItem);
        this.$store.dispatch("add_new_medicine", this.editedItem);
      }
      this.close();
    },
    handleClick: function(value) {
      console.log(value);
      this.$router.push("/patients/" + value.id);
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
      this.$store.dispatch("retrieve_medicine_template");
    }
  },
  computed: {
    ...mapGetters({
      // medicines: "medicines",
      template: "medicine_templates"
    }),
    formTitle() {
      return this.editedIndex === -1 ? "New medicine" : "Edit medicine";
    }
  }
};
</script>
