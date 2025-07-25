<template>
  <div class="max-w-4xl mx-auto px-4 py-12 bg-[#F8F5F1]">
    <h1 class="text-4xl font-bold mb-8 text-center text-[#183928]">Recommended Podcasts</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="(podcast, index) in podcasts"
        :key="index"
        class="bg-[#FFFDF6] rounded-lg shadow-lg p-6 flex flex-col items-start"
      >
        <h2 class="text-2xl font-semibold mb-2 text-[#183928]">{{ podcast.title }}</h2>
        <p class="text-md text-[#546E18] mb-3 font-medium">Host: {{ podcast.host }}</p>
        <p class="text-[#333333] leading-relaxed mb-4 flex-grow">{{ podcast.description }}</p>
        <a
          :href="podcast.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-[#D2F059] text-[#183928] font-bold py-2 px-5 rounded-full hover:bg-[#a9c94b] transition-colors duration-300 mt-auto"
        >
          Listen Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PodcastView',
  data() {
    return {
      podcasts: [
        {
          title: "Fularsız Entellik",
          host: "Immanuel Tolstoyevski (Podbee Media)",
          description: "Halk için halka rağmen entellik. İlginç konular, eleştirel düşünce... Felsefe, bilim, psikoloji ve daha birçok alanda derinlemesine sohbetler.",
          link: "https://fularsizentellik.com/podcast" 
        },
        {
          title: "Yapa Yapa Öğreniyoruz",
          host: "Ece Aybike Ala-Pettersen",
          description: "Psikoloji ve nörobilimi hikayelerle anlatan podcast. Davranış bilimlerini hikayeler aracılığıyla öğrenmeyi sevenlerin mum diktiği o kale.",
          link: "https://podcastrepublic.net/podcast/1648145572" 
        },
        {
          title: "Served with Andy Roddick",
          host: "Andy Roddick, L. Jon Wertheim, Mike Hayden (Vox Media)",
          description: "A weekly podcast with former world No. 1 Andy Roddick, covering everything happening in the world of tennis. They tackle the biggest stories, the sport's biggest stars, and the people who are changing tennis, on a weekly basis.",
          link: "https://podcasts.voxmedia.com/show/served-with-andy-roddick" 
        },
        {
          title: "Hidden Brain",
          host: "Shankar Vedantam (NPR)",
          description: "A podcast that helps you understand your own mind and the minds of people around you. It offers deep dives into science and social sciences.",
          link: "https://hiddenbrain.org/"
        }
      ]
    };
  }
};
</script>

<style scoped>
body {
  font-family: 'Noto Sans', sans-serif;
}
</style>