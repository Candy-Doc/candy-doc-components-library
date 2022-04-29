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

<main class="grid grid-cols-3">
  <candy-sidebar class="col-span-1">
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
  <div class="col-span-2">
    <div class="prose">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
  
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis quae deleniti
        magnam tempore reprehenderit excepturi at perspiciatis quas cumque?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis quae deleniti
        magnam tempore reprehenderit excepturi at perspiciatis quas cumque?
      </p>
    </div>
  </div>
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
