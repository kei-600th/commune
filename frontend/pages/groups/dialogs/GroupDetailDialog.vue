<template>
  <v-card>
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="edit">
        <v-icon size="20px">mdi-pencil-outline</v-icon>
      </v-btn>
      <v-btn icon @click="del">
        <v-icon size="20px">mdi-trash-can-outline</v-icon>
      </v-btn>
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <h1>グループ詳細</h1>
    <p>name: {{ group.name }}</p>
    <p>description: {{ group.description }}</p>
    <p>word: {{ group.word }}</p>
  </v-card>
</template>



<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GroupDetailDialog",
  data: () => ({
  }),
  computed: {
    ...mapGetters("groups", ["groups", 'group']),
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    ...mapActions("groups", ["fetchGroups", 'setGroup', 'deleteGroup', 'setEditMode']),
    showGroup(group) {
      this.setGroup(group);
    },
    closeDialog() {
      this.setGroup(null);
    },
    del() {
      this.deleteGroup(this.group.id);
    },
    edit() {
      this.setEditMode(true);
    },
  },
};

</script>