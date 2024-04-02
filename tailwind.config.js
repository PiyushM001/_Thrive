/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/home.js",
    "./src/components/footer.js",
    "./src/components/header.js",
    "./src/components/tournament.js",
    "./src/components/tournament-page.js",
    "./src/components/profile_page.js",
    "./src/components/profile_page_games.js",
    "./src/components/profile_page_posts.js",
    "./src/components/players_page.js",
    "./src/components/player.js",
    "./src/components/profile_form.js",
    "./src/components/login.js",
    "./src/components/aftersignupform.js",
    "./src/components/Team_page.js",
    "./src/components/followcomp.js",
    "./src/components/followers.js",

    "./src/components/ownprofilepage.js",




  ],
   theme: {
    extend: {
      fontFamily: {
        'mochiy-pop': ['Mochiy Pop One', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

