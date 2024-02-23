<script setup lang="ts">
import { copyToClipboard } from "@/utils/copyToClipboard.js";

function focusTextArea() {
  document.getElementById("textInput")!.focus();
}
</script>
<template>
  <div>
    <h1>Clipboard test page</h1>
    <p>
      This page only exists to simplify the manual test of the clipboard page.
    </p>
    <button
      @click="
        copyToClipboard('some text');
        focusTextArea();
      "
    >
      Copy 'some text'
    </button>

    <label for="textInput"> Paste text here </label>
    <textarea onclick="this.value = ''" id="textInput" rows="5" />
  </div>
</template>
