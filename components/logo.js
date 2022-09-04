import classes from "./logo.module.css";

function Logo() {
  return (
    <div className={classes.imgframe}>
      <img
        alt="Mountains"
        src="/logo.png"
        layout="responsive"
        width={190}
        height={85}
      />
    </div>
  );
}

export default Logo;
