<script context="module">

    import { derived, writable } from "svelte/store";
    //Stack of radioNodesId
    //IslandsCardsItems adds to that stack when they mount
    //and delete from it when they onmount
    export let radioNodeIds = writable([])
    //The raw current node because it's easier to manage a string
    export let currentLinkNodeString = writable("")
    //The raw ending node again as a string
    export let endingNodeString = writable("")
    //The arrow pool
    export let arrowPool = writable([])
    //Def to check and redraw
    export let redrawLines = derived(arrowPool,$a => {
        return (rootID) => {
            for (let [arrow,startId,endId] of $a) {
                if (startId.startsWith(rootID) || endId.startsWith(rootID)) {
                    arrow.redraw()
                }
            }
        }
    })
    export let clearLines = (rootID) => arrowPool.update(
        n => n.filter(([arrow,startId,endId]) => !startId.startsWith(rootID) && !endId.startsWith(rootID))
    )

</script>

<script>

    import * as dpkg from "svg-dom-arrows"
    const { SquarePath, SVGNS } = dpkg

    let arrowZone

    let endingNodeStringSubscribe = endingNodeString.subscribe(n => {
        if(!n) return 
        let position = { top : .5, left : .5 }
        let start = { element: document.getElementById(`node-${$currentLinkNodeString}`), position }
        let end = { element: document.getElementById(`node-${$endingNodeString}`), position }
        $arrowPool = [...$arrowPool,...[[
            new SquarePath({
                start,
                end,
                style: 'stroke:black;stroke-width:4;fill:transparent',
                appendTo: arrowZone
            }),
            $currentLinkNodeString,
            $endingNodeString
        ]]]
        currentLinkNodeString.set("")
        endingNodeString.set("")  
    })

</script>

<input bind:group={$currentLinkNodeString} value="" id="voidNode" type="radio" hidden/>
{#each $radioNodeIds as radioNode (radioNode)}
    <input bind:group={$currentLinkNodeString} 
    value="{radioNode}" id="{radioNode}" type="radio" hidden/>
    {#if $currentLinkNodeString}
        <input bind:group={$endingNodeString} 
        value="{radioNode}" id="end-{radioNode}" type="radio" hidden/>
    {/if}
{/each}
<div bind:this={arrowZone}>

</div>