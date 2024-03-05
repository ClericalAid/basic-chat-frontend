<script>
  import Login from "@src/lib/components/pages/login/login_page.svelte";
  import ApiService from "@src/lib/services/api_service";
  import { onMount } from "svelte";

  onMount(async () =>{
    const res = await ApiService.fetchHomePage();
    console.log(res);
  });
</script>

<main>
  <Login />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.brown.200);
  }
</style>
