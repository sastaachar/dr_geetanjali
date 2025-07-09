import style from "./loader.module.scss";

export function Loader() {
  const count = 4;
  return (
    <div className={style.loaderContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className={style.loaderItem}></div>
      ))}
    </div>
  );
}
