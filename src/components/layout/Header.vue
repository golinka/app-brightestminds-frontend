<template>
  <header class="header">
    <div class="container">
      <div class="row align-items-center">
        <!-- LOGO -->
        <div class="header__logo col-6 col-md-4">
          <router-link
            tag="a"
            :to="{ name: 'products' }"
          >
            <Icon name="logo" />
            <span>App</span>
          </router-link>
        </div>
        <!-- LOGO END -->
        <!-- NAVIGATION -->
        <div
          class="header__navigation col-6 col-md-8"
          role="navigation"
        >
          <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-end">
              <div class="header__menu d-none d-md-flex flex-grow-1">
                <ul class="justify-content-center align-items-baseline p-0">
                  <li><a href="https://brightestminds.io/">Home</a></li>
                  <li><a href="https://brightestminds.io/blog">Insights</a></li>
                  <li><a href="https://brightestminds.io/case-studies/">Case studies</a></li>
                  <li><a href="https://brightestminds.io/about-us/">About us</a></li>
                </ul>
              </div>
              <div class="header__user d-flex align-items-center justify-content-end">
                <template v-if="isAuth && user">
                  <Icon name="brain" />
                  <span class="pl-2">
                    {{ user.fname }} {{ user.lname }}
                  </span>
                </template>
                <template v-else>
                  <router-link
                    tag="a"
                    :to="{ name: 'login' }"
                    class="ml-2"
                  >
                    Login
                  </router-link>
                </template>
              </div>
              <div class="header__toggle ml-3">
                <Icon name="menu-icon" />
                <span>
                  <Icon name="close-icon" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- NAVIGATION END-->
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters({
      isAuth: 'isAuth',
      user: 'getUser'
    })
  }
</script>

<style lang="scss">
  @import '../../assets/scss/_variables';

  .header {
    background: url("/img/header-pattern.svg");
    background-color: $header-background;
    background-repeat: repeat;
    background-size: cover;

    .row {
      height: 4rem;
    }

    &__logo {
      a {
        position: relative;
        display: flex;
        max-width: 10em;
      }

      span {
        position: absolute;
        top: 0;
        right: -3em;
        display: block;
        padding: 0.15em 0.7em;
        font-size: 0.45em;
        font-weight: 600;
        color: #c5c5c5;
        background-color: #4a5f78;
        border-radius: 1em;
      }
    }

    &__menu {
      ul {
        display: flex;
        margin-bottom: 0;

        li {
          list-style: none;

          a {
            padding: 0.6em 0;
            margin: 0 1em;
            font-family: Aria, sans-serif;
            font-size: 0.8em;
            font-weight: 300;
            color: $header-links;
            letter-spacing: 0.5px;
            white-space: nowrap;
            transition: all 0.2s ease;

            &:hover {
              color: $header-links-hover;
              text-decoration: none;
            }
          }

          &.request a {
            display: block;
            padding: 0.5em 1.4em 0.55em;
            margin-left: 1.2em;
            color: white;
            background-color: $active-color;
            border-radius: 3em;

            &:hover {
              background-color: lighten($active-color, 5%);
            }
          }
        }
      }
    }

    &__user {
      a,
      span {
        display: block;
        font-family: 'Roboto', sans-serif;
        font-size: 0.9em;
        font-weight: 700;
        color: #77879b;
      }

      span {
        max-width: calc(100% - 1.7em);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      a {
        &:hover {
          color: rgb(146, 165, 189);
          text-decoration: none;
        }
      }
    }

    &__toggle {
      position: relative;
      display: none;
      width: 2.5em;
      height: 1.8em;
      cursor: pointer;
      border-top-left-radius: 0.4em;
      border-top-right-radius: 0.4em;
      transition: all 0.3s ease;

      img {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
      }

      span {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: all 0.3s ease;
      }

      &.active {
        background-color: $header-mobile-menu;

        > img {
          opacity: 0;
        }

        span {
          opacity: 1;
        }
      }
    }
  }

  @media all and (max-width: 992px) {
    .header {
      font-size: 13px;
    }
  }

  @media all and (max-width: 767px) {
    .header {
      &__menu {
        position: absolute;
        top: 2.2em;
        right: 0.95rem;
        z-index: 10;
        width: 15em;
        height: 0;
        padding: 0;
        overflow: hidden;
        background-color: $header-mobile-menu;
        border-top-left-radius: 0.4em;
        border-bottom-right-radius: 0.4em;
        border-bottom-left-radius: 0.4em;
        opacity: 0;
        transition: opacity 0.2s ease;

        ul {
          display: block;
          padding: 0;

          li {
            &:not(.request) {
              padding: 0.3rem 2.1rem;
            }

            &.request {
              padding: 0.4rem 0;

              a {
                padding: 0.5em 1.4em 0.55em 2.45em;
              }
            }
          }
        }

        &.active {
          height: auto;
          padding: 0.5em 0.2em;
          opacity: 1;
        }
      }

      &__toggle {
        display: block;
        font-size: 14px;
      }

      &__logo a {
        font-size: 12px;
      }
    }
  }

  @media all and (max-width: 360px) {
    .header {
      &__user {
        display: block;
        max-width: 25vw;
        overflow: hidden;
        line-height: 1;
        text-overflow: ellipsis;
      }
    }
  }
</style>
