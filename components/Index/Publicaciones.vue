<template>
  <div class="blog-slider">
    <h2>Ultimas Publicaciones</h2>
    <NuxtLink :to="localePath('/blog')">
      VER TODAS LAS PUBLICACIONES
    </NuxtLink>
    <div class="slider-container">
      <SVGArrowSlider @click="previousPost" />
      <div class="blog-post-container-desktop">
        <template v-for="(post, index) in postsDesktop" :key="post.slug">
          <!-- <div "> -->
          <NuxtLink class="post" :class="{'post-active': currentPostDesktop === index}" :to="`/blog/${post[0].slug}`">
            <AtomPost :post="post[0]" :slice-desktop="true" />
          </NuxtLink>
          <NuxtLink class="post" :class="{'post-active': currentPostDesktop === index}" :to="`/blog/${post[1].slug}`">
            <AtomPost :post="post[1]" :slice-desktop="true" />
          </NuxtLink>
          <!-- </div> -->
        </template>
      </div>
      <div class="blog-post-container-mobile">
        <NuxtLink
          v-for="(post, index) in posts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="post"
          :class="{'post-active': currentPostMobile === index}"
        >
          <AtomPost :post="post" :slice="true" />
        </NuxtLink>
      </div>
      <SVGArrowSlider @click="nextPost" />
    </div>
    <div class="btn-nav-container-desktop">
      <div
        v-for="n in postsDesktop.length"
        :key="n-1"
        class="point"
        :class="{ active: currentPostDesktop == n - 1 }"
        @click="changePostDesktop(n - 1)"
      />
    </div>
    <div class="btn-nav-container-mobile">
      <div
        v-for="n in posts.length"
        :key="n-1"
        class="point"
        :class="{ active: currentPostMobile == n - 1 }"
        @click="changePostMobile(n - 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toDate } from 'date-fns'
import { client } from '@/tina/__generated__/client'
import { Post } from '@/tina/__generated__/types'
import SVGArrowSlider from '@/assets/svg/global/arrowSlider.svg'

const posts = ref<Post[]>()
const currentPostMobile = ref(0)
const currentPostDesktop = ref(0)
const cantPostMobile = 6
const cantPostDesktop = 3
let intervalId: any

const postsResponse: any = await client.queries.postConnection()

posts.value = postsResponse.data.postConnection.edges.map((post: any) => {
  const dateObj = toDate(new Date(post.node.date))
  const formattedDate = useFormatSpanishDate(dateObj, 1)

  return {
    slug: post.node._sys.filename,
    title: post.node.title,
    type: post.node.type,
    date: post.node.date,
    dateFormat: formattedDate,
    body: `${useParseTinaContentAsString(post.node.body).slice(0, 200)}...`,
  }
})

posts.value = posts.value.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, cantPostMobile)

const postsDesktop = ref([])

postsDesktop.value = [
  [ posts.value[0], posts.value[1] ],
  [ posts.value[2], posts.value[3] ],
  [ posts.value[4], posts.value[5] ],
]

const changePostMobile = (n: number) => {
  currentPostMobile.value = n
  resetTimer()
}

const changePostDesktop = (n: number) => {
  currentPostDesktop.value = n
  resetTimer()
}

const nextPost = () => {
  currentPostMobile.value = currentPostMobile.value === cantPostMobile - 1 ? 0 : currentPostMobile.value + 1
  currentPostDesktop.value = currentPostDesktop.value === cantPostDesktop - 1 ? 0 : currentPostDesktop.value + 1
  resetTimer()
}

const previousPost = () => {
  currentPostMobile.value = currentPostMobile.value === 0 ? cantPostMobile - 1 : currentPostMobile.value - 1
  currentPostDesktop.value = currentPostDesktop.value === 0 ? cantPostDesktop - 1 : currentPostDesktop.value - 1
  resetTimer()
}

const resetTimer = () => {
  clearInterval(intervalId)
  intervalId = setInterval(() => {
    currentPostMobile.value = currentPostMobile.value === cantPostMobile - 1 ? 0 : currentPostMobile.value + 1
    currentPostDesktop.value = currentPostDesktop.value === cantPostDesktop - 1 ? 0 : currentPostDesktop.value + 1
  }, 6000)
}

onMounted(() => {
  intervalId = setInterval(() => {
    currentPostMobile.value = currentPostMobile.value === cantPostMobile - 1 ? 0 : currentPostMobile.value + 1
    currentPostDesktop.value = currentPostDesktop.value === cantPostDesktop - 1 ? 0 : currentPostDesktop.value + 1
  }, 6000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<style lang="scss">
.blog-slider {
  margin-bottom: 100px;

  h2 {
    text-align: center;
  }

  a {
    display: none;
  }

  .slider-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 20px;

    svg {
      cursor: pointer;

      &:first-child {
        transform: scale(1) rotate(180deg);
      }
    }

    .blog-post-container-desktop {
      display: none;
    }

    .blog-post-container-mobile {
      display: flex;
      width: 85%;
      height: 300px;

      .post {
        display: none;
        text-decoration: none;
      }

      .post-active {
        display: block;
      }
    }
  }

  .btn-nav-container-desktop {
    display: none;
  }

  .point {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
    background-color: var(--main-color);
    border-radius: 50%;
    opacity: .5;

    &.active {
      opacity: .8;
    }
  }

  .btn-nav-container-mobile {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;

  }

  @media only screen and (width >=1000px) {
    h2 {
      margin-bottom: 8px;
      text-align: left;
    }

    a {
      display: block;
      margin-bottom: 0;
      font-size: 16px;
      color: var(--main-color);
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: .02em;
      opacity: 1;
      transition: opacity .2s;

      &:hover {
        opacity: .76;
      }
    }

    .slider-container {
      svg {
        transform: scale(1.5);

        &:first-child {
          transform: scale(1.5) rotate(180deg);
        }

        path {
          opacity: .8;
          fill: var(--main-color);
        }
      }

      .blog-post-container-desktop {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 20px;
        align-items: center;
        width: 90%;
        max-width: 1200px;
        height: 390px;

        .post {
          display: none;
          text-decoration: none;
        }

        .post-active {
          display: block;
        }

        a {
          height: 100%;
        }
      }

      .blog-post-container-mobile {
        display: none;
      }

    }

    .btn-nav-container-mobile {
      display: none;
    }

    .btn-nav-container-desktop {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }
  }
}
</style>
