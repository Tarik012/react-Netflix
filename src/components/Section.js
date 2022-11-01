const Section = (props) => {
  return (
    <div>
      <p>{props.category}</p>
      <div class="caroussel">
        {props.tabImages.map((element) => {
          // on boucle sur les images du tableau pour afficher l'image
          return <img src={element} alt="logo film"></img>;
        })}
      </div>
    </div>
  );
};

export default Section;
