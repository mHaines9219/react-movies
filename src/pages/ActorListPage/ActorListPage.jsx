import "./ActorListPage.css";

export default function ActorListPage({ movies }) {
  const allCasts = movies.flatMap((movie) => movie.cast);
  const castSet = new Set(allCasts);
  const style = {
    backgroundImage: `url("https://picsum.photos/1200/500")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "10px",
    margin: "10px",
  };
  return (
    <div className="cast-list">
      {[...castSet].map((castMember) => (
        <div key={castMember} id="cast-member" style={style}>
          {castMember}
        </div>
      ))}
    </div>
  );
}
