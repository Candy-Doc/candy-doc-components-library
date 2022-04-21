<script lang="ts">
  import "@candy-doc/ui/src/components/Sidebar/SideBar";
  import "@candy-doc/ui/src/components/Sidebar/Element/Element";
  import Fa from 'svelte-fa/src/fa.svelte'
  import { faBinoculars, faCubes, faObjectGroup } from '@fortawesome/free-solid-svg-icons'

  const sidebarElements = [
      { label: 'Overview', active: true, icon: faBinoculars },
      { label: 'Objects', active: false ,icon: faCubes},
      { label: 'Bounded context 1', active: false ,icon: faObjectGroup},
      { label: 'Bounded context 2', active: false ,icon: faObjectGroup},
      { label: 'Bounded context 3', active: false ,icon: faObjectGroup},
    ]
</script>

<main>
  <candy-sidebar>
    {#each sidebarElements as sidebarElement}
       <candy-sidebar-element 
        label={sidebarElement.label}
        active={sidebarElement.active}
        >
        <div slot="icon">
          <Fa icon={sidebarElement.icon} />
        </div>
       </candy-sidebar-element>
    {/each}
  </candy-sidebar>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
