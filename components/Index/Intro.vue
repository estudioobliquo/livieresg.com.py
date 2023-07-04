<template>
  <div class="mainIndex">
    <div class="line" />
    <div class="text">
      <h2>{{ $t(`index.ourStudy`) }}</h2>
      <p>
        {{ $t(`index.ourStudyText`) }}
      </p>
    </div>
    <div class="buttonContainer">
      <NuxtLink style="text-decoration: none" :to="localePath('/nosotros')">
        <AtomButton-Link text="Conocer mas" to="/" />
      </NuxtLink>
    </div>
    <div class="imgContainer">
      <img src="@/assets/img/index/portadaIntro.png" alt="Livieres Guggiari - Portada">
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.mainIndex {
  margin-bottom: 60px;

  .text {
    text-align: center;

    p {
      font-style: italic;
    }
  }

  .imgContainer {
    img {
      margin-top: 40px;
      height: 175px;
      object-fit: cover;
    }

  }

  .imgContainer>div {
    height: 100%;
  }

  .line {
    height: 50px;
    width: 2px;
    background-color: var(--main-color);
    margin: 24px auto 20px;
  }

  // .mainIndex h2, .mainIndex p {  text-align: center;}
  // .mainIndex p {  font-style: italic;  max-width: 685px;  margin: 0 auto;}

  .buttonLink {
    display: block;
    margin: 0 auto;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 40px;

  }

  @media only screen and (min-width: 800px) {
    .mainIndex {
      margin-bottom: 120px;
    }

    .line {
      margin: 48px auto 24px;
    }

    .imgContainer {
      margin-top: 80px;
    }
  }
}</style>
