<template>
  <div class="apercu">
    <div id="tab-intro-content" class="container">
      <div class="columns">
        <div class="column">
          
          <p class="title is-1">
            Aperçu
          </p>
          <p class="subtitle">
            {{ msg }}
          </p>

          <section>
            <b-tabs>
                <b-tab-item label="Objectifs">

                <div class="card">
                    <header class="card-header">
                        <h1 slot="header" class="card-header-title title is-4">
                            Objectifs de la semaine
                        </h1>
                        <span>
                            <b-taglist attached class="is-pulled-right">
                                <b-tag type=" is-dark"><b-icon icon="clock" size="is-small"> </b-icon></b-tag>
                                <b-tag type="is-light">5 heures</b-tag>
                            </b-taglist>
                        </span>
                    </header>
                    <div class="card-content">
                        <div class="content">
                            <ul>
                                <li>Se familiariser avec la typologie des sources à mobiliser pour l’étude du haut Moyen Âge</li>
                                <li>Se familiariser avec les cadres spatio-temporels</li>
                                <li>Fixer le cadre spatio-temporel pour le projet de recherche individuel</li>
                                <li>Comprendre la vision du monde à l’époque médiévale</li>
                            </ul>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item">Enregistrer</a>
                        <a href="#" class="card-footer-item">Éditer</a>
                        <a href="#" class="card-footer-item">Effacer</a>
                    </footer>
                    </div>

                </b-tab-item>

                <b-tab-item label="Contenus essentiels">
                  <h4 class="title is-4">Contenus essentiels</h4>
                  <ul>
                    <li>Les grandes étapes de l’histoire du haut Moyen Âge</li>
                    <li>L’unité du monde du haut Moyen  ge et la diversité des régions</li>
                    <li>Les enjeux et la diversités des sources à l’appui de l’histoire du haut Moyen Âge</li>
                    <li>Les visions et représentations du monde au haut Moyen Âge</li>
                  </ul>
                </b-tab-item>

                <b-tab-item label="Introduction" >
                  <h1 class="title is-4">
                    Introduction
                  </h1>
                  <p>
                    Dans cette première partie du module 2 “cadre spatio-temporel”, deux grandes catégories de l’évolution historique sont au rendez-vous: le temps et l’espace. Pour comprendre comment l’évolution de l’Occident du haut Moyen  ge s’inscrit dans l’espace et dans le temps, nous allons nous familiariser avec les différents espaces et régions couverts par le cours. Dans une perspective de comparaison, il s’agira aussi d’apprécier ce qui relie les différents espaces, mais aussi ce qui les distingue en ce qui concerne les réalités géopolitiques et l’évolution spatio-temporelle. Après tout, un des objectifs majeurs de cette semaine sera pour vous de choisir le cadre spatial pour votre projet de recherche.
                  </p>
                  <p>
                    À travers des exemples de mappae mundi, des cartes médiévales, nous allons aussi analyser comment les catégories du temps et de l’espace étaient définies par les contemporains du haut Moyen  ge.
                  </p>
                  <p>
                    Enfin, je vous invite à prendre connaissance de la typologie des sources du haut Moyen  ge, pour en apprécier la diversité et de là la nécessité de croiser des documents historiques variées pour une meilleure compréhension d’une époque pour laquelle la documentation peut être fragmentaire et éclatée.
                  </p>
                </b-tab-item>

                <b-tab-item label="Videos">
                  <Modal>
                    <card>
                      <h1 slot="header" class="title is-4">
                        Objectifs de la semaine
                      </h1>
                      <b-taglist attached class="is-pulled-right">
                        <b-tag type=" is-dark"><b-icon icon="clock" size="is-small"> </b-icon></b-tag>
                        <b-tag type="is-light">5 heures</b-tag>
                      </b-taglist>
                      <ul>
                        <li>Se familiariser avec la typologie des sources à mobiliser pour l’étude du haut Moyen Âge</li>
                        <li>Se familiariser avec les cadres spatio-temporels</li>
                        <li>Fixer le cadre spatio-temporel pour le projet de recherche individuel</li>
                        <li>Comprendre la vision du monde à l’époque médiévale</li>
                      </ul>
                      <footer class="card-footer">
                          <span slot="button-title"class="card-footer-item">Visionner</span>
                          <a href="#" class="card-footer-item">Éditer</a>
                          <a href="#" class="card-footer-item">Effacer</a>
                      </footer>
                    </card>
                    <div slot="content">
                      <iframe src="https://player.vimeo.com/video/179089952?title=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/179089952">a-venir</a> from <a href="https://vimeo.com/user26937759">FAS - Formation en ligne</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

                        <ul>
                          <li>Se familiariser avec la typologie des sources à mobiliser pour l’étude du haut Moyen Âge</li>
                          <li>Se familiariser avec les cadres spatio-temporels</li>
                          <li>Fixer le cadre spatio-temporel pour le projet de recherche individuel</li>
                          <li>Comprendre la vision du monde à l’époque médiévale</li>
                        </ul>
                    </div>
                  </Modal>

                </b-tab-item>
            </b-tabs> 
        </section>

          <div id="" class="columns ">
            <div class="column">
            <!--<section>
                <button class="button block" @click="isActive = !isActive">Toggle</button>
                <b-message title="Default" :active.sync="isActive">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit
                </b-message>
            </section>-->
              
              <!--<h4 class="title is-4">Objectifs de la semaine</h4>
              <ul>
                <li>Se familiariser avec la typologie des sources à mobiliser pour l’étude du haut Moyen Âge</li>
                <li>Se familiariser avec les cadres spatio-temporels</li>
                <li>Fixer le cadre spatio-temporel pour le projet de recherche individuel</li>
                <li>Comprendre la vision du monde à l’époque médiévale</li>
              </ul>-->
            </div>
            <div class="column">
              
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column">

        </div>
      </div>

    </div>
  </div>
</template>



<!--<script>
export default {
  name: 'apercu', 
  data () {
    return {
      msg: 'module 2',
      isActive: true
    }
  }
}
</script>-->

<script>
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Modal
  },
  data () {
    return {
      msg: 'semaine 2',
      isActive: true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
