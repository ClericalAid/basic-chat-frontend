<script>
  import ServerSidebar from "../lib/components/sidebar.svelte";
  import MainStage from "../lib/components/main_stage.svelte";
</script>

<main>
  <div class="flex flex-row h-screen w-screen">
    <ServerSidebar />
    <MainStage />
  </div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.brown.200);
  }
</style>
