<template>
  <div class="index-associations">
    <h2>{{ $t(`index.members`) }}</h2>
    <div class="asocCont">
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/ccpf.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo - Francesa"
        />
      </div>
      <div class="asoc custom1">
        <nuxt-img
          src="/img/logos-asociaciones/cdap.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Colegio de Abogados del Paraguay"
        />
      </div>
      <div class="asoc custom2">
        <nuxt-img
          src="/img/logos-asociaciones/iaba.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Inter American Bar Asociation"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/ahk.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="AHK"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/pyam.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo Americana"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/ccpa.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo Argentina"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/eurolatamex.jpg"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="EUROLATAMLEX"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/cam-comercio-py-uk.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguayo Britanica"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/py-brazil.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="Camara de Comercio Paraguay Brasil"
        />
      </div>
      <div class="asoc">
        <nuxt-img
          src="/img/logos-asociaciones/uip.png"
          sizes="(max-width: 700px):120px xxl:230px"
          format="webp"
          loading="lazy"
          alt="uip"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.index-associations {
  margin-bottom: 100px;

  h2:first-child {
    text-align: center;
  }

  .asocCont {
    display: flex;
    flex-wrap: wrap;
    row-gap: 40px;
    column-gap: 40px;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  /* Para logos de cdap y iaba se uso inlyne styling */
  .asoc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 120px;
    height: 85px;

    img {
      object-fit: contain;
    }
  }

  .asoc>div {
    width: 100%;
    height: 100%;
  }

  .asoc.custom1 {
    width: 36%;
    max-width: 65px;
  }

  .asoc.custom2 {
    width: 40%;
    max-width: 65px;
  }

  .mainContainer h2 {
    text-align: center;
  }

  @media only screen and (min-width: 700px) {
    & {
      margin-bottom: 160px;

      h2:first-child {
        padding-bottom: 20px;
        text-align: left;
        border-bottom: 1px solid var(--main-color-light);
      }
    }

    .asocCont {
      row-gap: 80px;
      column-gap: 140px;
      max-width: 1200px;
      margin-right: auto;
      margin-bottom: 80px;
      margin-left: auto;
    }

    .asoc {
      max-width: 230px;
      height: 85px;
    }
  }
}
</style>
