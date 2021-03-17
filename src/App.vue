<template>
  <div id="app">
		<TheNavigation/>
		<!-- <transition name="slide" mode="out-in" appear>
		<router-view :key="$route.path"/>
		</transition> -->

		<!-- <transition name="moveUp" > -->

		<transition name="fade" mode="out-in">
		<router-view :key="$route.path"/>
		</transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue"
export default {
  name: 'App',
  components: {
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	text-align: center;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.slide-enter-active,
.slide-leave-active {
	transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
	opacity: 0;
	transform: translateX(-30%);
}

.moveUp-enter-active {
	animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
	0%{
		opacity: 0;
	}
	50%{
		opacity: 0.5;
	}
	100%{
		opacity: 1;
	}
}
</style>
