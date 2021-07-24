<template>
  <v-textarea
    filled
    rounded
    auto-grow
    :value="value"
    @input="$emit('input', $event)"
    placeholder="グループ説明文"
    rows="4">
  </v-textarea>
</template>

<script>
export default {
  name: 'TextForm',
  props: ['value'],
}
</script>