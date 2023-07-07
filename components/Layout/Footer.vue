<template>
  <div>
    <!-- eslint-disable max-len  -->

    <footer class="footer">
      <div class="footer mainWrapper">
        <div class="contact">
          <h4>
            {{ $t(`footer.contact`) }}
          </h4>
        </div>
        <div class="wrapper1">
          <h5>{{ $t(`footer.email`) }}</h5>
          <a
            href="mailto:info@livieresg.com.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>info@livieresg.com.py</p>
          </a>
          <h5>{{ $t(`footer.phone`) }}</h5>
          <p class="telefono">
            Asunción: +595 21 221 477
          </p>
          <p>Filadelfia: +595 491 432 760</p>
        </div>
        <div class="wrapper2">
          <h5>{{ $t(`footer.offices`) }}</h5>
          <div class="oficina">
            <address>
              {{ $t(`footer.direction1`) }} <br> Asunción - Paraguay
            </address>
            <a
              class="mapslink"
              href="https://www.google.com/maps/place/Livieres+Guggiari/@-25.2864559,-57.6073541,17z/data=!3m1!4b1!4m5!3m4!1s0x945da7d14dddb5a3:0x6f170ccdf660cde9!8m2!3d-25.2864559!4d-57.6051654"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p>{{ $t(`footer.directions`) }}- Google Maps</p>

              </div>
            </a>
          </div>
          <div class="oficina">
            <address>
              {{ $t(`footer.direction2`) }}<br> Filadelfia - Paraguay
            </address>
            <a
              class="mapslink"
              href="https://www.google.com/maps/place/Calle+Pr%C3%A4sidente+Gondra,+Filadelfia,+Paraguay/@-22.354962,-60.0295059,18.04z/data=!4m8!1m2!2m1!1sCalle+B.+H.+Unruh+entre+O.+Miller+y+Pte.+Gondra!3m4!1s0x947210a71cfdce15:0x2632c88cea7d7bf0!8m2!3d-22.3539995!4d-60.0286114"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <p>{{ $t(`footer.directions`) }}- Google Maps</p>

              </div>
            </a>
          </div>
          <p> {{ $t(`footer.times`) }}</p>
        </div>
        <div class="disclaimer">
          <p>
            Livieres Guggiari | Estudio Juridico - © Copyright  {{ $t(`footer.disclaimer`) }} <a class="disclaimerlink" href="https://estudioobliquo.com" target="_blank" rel="noopener">
              Estudio Obliquo
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import SVGarrow from '@/assets/svg/arrow.svg'

export default {
  components: {
    SVGarrow,
  },

}

</script>

  <style lang="scss">
  footer {
    width: 100%;
    background-color: var(--gray-dark);

    .contact{
      display: flex;
      align-items: center;
    }
  }

  .mainWrapper {
    display: grid;
    width: 83%;
    padding: 32px 0 8px;
    margin: 0 auto;
  }

  .wrapper1 {
    margin-bottom: 60px;
  }

  .wrapper1,
  .wrapper2 {
    padding-left: 15px;
    border-left: 0.5px solid #919191;
  }

  /* Para que el border left no sea mas largo que el contenido */
  .wrapper2 p:last-of-type {
    margin-bottom: 0;
  }

  .telefono {
    margin-bottom: 8px;
  }

  footer h4 {
    margin-bottom: 1.87em;
    font-family: "Canela Deck", serif;
    font-size: 18px;
    font-weight: normal;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }

  footer h5 {
    margin-bottom: 0.55em;
    font-family: "Canela Deck", serif;
    font-size: 17px;
    font-style: normal;
    font-weight: bold;
    color: #fff;
  }

  footer p {
    font-size: 17px;
    font-weight: 300;
    color: #d6d6d6;
  }

  address {
    display: block;
    margin-bottom: 11px;
    font-family: "Founders Grotesk", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 300;
    color: #d6d6d6;
  }

  .wrapper1 a {
    text-decoration: none;
  }

  .mapslink {
    text-decoration: none;
  }

  .mapslink div {
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }

  .mapslink p {
    display: block;
    margin-bottom: 0;
    font-size: 15px;
    color: rgb(235 235 235 / 56%);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    transition: color 0.2s;
  }

  .mapslink:hover p {
    color: rgb(255 255 255 / 76%);
    transition: color 0.2s;
  }

  .mapslink svg {
    margin-bottom: 1px;
    margin-left: 5px;
  }

  .mapslink:hover path {
    fill: rgb(255 255 255 / 76%);
    transition: color 0.2s;
  }

  .linkedin svg path {
    transition: fill 0.2s;
  }

  .linkedin:hover svg path {
    fill: rgb(255 255 255 / 76%);
    transition: fill 0.2s;
  }

  .logoContainer {
    width: 55%;
    max-width: 216px;
    margin: 50px auto 25px;
  }

  .disclaimer {
    p{
    display: block;
    width: 81%;
    max-width: 612px;
    margin: 0 auto;
    font-size: 12px;
    color: rgb(255 255 255 / 60%);
    text-align: center;
  }
  }

  .disclaimerlink {
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
  }

  .disclaimerlink:hover {
    color: #ccc;
    transition: color 0.2s;
  }

  @media only screen and (width >= 1000px) {
    .mainWrapper {
      /* grid-template-rows: 69% 31%; */

      /* Safari/Chrome changes */
      grid-template-rows: minmax(270px, 69%) minmax(70px, 31%);
      grid-template-columns: 30% 35% 35%;
      grid-row-gap: 8px;
      width: 85%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .wrapper1,
    .wrapper2 {
      padding-left: 35px;

      /* margin-bottom: 60px; */

      /* Safari/Chrome changes */
      margin-bottom: 0;
      border-left: 1.5px solid #919191;
    }

    .mapslink p {
      font-size: 15px;
    }

    footer h5,
    footer p,
    address {
      font-size: 1rem;
      line-height: 28px;
    }

    footer h4 {
      align-self: center;
      margin-bottom: 0;
      font-size: 1.38rem;
    }

    footer h5 {
      margin-bottom: 2px;
    }

    footer p {
      margin-bottom: 35px;
    }

    .disclaimer {
      grid-column: 1/4;
      align-self: center;
      margin-bottom: 0;
      font-size: 13px;
    }

    .logoContainer {
      display: none;

      /* margin-bottom: 30px;
      grid-column: 2/3;
      align-self: start;
      justify-self: center; */
    }
  }

  </style>
