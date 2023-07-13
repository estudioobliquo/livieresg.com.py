<template>
  <div class="blog-post" :class="{'slice-blog': slice, 'slice-d-blog': sliceDesktop}">
    <p class="post-type" :class="{'slice-type': slice}">
      {{ post.type }}
    </p>
    <h2 :class="{'slice-title': slice, 'slice-d-title': sliceDesktop}">
      {{ post.title }}
    </h2>
    <p class="post-date" :class="{'slice-date': slice }">
      {{ post.dateFormat }}
    </p>
    <p v-if="!slice" class="post-excerpt" :class="{'slice-d-excerpt': sliceDesktop}">
      {{ post.body }}
    </p>
    <div class="read-post" :class="{'slice-read-post': slice, 'slice-d-read-post': sliceDesktop}">
      <p>Continuar leyendo</p>
      <SVGArrow />
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGArrow from '@/assets/svg/global/arrow.svg'
defineProps({
  slice: {
    type: Boolean,
    default: false,
  },
  sliceDesktop: {
    type: Boolean,
    default: false,
  },
  post: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<style lang="scss">
.blog-post {
  padding: 23px 23px 40px;
  margin-bottom: 40px;
  background-color: var(--secondary-color);
  transition: background-color .2s;

  &:hover {
    background-color: var(--secondary-color-hover);
  }

  &.slice-blog {
    display: flex;
    flex-direction: column;
    padding-bottom: 24px;
  }

  .post-type {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 500;
    color: var(--text-color);
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: .7;
  }

  h2 {
    margin: 0 0 1.45rem;
    margin-bottom: 0.187em;
    font-size: 1.25rem;
    line-height: 1.3em;
    color: var(--text-color);
    text-decoration: none;
    letter-spacing: .05em;

    &.slice-title {
      display: -webkit-box;
      height: 105px;
      margin-bottom: 8px;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      text-align: left;
    }

    &.slice-d-title {
      text-transform: initial;
    }
  }

  .post-date {
    width: fit-content;
    padding-bottom: 5px;
    color: rgb(47 47 47 / 75%);
    text-decoration: none;
    border-bottom: 1px solid var(--main-color);
  }

  .post-excerpt {
    max-width: 1000px;
    color: var(--text-color);
  }

  .read-post {
    display: flex;
    align-items: center;

    p {
      margin-bottom: 0;
      font-size: 12px;
      color: var(--main-color);
      text-decoration: none;
      letter-spacing: .03em;
    }

    svg {
      margin-bottom: 1px;
      margin-left: 5px;

      path {
        fill: var(--main-color);
      }
    }

    &.slice-read-post {
      margin-top: 33px;
    }
  }

  @media only screen and (width >=1000px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 28px 40px 20px;

    &.slice-d-blog {
      margin-bottom: 0;
    }

    .post-type {
      font-size: 15px;
    }

    h2 {
      font-size: 1.222rem;

      &.slice-d-title {
        display: -webkit-box;
        max-height: 87px;
        margin-bottom: 8px;
        overflow: hidden;
        font-size: 1.222rem;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }

    .post-date {
      font-size: 18px;
    }

    .post-excerpt {
      font-size: 19px;

      &.slice-d-excerpt {
        text-transform: initial;
      }
    }

    .read-post {
      align-self: flex-end;
      margin-top: auto;
      font-size: 15px;

      .slice-d-read-post {
        margin-top: auto;
      }
    }
  }
}
</style>
