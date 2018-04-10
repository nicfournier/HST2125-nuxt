<template>
  <nav class="navbar is-light is-medium" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">

        <nuxt-link to="/" class="navbar-item">
          <b-icon icon="backup-restore" size="is-medium"> </b-icon>
          <span>HST2125</span>
        </nuxt-link>
        <div class="navbar-menu">
          <nuxt-link to="/" class="navbar-item">Intro</nuxt-link>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Parcours pédagogique
            </a>
            <div class="navbar-dropdown is-boxed">
              <nuxt-link to="/parcours/M01/M01-apercu" class="navbar-item">Semaine 01</nuxt-link>
              <nuxt-link to="/parcours/M02/M02-apercu" class="navbar-item">Semaine 02</nuxt-link>
            </div>
          </div>
          
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Cadre spacio-temporel
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                Aperçu spacio-temporel
              </a>
              <nuxt-link to="/ressources/scandinavie" class="navbar-item">Scandinavie</nuxt-link>
              <a class="navbar-item" href="#">
                Îles britanniques
              </a>
              <a class="navbar-item" href="#">
                Italie
              </a>
              <a class="navbar-item" href="#">
                Espagne
              </a>
              <a class="navbar-item" href="#">
                Gaule et Francie
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                Europe de l’Est
              </a>
            </div>
          </div>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
                Orientation et thématiques
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                Politique et droit
              </a>
              <a class="navbar-item" href="#">
                Société et économie
              </a>
              <a class="navbar-item" href="#">
                Église et religion
              </a>
              <a class="navbar-item" href="#">
                Culture et mentalités
              </a>
              <a class="navbar-item" href="#">
                 Les sciences auxiliaires de l’histoire
              </a>
            </div>
          </div>
          <a class="navbar-item" href="#">
              Typologie des sources
          </a>
        </div>
      </div>
    </nav>
  </template>