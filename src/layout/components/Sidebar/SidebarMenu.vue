<template>
  <div class="sidebar-menu">
    <div class="sidebar-menu__title">
      <slot name="title"></slot>
    </div>
    <ul class="sidebar-menu__links">
      <slot name="links"></slot>
    </ul>
  </div>
</template>
