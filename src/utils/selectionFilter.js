export const selectionFilter = ({ series, films }) => ({
  series: [
    {
      title: "Documentaries",
      data: series.filter((item) => item.genre === "documentaries"),
    },
    {
      title: "Comedy",
      data: series.filter((item) => item.genre === "comedies"),
    },
    {
      title: "Children",
      data: series.filter((item) => item.genre === "children"),
    },
    {
      title: "Crime",
      data: series.filter((item) => item.genre === "crime"),
    },
    {
      title: "Relaxing",
      data: series.filter((item) => item.genre === "feel-good"),
    },
  ],
  films: [
    {
      title: "Drama",
      data: films.filter((item) => item.genre === "drama"),
    },
    {
      title: "Suspense",
      data: films.filter((item) => item.genre === "suspense"),
    },
    {
      title: "Children",
      data: films.filter((item) => item.genre === "children"),
    },
    {
      title: "Thriller",
      data: films.filter((item) => item.genre === "thriller"),
    },
    {
      title: "Romance",
      data: films.filter((item) => item.genre === "romance"),
    },
  ],
});
