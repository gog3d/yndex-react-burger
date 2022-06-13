import styles from './burger-constructor.module.css';
import BurgerConstructorListContainer from '../burger-constructor-list-container/burger-constructor-list-container.js';
import BurgerConstructorButtonContainer from '../burger-constructor-button-container/burger-constructor-button-container.js';

const BurgerConstructor = () => {
  return (
    <div className={styles["burger-constructor"]} >
      <BurgerConstructorListContainer />
      <BurgerConstructorButtonContainer />
    </div>
  );
}

export default BurgerConstructor;
