<script>

  import { parameters } from '$lib/Components/Controls/ParametersModal.svelte'

</script>

<div class="shadow-inner bg-base-300 overflow-hidden"
  class:w-64={!["top","bottom"].includes($parameters?.display?.roadMenu || "")}
  class:h-48={!["left","right"].includes($parameters?.display?.roadMenu || "")}
  class:absolute={$parameters?.display?.roadMenu === "floating"}
  class:top-0={$parameters?.display?.roadMenu === "floating"}
  class:left-2={$parameters?.display?.roadMenu === "floating"}
  class:hover:resize={$parameters?.display?.roadMenu === "floating"}
>
  A
</div>