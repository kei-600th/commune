<template>
  <div>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            v-for="group in groups"
            :key="group.id"
            cols="4"
            :groups="groups"
          >
            <v-card height="200" @click="showGroup(group)">
              <v-card-title >{{ group.name }}</v-card-title>
              <v-card-text>{{ group.word }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-dialog :value="group !== null">
      <GroupDetailDialog v-if="group !== null && !isEditMode" />
      <GroupFormDialog v-if="group !== null && isEditMode" />
    </v-dialog>

    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
      @click="initGroup"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GroupDetailDialog from '../groups/dialogs/GroupDetailDialog';
import GroupFormDialog from '../groups/dialogs/GroupFormDialog';

export default {
  name: "Group",
  components: {
    GroupDetailDialog,
    GroupFormDialog,
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters("groups", ["groups", 'group', 'isEditMode']),
  },
  created() {
    this.fetchGroups();
  },
  methods: {
    ...mapActions("groups", ["fetchGroups", 'setGroup', 'setEditMode']),
    showGroup(group) {
      this.setGroup(group);
    },
    initGroup() {
      this.setGroup({ name: ''});
      this.setEditMode(true);
    },
  },
};
</script>
