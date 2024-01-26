<script lang="ts">
  import { goto } from "$app/navigation";
  let username = '';

  async function login(){
    await sleep(2000);
    goto("/chat");
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
</script>

<div class="flex h-screen w-screen items-center justify-center">
  <div class="flex flex-col w-96 py-10 bg-brown-800 items-center justify-center rounded-lg">
    <div class="w-fit text-stone-200 text-2xl pb-5">
      <b>Enter Username</b>
    </div>
    <div class="flex-col w-80 pb-3">
      <div class="pb-1">Username</div>
      <input bind:value={username} class="bg-brown-950 w-80 rounded-md h-10"/>
    </div>
    <button on:click={login} class="bg-rose-300 h-11 w-80 text-lg text-brown-900 rounded-md hover:bg-rose-200 active:bg-rose-100">
      Login
    </button>
  </div>
</div>
