<template>
  <div ref="calendarEl"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { Calendar } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";

const calendarEl = ref(null);

onMounted(() => {
  new Calendar(calendarEl.value, {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    events: [
      {
        title: "Événement 1",
        start: "2024-07-31",
        end: "2024-08-01",
      },
      {
        title: "Événement 2",
        start: "2024-08-02",
        end: "2024-08-03",
      },
    ],
  }).render();
});
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>
