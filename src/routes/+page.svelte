<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<main>
  <h1>Welcome to SvelteKit</h1>
  <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
  <h1>Counter: {count}</h1>
  <button 
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    on:click={increment}>
    Blue Button
  </button>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Button
  </button>
</main>



<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
