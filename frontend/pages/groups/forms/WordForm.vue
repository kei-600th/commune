<template>
  <v-text-field
    filled
    rounded
    auto-grow
    :value="value"
    @input="$emit('input', $event)"
    placeholder="ひとこと">
  </v-text-field>
</template>

<script>
export default {
  name: 'WordForm',
  props: ['value'],
}
</script>